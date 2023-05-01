# FAKE HTTP Server

Fake http server wich returns the hostname of the running machine and the node name shared via environment variables

## Use it

Run the image specifing the `SERVER_NAME` and publish the http port

With docker

```bash
docker run -it --rm --env SERVER_NAME=NODE_1 --publish 9000:3000 danny27071993/fake-http-server
```

With docker compose

```yaml
version: '3.3'

networks:
    network:
        driver: bridge

services:
    fake-http-server:
        image: danny27071993/fake-http-server
        ports:
            - 9000:3000
        healthcheck:
            test: curl 127.0.0.1:3000
            interval: 30s
            timeout: 3s
            retries: 5
        networks:
            - network
```

## Build from code

Build docker image

```bash
docker build -t danny27071993/fake-http-server .
```

Run a container based on the image

```bash
docker run -it --rm --env SERVER_NAME=NODE_1 --publish 9000:3000 danny27071993/fake-http-server
```

Check the connectivity

```bash
curl 127.0.0.1:9000
```

Push the image to docker hub

```bash
docker push danny27071993/fake-http-server
```

## Follow me

- [Youtube](https://www.youtube.com/channel/UC5MAQWU2s2VESTXaUo-ysgg)
- [Github](https://www.github.com/danny270793/)
- [LinkedIn](https://www.linkedin.com/in/danny270793)

## LICENSE

Licensed under the [MIT](license.md) License

## Version

RPiGpioController version 2.0.16.09.16.19.30

Last update 04/09/2016
