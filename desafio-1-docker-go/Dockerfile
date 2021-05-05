FROM golang:1.16-alpine3.13 AS msg

WORKDIR /usr/src/app/

COPY . .

RUN go build -ldflags="-w -s" -gcflags=all="-l -B -wb=false" msg.go

########### Final Image ##########
FROM scratch

WORKDIR /usr/src/app

COPY --from=msg /usr/src/app/msg .

CMD [ "./msg" ]
