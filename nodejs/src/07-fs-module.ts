/**
 * file system - fs module allow you to create folders, write files, read, create, check file information, and delete file
 * Ways to work with file system => Sync Api (fs.readfiesync), callback apis (fs.readfile), and promise Api.
 * 
 * Sync api should be used when creating or building small scripts.
 * Never use sync api for high traffic apis. also, dont use for background jobs
*/

import path from "node:path";
import fs, { stat } from 'node:fs'
import fsPromises from 'node:fs/promises'


const DEMO_FOLDER_PATH = path.join(process.cwd(), 'file-system', 'fs-demo');
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'sync-note.txt')
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'callback-note.txt')
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'promise-note.txt')

function ensureDemoFolderExist(): void {
    if (!fs.existsSync(DEMO_FOLDER_PATH)){
        fs.mkdirSync(DEMO_FOLDER_PATH, {recursive: true})
    }
}

type FileResult = {
    style: string;
    fileName: string;
    content: string;
    sizeInBytes: number;
}

function runSyncExample(): FileResult {
    // Write content to a file. Using the fs.writeFileSync, if file does not exist, node creates it.
    fs.writeFileSync(SYNC_FILE_PATH, "Created using file sync", 'utf-8')

    fs.appendFileSync(SYNC_FILE_PATH, "Appended using sync fs", 'utf-8');

    // To read a file content
    const content = fs.readFileSync(SYNC_FILE_PATH, 'utf-8')

    // Gives information about the file and folder
    const stats = fs.statSync(SYNC_FILE_PATH)

    return {
        style: 'sync',
        content,
        fileName: path.basename(SYNC_FILE_PATH),
        sizeInBytes: stats.size
    }
}

function runCallbackExample(): Promise<FileResult> {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            CALLBACK_FILE_PATH,
            "This is a day that the Lord has made",
            'utf-8',
            (writeError) => {
                if (writeError) {
                    reject(writeError)
                    return;
                }
                
                fs.appendFile(
                    CALLBACK_FILE_PATH,
                    "This is the message to be appended",
                    'utf-8',
                    (appendError) => {
                        if (appendError) {
                            reject(appendError)
                            return
                        }

                        fs.readFile(CALLBACK_FILE_PATH, 'utf-8', (readError, content) => {
                            if (readError) {
                                reject(readError);
                                return;
                            }

                            fs.stat(CALLBACK_FILE_PATH, (statError, stats) => {
                                if (statError) {
                                    reject(statError)
                                    return;
                                }
                                resolve({
                                    style: "callback",
                                    fileName: path.basename(CALLBACK_FILE_PATH),
                                    content,
                                    sizeInBytes: stats.size,
                                })
                            })
                        })
                    }
                )
            }

        )
    })
}


// Promises
async function runPromiseExample(): Promise<FileResult> {
    await fsPromises.writeFile(
        PROMISE_FILE_PATH,
        "Content to write in the promise file path",
        'utf-8'
    )

    await fsPromises.appendFile(
        PROMISE_FILE_PATH,
        " Content to be appended in promise path file",
        'utf-8'
    )

    const content = await fsPromises.readFile(PROMISE_FILE_PATH, 'utf-8')
    const stats = await fsPromises.stat(PROMISE_FILE_PATH);

    return {
        style: "Promises",
        fileName: path.basename(PROMISE_FILE_PATH),
        content,
        sizeInBytes: stats.size
    }
}

async function main(): Promise<void> {
    try {
        ensureDemoFolderExist()
        const syncResult = runSyncExample();
        const callbackResult = await runCallbackExample()
        const promiseResult = await runPromiseExample()

        console.log([syncResult, callbackResult, promiseResult])
    } catch (error) {
        const message = error instanceof Error ? error.message : "unknown error"
        console.error("file system error", message)
    }
}

main();


