/**
 * http.createServer - creates low level http server
 * callback runs for every incoming http request
 * 
 * req => request object - contains req method
 * method - get, put, post, options, delete etc..
 * path - /, /users
 * headers - contains metadata sent by the client
 * req body -> data sent by the client: data from post/put
 * 
 * res => Response object: used by our server sent back data from server to the client
 * status code - Checks if the operation is successful or not. 
 * response header
 * response body.
 */

import { createServer, IncomingMessage, ServerResponse } from "node:http";


const PORT = 3000

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const method = req.method;

    // req.url - contains the path the client is requesting. eg /user, /user?id=1
    const url = req.url; 

    // Headers are extraInformation we send alongside our req. eg the browser time, content-type, token etc
    const userAgent = req.headers["user-agent"]

    // set http status code eg 200 -> req is successful, 201, 400, 429, 404 etc
    res.statusCode = 200

    // setHeader => Tells the client what kind of response we are expecting
    res.setHeader('Content-Type', 'text/plain' )

    // to end a response. if not added, the browser of the client will continue to wait.
    res.end(`Basic http node server: ${method}: ${url} ${userAgent}`)
})

// Start the actual server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})