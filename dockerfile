FROM node:18.16.0-alpine as builder

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src
RUN npm run build

FROM node:18.16.0-alpine as server
RUN apk add --update curl && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package* ./
RUN npm install --production

COPY --from=builder /app/build ./build

CMD npm run start
