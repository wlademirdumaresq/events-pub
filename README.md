# events-pub

## Objetivo
TODO

***
## Sumário
1. [Resumo](#resumo)
2. [Requisitos](#requisitos)
3. [Configuraçao](#configuracao)

***
## 1 - Resumo:

TODO
***

## 2 - Requisitos
* node: 16.x

***

## 3 - Configuração



### Executando:

Rode os seguintes comandos para para baixar as dependencias e  executar o projeto:

```
npm install
```

### Container:

Execute `docker-compose up` para subir os containers.

Execute `docker-compose down` para derrubar os containers.


### TypeORM:

Execute `npm run typeorm migration:create -- -n NOMEMIGRATION` para criar uma migration.

Execute `npm run typeorm migration:run` para rodar as migrations.
