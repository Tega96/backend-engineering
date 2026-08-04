import { createServer, IncomingMessage, ServerResponse } from "node:http";

const PORT = 3002;

type CreateUserBody = {
    name?: string;
    email?: string;
}

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const method = req.method
    const requestUrl = new URL(req.url ?? '/', `http:${req.headers.host}`)
    const pathName = requestUrl.pathname
    res.setHeader("Content-Type", "text/plain")

    if (method === "POST" && pathName === "/user") {
        const chunks: Buffer[] = []

        // data runs everytime node receives a new data
        req.on("data", (chunk: Buffer) => {
            chunks.push(chunk)
        })

        // The end event runs when all processes have been completed - ie, all chunks have been accumulated
        req.on("end", () => {
            try {
                // Buffer.concat combines all the received chunks into one buffer
                const rawBody = Buffer.concat(chunks).toString("utf-8")

                if (!rawBody) {
                    res.statusCode = 400
                    res.end("req body is required")
                    return
                }

                const body = JSON.parse(rawBody) as CreateUserBody;

                if (!body.name || !body.email) {
                    res.statusCode = 400;
                    res.end(`both name and email is required`)
                    return
                }

                res.statusCode = 201;
                res.end(`User created ${body.name} and {body.email}`) // In future, we'll store this in the database
            } catch {
                res.statusCode = 400
                res.end("Invalid json body")
            }
        })

        req.on("error", () => {
            res.statusCode = 500;
            res.end("failed to read request body")
        })
    }

    res.statusCode = 404
    res.end('route not found')
})

server.listen(PORT, () => {
console.log(`Severer is listening on port ${PORT}`)
})