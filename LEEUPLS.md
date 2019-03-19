# Ambiente de desenvolvimento

## Instalação docker-compose via terminal do linux:
```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
### Entrar no diretório /projetos/docker/backend para poder iniciar o ambiente

**Iniciar o ambiente com -d para não prender o terminal:**
```sh
docker-compose up -d
```
**Acessar terminal do container:**
```sh
docker exec -it arbiter /bin/bash
```
### Os comandos abaixo devem ser executados dentro do terminal do container

**Primeiro acesso:**
```sh
npm install
```
**Executar o arbiter offline:**
```sh
sls offline
```
