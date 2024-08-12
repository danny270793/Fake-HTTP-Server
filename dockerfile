FROM node:20.16.0-alpine as builder

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src
RUN npm run build

FROM node:20.16.0-alpine as server
RUN apk add --update curl && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package* ./
RUN npm install --production

COPY --from=builder /app/build ./build

RUN touch /app/.env

RUN addgroup -S appuser && adduser -S appuser -G appuser
RUN chown -R appuser:appuser /app
USER appuser

CMD npm run start
