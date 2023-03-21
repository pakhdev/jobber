import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Subject, from, catchError, of } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

interface HttpTask<T> {
    url: string;
    headers?: Record<string, string>;
    parse: (response: any) => T;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
}

@Injectable()
export class HttpParserService implements OnModuleInit, OnModuleDestroy {
    private readonly maxConnections = 5;
    private tasks$ = new Subject<HttpTask<any>>();
    private onDestroy$ = new Subject<void>();

    constructor(private readonly httpService: HttpService) {
    }

    onModuleInit() {
        this.tasks$
            .pipe(
                concatMap((taskData, index) => {
                    if (index % this.maxConnections === 0) {
                        return from(new Promise((resolve) => setTimeout(resolve, 1000))).pipe(
                            concatMap(() => from([taskData])),
                        );
                    }
                    return from([taskData]);
                }),
                concatMap((taskData) => {
                    const { url, headers, parse } = taskData;
                    return this.httpService.get(url, { headers }).pipe(
                        takeUntil(this.onDestroy$),
                        concatMap((response: AxiosResponse) => {
                            const result = parse(response.data);
                            taskData.resolve(result);
                            return from([]);
                        }),
                        catchError(err => {
                            console.warn('error en:', err);
                            return of([]);
                        }),
                    );
                }),
            )
            .subscribe();
    }

    onModuleDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    public async performTask<T>(url: string, parse: (response: any) => T, headers?: Record<string, string>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.tasks$.next({ url, headers, parse, resolve, reject });
        });
    }
}
