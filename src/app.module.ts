import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoiValidationSchema } from '@/config/joi.validation';
import { envConfiguration } from './config/env.config';
import { JobsModule } from './jobs/jobs.module';
import { CompaniesModule } from './companies/companies.module';
import { IndeedModule } from './job-scrapers/indeed/indeed.module';
import { HttpParserModule } from './parsers/http-parser/http-parser.module';
import { PuppeteerParserModule } from './parsers/puppeteer-parser/puppeteer-parser.module';
import { TelegramModule } from './telegram/telegram.module';
import { KeywordsModule } from './keywords/keywords.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [envConfiguration],
            validationSchema: JoiValidationSchema,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_DB_HOST,
            port: +process.env.POSTGRES_DB_PORT,
            database: process.env.POSTGRES_DB_NAME,
            username: process.env.POSTGRES_DB_USER,
            password: process.env.POSTGRES_DB_PASSWORD,
            autoLoadEntities: true,
            synchronize: true,
        }),
        AuthModule,
        JobsModule,
        CompaniesModule,
        IndeedModule,
        HttpParserModule,
        PuppeteerParserModule,
        TelegramModule,
        KeywordsModule,
    ],
})
export class AppModule {
}
