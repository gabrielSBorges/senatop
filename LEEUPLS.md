# Docker e Containers
> - Docker Compose: permite orquestrar vários containers docker-compose.yml
> - Volumes é onde salvamos os dados nos containers 


**Instalação docker:**
```sh
http://cienciadacomputacao2012.blogspot.com/2018/04/instalando-docker-ce-no-ubuntu-1804.html
```
**Executar o Docker sem precisar de sudo, adicione o seu usuário ao grupo docker:**
```sh
sudo usermod -aG docker $(whoami)
```

## Comandos
**inicia um container com base dos Docker hub exemplo para iniciar um container do ubuntu:**
```sh
docker run ubuntu
```
**lista todas os containers rodando:**
```sh
docker ps 
```
**lista todas os containers criados:**
```sh
docker ps -a
```
**inicia um container:**
```sh
docker start 05025384675e
```
**inicia um container e vincula ao terminal - permite acessar o terminal do container:**
```sh
docker start -a -i 05025384675e
```
**para um container:**
```sh
docker stop 05025384675e
```
**remover container:** 
```sh
docker rm 05025384675e
```
**Executa o container com (-d para liberar o teminal) (-P para vincular numa porta no PC):**
```sh
docker run -d -P imagem 
```
**consulta  a porta do processo:**
```sh
docker port 05025384675e
```
**Montar um volume específico num container ligando um diretório entre o seu PC e o container, assim mantendo os dados salvos - bom para armazenar os fontes**
```sh
docker run -it -v "/home/eric/projetos/html:/var/w" ubuntu
```
               -v Caminho no PC           Caminho no container

### Exemplo para vinculo de volume funcional de ambiente de desenvolvimento 
```sh
docker run -p 8080:3000 -v "C:\Users\Alura\Desktop\volume-exemplo:/var/www" -w "/var/www" node npm start
``` 
            |            |                                                   |            |    |
            |            |                                                   |            |    |
            |            |                                                   |            |    npm start - Executa o comando
            |            |                                                   |            node - Imagem do dockerhub usada   
            |            |                                                  -w Acessa o diretorio   
	    |           -v "path:path" - Liga os diretorios pc ao do container
	   -p 8080:3000 - Liga a porta do container com a porta do PC

**Montra todos os detalhes do container**
```sh
docker inspect 05025384675e
```
**Acessa uma instancia em execução**
```sh
docker attach <container_name>
```
**Acessar terminal bash container**
```sh
docker exec -i -t 05025384675e /bin/bash
```
**Remover containers parados**
```sh
docker ps -q |xargs docker rm 
```
**Remover imagens paradas**
```sh
docker images -q |xargs docker rmi
```
**Mostrar o ip todos os containers rodando no PC possuem um rede privada liberada**


#Criando Imagem
Criando Dockerfile
https://cursos.alura.com.br/course/docker-e-docker-compose/task/29389
```sh
# contruindo uma imagem
docker build -f Dockerfile -t rotaexata/base1 .



```

Redes
https://cursos.alura.com.br/course/docker-e-docker-compose/task/29413
