import { createServer, IncomingMessage, ServerResponse } from "node:http";

const PORT = 3001

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";

    // http://localhost:3001/users          req.url: /users
    // http://localhost:3001/users?id=1     req.url: /users?id=1
    // To extract path - convert req.url to a path object, then read the path name.
    const requestUrl = new URL(req.url ?? "/", `http:${req.headers.host}`)
    const pathName = requestUrl.pathname

    res.setHeader("Content-Type", "text/plain")

    if (method === "GET" && pathName === "/health") {
        res.statusCode = 200;
        res.end("server is healthy")
        return
    }

    if (method === "GET" && pathName === "/users") {
        res.statusCode = 200;
        res.end("List of users")
        return
    }

    if (method === "POST" && pathName === "/users") {
        res.statusCode = 201
        res.end("User posted successfully!!!")
        return;
    }

    // If route is not found
    res.statusCode = 404
    res.end("route not found")
})

server.listen(PORT, () => {
    console.log(`server is now listening on port ${PORT}`)
})