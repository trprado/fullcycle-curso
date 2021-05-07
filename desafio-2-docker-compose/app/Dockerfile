FROM node:16-alpine3.13

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENTRYPOINT [ "dockerize", "-wait", "tcp://db:3306", "-timeout", "300s", "-wait-retry-interval", "10s", "docker-entrypoint.sh" ]

WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]
