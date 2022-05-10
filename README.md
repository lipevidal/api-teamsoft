# Api Teamsoft

### Configurações iniciais

Foi escolhido o Adonis como Framwork para trabalhar neste projeto. E junto com o Adonis foi escolhido o typescript.

Para iniciar um projeto Adonis com typescript, foi usado o seguinte comando:

```
npm init adonis-ts-app@latest api-teamsoft
```

Para manipular o banco de dados mysql, foi escolhido o docker, que basicamente permite trabalhar com banco de dados sem a necessidade de ter que baixa-lo na máquina.

Para trabalhar com o docker, é preciso criar um container contendo o banco de dados escolhido dentro dele. Para isso foi criado o seguinte arquivo na raiz do projeto:

**docker-compose.yml**

Dentro desse arquivo foi criado um container do docker contendo o mysql que é o banco de dados que foi usado nesse projeto.

O próximo passo foi conectar o Adonis com o banco de dados. Porém por padrão, o Adonis não vem com o pacote de banco de dados instalado. Por isso, foi usado o seguinte comando para instalá-lo:

```
npm install @adonisjs/lucid
```

Lucid é o nome do ORM do Adonis. O ORM permite trabalhar com o MySQL sem a necessidade de escrever uma linha de código SQL. Mas para usá-lo, além de instalar é preciso configurar, para isso foi usado o seguinte comando para configurá-lo:

```
node ace configure @adonis/lucid
```

E por fim através desse comando foi gerado variáveis de configuração e que foi copiadas e coladas arquivo **env.ts** que é o responsável em fazer a conexão do Adonis com o banco de dados.
