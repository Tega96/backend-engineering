// entry file for express
// express related logic
import express from 'express'
import { logger } from './lib/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';


export function createApp() {

    // app is holding every feature provided by express.
    const app = express();
    app.use(express.json())
    //express.urlencoded() is a built-in middleware function that parses incoming requests with URL-encoded payloads


    app.use(notFound)
    app.use(errorHandler)

}




