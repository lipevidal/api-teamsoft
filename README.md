# api-teamsoft

Escolhi o Adonis como Framwork para trabalhar neste projeto. E junto com o Adonis escolhi o typescript.
Para iniciar um projeto Adonis com typescript, foi usado o seguinte comando:

npm init adonis-ts-app@latest api-teamsoft

Para manipular o banco de dados mysql, escolhi o docker, que basicamente permite trabalhar com banco de dados sem a necessidade de escrever uma linha de código SQL.
Mas para trabalhar com o docker foi preciso instalar e configurá-lo. Como eu já tinha ele instalado na minha máquina, foi preciso apenas configurá-lo. Para isso, criei um arquivo na raiz do projeto chamado: 

docker-compose.yml

Dentro desse arquivo eu criei a conexão do mysql com o docker.

O próximo passo foi conectar o Adonis com o banco de dados. Porém por padrão, o Adonis não vem com o pacote de banco de dados instalado. Por isso, usei o seguinte comando para instalá-lo:

npm install @adonisjs/lucid

Depois de instalado foi preciso configurá-lo, por isso usei o seguinte comando para fazer essa configuração:

node ace configure @adonis/lucid

E por fim peguei as variáveis que foi geradas nesse comando de configuração e coloquei dentro do arquivo env.ts que é responsável em fazer a conexão do Adonis com o banco de dados.
