import Http from 'http'
import DotEnv from 'dotenv'
import Os from 'os'

DotEnv.config()

let requestsReceived: number = 0

const server = Http.createServer((request, response) => {
  requestsReceived += 1
  const hostname: string = Os.hostname()
  response.writeHead(200)
  response.end(`<html><head><title>HTTP Hello World</title></head><body><h1>Hello from ${hostname}</h1><p>Running on server ${process.env.SERVER_NAME ?? 'NO NAME PROVIDED'}</p><p>${requestsReceived} requests received</p></body></html`)
})

const port: number = 3000
server.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`)
})
