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

### Criando tabelas no Banco de Dados

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
### Criando Models

Neste projeto esta sendo usado o ORM do Adonis. Por causa disso, quando for preciso buscar, criar, editar ou deletar dados do banco de dados, em vez de usar códigos SQL, será usado o Models que fará todas as solicitações do banco de dados de forma automática. A criação do Models é um processo bem simples, basta usar o comando:

```
node ace make:model Client
```
O mesmo foi feito para criar o model de endereço, porém no lugar de Client foi colocado Address.

A única coisa que vamos fazer dentro do model é estruturar e dizer quais colunas esse recurso tem no banco de dados.

### Controllers

O controler é o responsável em controlar toda a nossa aplicação, pois é através dele que recebemos os dados da requisição, enviamos os dados a serem validados no Validators, e mandamos os dados ao Model para o mesmo salvar no banco de dados.

Para criar o controler dos clientes foi usado o comando:

```
node ace make:controller Clients -r
```

Foi criado os métodos index, que serve para listar todos os clientes, 
store, para salvar novos clientes,
show, para exibir um cliente em específico,
update para atualizar informações de um cliente específico e
destroy, para excluir um cliente.

O método store é onde se recebe os dados da requisição para serem salvos no banco de dados. Porém esses dados podem vir com erros caso o usuário digite alguma informação errada em um determinado campo. Por isso é preciso validar esses dados.
