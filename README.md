# Desafios
Resolução da serie de desafios do curso FullCycle da [Code.Education](https://code.education).

## Tabela de Conteúdo

- [Desafios](#desafios)
    + [Tabela de Conteúdo](#tabela-de-conteúdo)
    + [Desafio Docker](#desafio-docker)
        * [Desafio 1 - Golang](#desafio-1---golang)
        * [Desafio 2 - MySQL-Node-Nginx](#desafio-2---mysql-node-nginx)
    + [Desafio Git](#desafio-git)
        * [Desafio 3 - Git](#desafio-3---git)

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


### Desafio 2 - MySQL-Node-Nginx
**links**: 
- [Pasta Desafio 2 - Compose](desafio-2-docker-compose)
- [Compose](desafio-2-docker-compose/docker-compose.yaml)
- [Banco de Dados - SQL](desafio-2-docker-compose/db/sql/people.sql)
- [Node - Dockerfile](desafio-2-docker-compose/app/Dockerfile)
- [Node - Código App](desafio-2-docker-compose/app/server.js)
- [Nginx - Configuração](desafio-2-docker-compose/proxy/nginx.conf)

Esse compose foi criado para o Desafio 2 Mysql/Node/Nginx. Se trata de um arquivo com o padrão compose usado em conjunto com o Docker Compose para subir três serviços de container, sendo um deles uma imagem com a aplicação.

Para o banco de dados foi utilizada a imagem padrão *Mariadb:10.5-focal*, para a aplicação node, foi utilizada a imagem *node:16-alpine3.13*, nessa imagem também foi instalado a aplicação **dockerize** para ter a funcionalidade de aguardar o container de banco de dados terminar seu carregamento. Para os serviços foram instalados por meio do npm os seguintes modulos: **express** e **mysql**. Já para o container responsável pelo próxy foi utilizado a imagem *nginx:1.20-alpine* e reescrita o arquivo **nginx.conf**.

O banco de dados esta exposto apenas para a rede interna dos containers na porta **3306**, a aplicação node esta também exposta apenas na rede interna dos constainers na porta **3000**, por fim o nginx faz o proxy reverso na porta **80** mas expoem para a rede local do computador na porta **8080**. Assim o acesso pode ser feito depois de todos os serviços carregados no link [http://localhost:8080](http://localhost:8080).

Para execultar os serviços a primeira vez, execute:
```bash
docker-compose up --build -d
```

O argumento `--build` ira gerar a imagem da aplicação, nas demais vezes esse comando pode ser omitido. O argumento `-d` ira desacoplar os serviços do terminal.

Para verificar os serviços em execução, pode ser feito de duas formas:
```bash
docker ps
```
Ou simplesmente 
```bash
docker-compose ps
```
Este ultimo ira apresentar apenas os containers em execução que representam o arquivo de composição.

Para finalizar e remover os containers:
```bash
docker-compose down
```

Também é possível remover a imagem gerada pelo build fazendo:
```bash
docker-compose down --rmi local
```

Ou remover todas as imagens usadas pelo compose alterando o parâmetro `local` para `all`.

## Desafio Git

### Desafio 3 - Git
**links:**
- [desafio-3-git](desafio-3-git)
- [Métodologia Git Flow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
- [Semantic Versioning](https://semver.org)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint e Husk](https://commitlint.js.org/)
- [Commitizen](http://commitizen.github.io/cz-cli/)

Esse desafio trata-se apenas de gerar um commit assinado digitalmente. Porém também foi utilizadas no repositorio as metodologias Git Flow, Semantic Versioning e Conventional Commits. A pasta [desafio-3-git](desafio-3-git) foi criada para gerar conteúdo para o commit.

Comando utilizados para gerar a GPG:
```bash
gpg --full-gen-key
```
Tipo de chave RSA and RSA de 4096 bits

Descobrir a hash da chave para configura assinatura git:
```bash
gpg --list-secret-keys --keyid-format LONG
```

Configurar git para usar assinatura ao realizar *commit*:
```bash
git config --global user.asigningkey CHAVE
git config --global commit.gpgsign true
```

Github configurado para usar a chave gerada ao realizar *commit* e *branchs* configurado para padrão ser o *branch* `develop`.
