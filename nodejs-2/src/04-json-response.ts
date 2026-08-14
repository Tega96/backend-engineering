import { createServer, IncomingMessage, ServerResponse } from "node:http";

const PORT = 3004

type User = {
    id: number;
    name: string;
    email: string;
}

type ApiResponse<T> = {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
}

const users: User[] = [
    { id: 1, name: "Otega", email: "otiteotega@gmail.com" },
    { id: 2, name: "John", email: "john23@gmail.com" },
    { id: 3, name: "Hillary", email: "hillary@gmail.com" },
    { id: 4, name: "Mary", email: "mary99@gmail.com" },
]

// helper function to send json
function sendJson<T> (
    res: ServerResponse,
    statusCode: number,
    body: ApiResponse<T>
): void {
    res.statusCode === statusCode;
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(body))
}

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const method = req.method
    const requestUrl = new URL(req.url ?? '/', `http://{req.headers.host}`)
    const pathName = requestUrl.pathname;

    if (method === "GET" && pathName === '/') {
        sendJson(res, 200, {
            success: true,
            message: "server is running",
            data: {
                routes: ["GET/users"]
            },
        })
        return;
    }

    if (method === "GET" && pathName === "/users") {
        sendJson(res, 200, {
            success: true,
            message: "Users gotten",
            data: users 
        })
        return;
    }

    sendJson<null>(res, 404, {
        success: false,
        message: "Route not found",
        error: `${method} with pathname: ${pathName} not found`
    })
})

server.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`)
})