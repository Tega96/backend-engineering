// entry file for express
// express related logic
import express from 'express'
import cors from 'cors'
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';
import { apiRouter } from './routes/index.js';
import { logger } from './lib/logger.js';
import { env } from './config/env.js';





// app is holding every feature provided by express.
const app = express();
app.use(cors())
app.use(express.json())
//express.urlencoded() is a built-in middleware function that parses incoming requests with URL-encoded payloads
app.use(express.urlencoded({extended: true}))


app.use('/api', apiRouter)


app.use(notFound)
app.use(errorHandler)



export function createApp() {
    app.listen(env.port, () => {
        logger.info(`Server is listening on http://localhost:${env.port}`)
    });
}




