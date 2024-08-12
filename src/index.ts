import Http, { IncomingMessage, ServerResponse } from 'node:http'
import Os from 'node:os'

let requestsReceived: number = 0

const server = Http.createServer(
    (request: IncomingMessage, response: ServerResponse) => {
        console.log(`${request.method} ${request.url}`)

        switch (request.url) {
            case '/':
                requestsReceived += 1
                const hostname: string = Os.hostname()
                response.writeHead(200)
                response.end(
                    `<html><head><title>HTTP Hello World</title></head><body><h1>Hello from ${hostname}</h1><p>Running on server ${process.env.SERVER_NAME ?? 'NO NAME PROVIDED'}</p><p>${requestsReceived} requests received</p></body></html>`,
                )
                break
            case '/health':
                response.setHeader('content-type', 'application/json')
                response.writeHead(200)
                response.end(`{"status": "ok"}`)
                break
            default:
                response.writeHead(404)
                response.end(
                    `<html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body></html`,
                )
                break
        }
    },
)

const port: number = 3000
server.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`)
})
