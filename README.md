# Desafios
Resolução da serie de desafios do curso FullCycle da [Code.Education](https://code.education).

## Tabela de Conteúdo

- [Desafios](#desafios)
    + [Tabela de Conteúdo](#tabela-de-conteúdo)
    + [Desafio Docker](#desafio-docker)
        * [Desafio 1 - Golang](#desafio-1---golang)
        * [Desafio 2 - Node/Nginx](#desafio-2---node\/nginx)

---
## Desafio Docker
Desafios Docker/Containers.

### Desafio 1 - Golang
**links**: 
- [Pasta Desafio 1 - Go](desafio-1-docker-go)
- [Dockerfile](desafio-1-docker-go/Dockerfile)
- [Código Go](desafio-1-docker-go/msg.go)

Essa imagem foi feita para o Desafio 1 Golang. Se trata de um binário compilado usando a imagem golang oficial do Docker Hub e a imagem scratch para executar por meio de multi-stage.

O tamanho final da imagem ficou em menos de 1MB (**795KB**), para isso não foi utilizada a biblioteca `fmt` do exemplo do site Golang. Também foi utilizada as flags `-ldflags="-w -s"` e `-gcflags=all="-l -B -wb=false"` para minimizar o tamanho do binário final.

Para construir a imagem, considerando que esta na raiz desse projeto basta executar:

```bash
docker build -t user/desafio-go:v1 desafio-1-docker-go/ -f desafio-1-docker-go/
```

Ou fazer um `pull` da imagem já gerada.
```bash
docker pull docker.io/trprado/desafio-go:v1
```

Para execultar:
```bash
docker run --rm trprado/desafio-go
```


### Desafio 2 - Node/Nginx
