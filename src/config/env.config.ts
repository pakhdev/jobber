export const envConfiguration = () => ({
    environment: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
    botId: process.env.TELEGRAM_BOT_TOKEN,
    importantJobsChannel: process.env.TELEGRAM_IMPORTANT_JOBS,
    normalJobsChannel: process.env.TELEGRAM_NORMAL_JOBS,
});
