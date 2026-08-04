/**
 * Streams enables Node js to process large amout of data efficiently
 * Stream is a contineous flow of data that can be processed piece by piece instead of all at once
 * You first process by chunk instead of loading everything in memory
 * Used to read large files, upload files, download files, audio/video processing, compressions etc.
 * 
 * Stream is memory efficient because it does not load all the data at once. 
 * 
 * data is sent in chunks
 * 
 * Stream types: 
 * 1. readable streams - source of data 
 * 2. Writable stream - destination where the data is written
 * 3. Transform stream - Read and transform data, ie change the data and pass it forward
 * 
 */

import {Readable, Transform, Writable} from 'node:stream'
import { pipeline } from 'node:stream/promises';


// Create a readable stream from an array. each item becomes chunks.
const readableStream = Readable.from([
    "hello",
    "from ",
    "node.js ",
    "Streams",
])

// Transform text to uppercase using the Transform method
const uppercaseTransform = new Transform({
    // Chunk is a buffer, and converted to a string, and pass the result to the callback
    transform(chunk, encoding, callback) {
        const text = chunk.toString();

        // callback(error, result)
        callback(null, text.toUpperCase())
    }
})

// Receives the chunk and do something. It will write data to a particular file or send data to http or cloud
const writeableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log('received chunk', chunk.toString())

        // Tells node it has already handle the chunk, and can be sent to the next one.
        callback()
    }
})

async function main(): Promise<void> {
    try {

        // Pipeline connects all stream together by passing all your sources
        await pipeline(readableStream, uppercaseTransform, writeableStream)
        console.log("Stream completed" )
    } catch (error) {
        const msg = error instanceof Error ? error.message : "unknown error";
        console.log("Stream failed", msg)
    }
}

main()