import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { from, Subject } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

interface PuppeteerTask<T> {
    task: (page: any) => Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
}

@Injectable()
export class PuppeteerParserService implements OnModuleInit, OnModuleDestroy {
    private browser: any;
    private tasks$ = new Subject<PuppeteerTask<any>>();

    async onModuleInit() {
        this.browser = await puppeteer.launch();
        const page = await this.browser.newPage();

        this.tasks$
            .pipe(
                concatMap((taskData) => {
                    return from(taskData.task(page)).pipe(
                        tap({
                            next: (result) => {
                                taskData.resolve(result);
                            },
                            error: (error) => {
                                taskData.reject(error);
                            },
                        }),
                    );
                }),
            ).subscribe();

    }

    async onModuleDestroy() {
        if (this.browser) {
            await this.browser.close();
        }
    }

    public async performTask<T>(task: (page: any) => Promise<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.tasks$.next({ task, resolve, reject });
        });
    }
}
