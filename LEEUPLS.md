# Ambiente de desenvolvimento

## Instalação docker-compose:
```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

**iniciar o ambiente com -d para não prender o terminal**
```sh
docker-compose up -d
```
**acessar terminal do container**
```sh
docker exec -it arbiter /bin/bash
```
**Primeiro acesso**
```sh
npm install
```
**Executar o arbiter**
```sh
sls offline
```
