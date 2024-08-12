# FAKE HTTP Server

[![Release pipeline](https://github.com/danny270793/Fake-HTTP-Server/actions/workflows/tag-image.yaml/badge.svg)](https://github.com/danny270793/Fake-HTTP-Server/actions/workflows/release.yaml)

![Docker Image Size](https://img.shields.io/docker/image-size/danny27071993/Fake-HTTP-Server)
![GitHub repo size](https://img.shields.io/github/repo-size/danny270793/Fake-HTTP-Server)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/danny270793/Fake-HTTP-Server)

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/danny270793/Fake-HTTP-Server)
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/danny270793/Fake-HTTP-Server/total)
![Docker Pulls](https://img.shields.io/docker/pulls/danny27071993/Fake-HTTP-Server)

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

[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://www.youtube.com/channel/UC5MAQWU2s2VESTXaUo-ysgg)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/danny270793/)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danny270793)

## LICENSE

[![GitHub License](https://img.shields.io/github/license/danny270793/Fake-HTTP-Server)](license.md)

## Version

![GitHub Tag](https://img.shields.io/github/v/tag/danny270793/Fake-HTTP-Server)
![GitHub Release](https://img.shields.io/github/v/release/danny270793/Fake-HTTP-Server)
![Docker Image Version](https://img.shields.io/docker/v/danny27071993/Fake-HTTP-Server)

Last update 04/09/2016
