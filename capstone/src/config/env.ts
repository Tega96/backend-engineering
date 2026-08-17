// load the env file
import dotenv from 'dotenv'

dotenv.config(); // This loads the env file into process.env by default


export const env = {
    port: Number(process.env.PORT ?? 4000),
    isProduction: (process.env.NODE_ENV ?? 'development') === 'production',
    nodeEnv: process.env.NODE_ENV ?? 'development',
    logLevel: process.env.LOG_LEVEL ?? 'info'
} as const;
