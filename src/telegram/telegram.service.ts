import { Injectable, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { ConfigService } from '@nestjs/config';

interface MessageDto {
    chatId: string;
    text: string;
}

@Injectable()
export class TelegramService implements OnModuleInit {

    private bot: Telegraf;
    private messages: MessageDto[] = [];

    constructor(private readonly configService: ConfigService) {
        this.bot = new Telegraf(this.configService.get('botId'));
    }

    sendError(): string {
        return 'This action will send an error message to telegram';
    }

    sendImportant(text: string): void {
        this.messages.push({ chatId: this.configService.get('importantJobsChannel'), text });
    }

    sendNormal(text: string): void {
        this.messages.push({ chatId: this.configService.get('normalJobsChannel'), text });
    }

    onModuleInit() {
        setInterval(async () => {
            const message = this.messages.shift();
            if (message) await this.sendToTelegram(message);
        }, 1000);
    }

    private async sendToTelegram(message: MessageDto) {
        const { chatId, text } = message;
        try {
            await this.bot.telegram.sendMessage(chatId, text);
        } catch (error) {
            console.error(`Error sending message to Telegram: ${ error }`);
        }
    }
}
