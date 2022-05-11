# Api Teamsoft

### Configurações iniciais

Foi escolhido o Adonis como Framwork para trabalhar neste projeto. E junto com o Adonis foi escolhido o typescript.

Para iniciar um projeto **api teamsoft** usando o Adonis com typescript, foi usado o seguinte comando:

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

Lucid é o nome do ORM do Adonis. O ORM permite trabalhar com o MySQL sem a necessidade de escrever uma linha de código SQL. Mas para usá-lo, além de instalar é preciso configurar, para isso foi usado o seguinte comando:

```
node ace configure @adonisjs/lucid
```

Através desse comando foi gerado variáveis de configurações que foram copiadas e coladas no arquivo **env.ts** que é o responsável em fazer a conexão do Adonis com o banco de dados.
E por fim, foi acrescentado as informações reais no arquivo .env com base nas configurações criadas anteriormente.

### Criando tabelas do Banco de Dados

Para criar a tabela de clientes no banco de dados, foi usado o seguinte comando:

```
node ace make:migration clients
```

O mesmo foi feito para a criação da tabela de endereço, porém alterando somente o nome da tabela

```
node ace make:migration addresses
```

Em seguida foi criado as colunas das tabelas. Mas essas teabelas precisam se relacionar, pois um cliente pode ter vários endereços e um endereço pertence a um cliente. Por isso foi criado um relacionamento na tabela de endereço que faz referencia a tabela de clientes indicando que um endereço pertence a um cliente.

Após essas edições foi usado o seguinte comando para gerar as tabelas no banco de dados

```
node ace migration:run
```
