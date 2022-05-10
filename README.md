# Api Teamsoft

Foi escolhido o Adonis como Framwork para trabalhar neste projeto. E junto com o Adonis foi escolhido o typescript.
Para iniciar um projeto Adonis com typescript, foi usado o seguinte comando:

```
npm init adonis-ts-app@latest api-teamsoft
```

Para manipular o banco de dados mysql, escolhi o docker, que basicamente permite trabalhar com banco de dados sem a necessidade de ter que baixar o banco de dados MySql em minha máquina.
Para trabalhar com o banco de dados no docker, é preciso criar um container contendo este banco de dados dentro dele. Para isso criei o seguinte arquivo na raiz do projeto:

docker-compose.yml

Dentro desse arquivo eu criei um container do docker contendo o mysql.

O próximo passo foi conectar o Adonis com o banco de dados. Porém por padrão, o Adonis não vem com o pacote de banco de dados instalado. Por isso, usei o seguinte comando para instalá-lo:

npm install @adonisjs/lucid

Lucid é o nome do ORM do Adonis. O ORM permite trabalharmos com o MySQL sem a necessidade de escrever uma linha de código SQL. Mas para usá-lo, além de instalar é preciso configurar, para isso usei o seguinte comando:

node ace configure @adonis/lucid

E por fim peguei as variáveis que foi geradas nesse comando de configuração e coloquei dentro do arquivo env.ts que é o responsável em fazer a conexão do Adonis com o banco de dados.
