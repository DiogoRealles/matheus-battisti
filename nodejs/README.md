![NodeJS](./cover.png)

# NodeJS

<details>
  <summary>O que é NodeJS</summary>
  É um ambiente que utiliza <b>V8 Engine</b> para executar aplicações back-end em JavaScript no server-side. <br />
  Como: Envio de email, conexões a banco de dados, web sever, api, chatbots, e muito mais. <br />
  <a href="https://nodejs.org/en/download/prebuilt-installer"><b>Download NodeJS</b></a>
  <img src="./nodejs.png" />
</details>
<br />

<details>
  <summary>O que é NPM - Node Package Manager</summary>
  É um gerenciador de pacotes do NodeJS. Possibilita instalar, atualizar e remover pacotes nos projetos. <br />
  <b>package.json:</b> É um arquivo que guarda informações do projeto como: <br />
  - Nome, autor, versão, pacotes/módulos necessários para o funcionamento do projeto. <br />
  Permite executar determinados scripts nos projetos. <br />

Comando para iniciar um projeto em NodeJS: <br />

  <pre>
    <code>
      npm init -y
    </code>
  </pre>

Comando para instalar pacote local: <br />

  <pre>
    <code>
      npm i name_package
    </code>
  </pre>

Comando para instalar pacote de desenvolvimento: <br />

  <pre>
    <code>
      npm i -D name_package
    </code>
  </pre>

</details>
<br />

<details>
  <summary>O que são módulos</summary>
  São conjuntos de códigos e funções "empacotados". Ou seja são scripts reaproveitáveis e precisam ser exportados (module.exports) e importados (require) onde necessário. <br />
  São divididos em 3 categorias: <br />
  <b>Módulos Internos:</b> São módulos desenvolvidos e utilizados no projeto. <br />
  <b>Core Modules:</b> São módulos pertencentes ao próprio NodeJS. <br />
  <b>Módulos Externos:</b> são módulos de terceiros, instalados e gerenciados pelo NPM. <br />
</details>
<br />

<details>
  <summary>Import / Export</summary>
  NodeJS aceita duas formas de importar e exportar módulos. <br />
  <b>module.exports = {names_module} / require('names_module'):</b> É o commonJS, modo como NodeJS importa e exporta módulos. <br />
  <b>import / export:</b> É o ES6, modo como JS importa e exporta módulos. <br />
  *caso não utilize TypeScript é necessário renomear arquivos para extenção .mjs. <br />
</details>
<br />

<details>
  <summary>Core Modules</summary>
  São arquivos prontos e internos do NodeJS. <br />
  NodeJS possui muitos módulos para diversas necessidades:
  <b>FS, MKDIR -</b> Trabalhar com arquivos (criar, ler, escrever e deletar) e diretórios. <br />
  <b>HTTP -</b> Utilizado para criar servidores. Podendo capturar dados tanto do front quanto retornar pro front dados do back-end. <br />
  <b>PATH -</b> Utilizado para caminhos, nomes e extenção de pastas e arquivos. <br />
  <b>OS -</b> Utilizado para saber dados e informações do sistema (OS, processador, memória, etc). <br />
  <b>URL -</b> Utilizado para trabalhar com URLs. <br />
  Os módulos precisam ser importados onde necessário. <br />
</details>
<br />

<details>
  <summary>O que é Express</summary>
  É um framework para back-end muito utilizado em NodeJS. <br />
  Podendo ser usado como monolito e/ou para construção de APIs, e servidor da aplicação, padrões de arquitetura como MVC, possui drivers para conexão com banco de dados ORMs e ODMs, criar rotas, renderizar HTML e muito mais. <br />
</details>
<br />

<details>
  <summary>O que são Rotas</summary>
  Basicamente são as URLs que o usuário acessa. <br />
  www.meusite.com/products. <br />
  www.meusite.com: É o dominio <br />
  /products: Rota que redireciona para pagina de produtos <br />
  Rotas estão atreladas a funcionalidades do sistema, como: carregar produtos do DB para exibir no front. <br />
  Uma rota pode ter 4 funcionalidades diferentes,utilizando dos verbos HTTP (GET, POST, POUT/PATCH, DELETE). <br />
</details>
<br />

<details>
  <summary>O que são Middlewares</summary>
  São códigos que vão entre a requisição do usuário e respostas da aplicação. <br />
  Ex: Usuário solicita entrar em uma área restrita, o middleware pega os dados enviados pelo usuário e verifica sua autorização e credenciais, podendo ser login e senha + JWT. <br />
  Caso o usuário esteja autenticado, o middleware redireciona para área solicitada, caso contrário o redireciona para área de login. <br />
</details>
<br />

<details>
  <summary>O que são Template Engines (Handlebars / Mustache)</summary>
  São ferramentas que facilitam a criação de páginas HTMLs dinâmicas, inserindo variáveis do back-end no front-end. <br />
  Também permite criar layouts que são reaproveitados, aplicar loops, condicionais e outras features para deixar as views mais dinâmicas como: autenticação de usuários. <br />
  Desacopla a lógica do front, deixando sob responsábilidade do back-end. <br />
  Os dados de resposta do back-end são interpolados entre <b>{{dado}}</b>: <br />
  {{username}} => Diogo <br />
  {{userage}} => 35 <br />
  
  Instalando handlebars para Express: <br />
  <pre>
    <code>
      npm i express-handlebars
    </code>
  </pre>
</details>
<br />

<details>
  <summary>O que é MySQL</summary>
  É um SGBD que auxilia a trabalhar com DB relacionais. <br />
  É necessário baixar e usar drive para conectar o NodeJS e Express ao SGBD. <br />
  
  Instalando mysql para NodeJS: <br />
  <pre>
    <code>
      npm i mysql
    </code>
  </pre>
  
  Queries SQL: <br />
  <b>CREATE DATABASE 'DATABASE_NAME':</b> Comando para criar banco de dados. <br />
  <b>CREATE TABLE 'TABLE_NAME'():</b> Comando para criar tabela. Recebe como parâmetros os campos de dados. <br />
  <b>INSERT:</b> Comando para inserir dados na tabela. <br />
  <b>SELECT:</b> Comando para selecionar dados da tabela. <br />
  <b>UPDATE:</b> Comando para atualizar dados na tabela. <br />
  <b>ALTER:</b> Comando para alterar a tabela ou banco existente. <br />
  <b>DELETE:</b> Comando para deletar dado na tabela. É necessário utilizar propriedade WHERE para deletar dado expecífico. <br />
  <b>DROP:</b> Comando para deletar a tabela ou banco existente. <br />
</details>
<br />

<details>
  <summary>O que são bancos de dados relacionais</summary>
  São utilizados para guardar dados. Suas caracteristicas são: <br />
  <b>Tabelas:</b> Onde os dados são inseridos e organizados. <br />
  <b>Colunas:</b> Onde os dados inseridos são categorizados. <br />
  <b>Dados:</b> O que é inserido, atualizado e removido em uma tabela. <br />
  <b>Relacionamentos:</b> Ligação entre as tabelas. <br />
</details>
<br />

<details>
  <summary>O que são ORMs (Object Relational Mapping)</summary>
  São frameworks para banco de dados relacionais que abstraem as complexidade das queries em métodos. <br />
  Auxilia facilitando na integração e criação de queries (INPUT, SELECT, UPDATE, DELETE) via métodos. <br />
  O Dev se concentra mais nas regras de negócio e menos nos comandos SQL, otimizando o desenvolvimento. <br />
</details>
<br />

<details>
  <summary>O que é Sequelize</summary>
  É uma ORM (Object Relacional Mapping) / framework para nodeJS. <br />
  É baseado em promisses (then, catch). <br />
  É preciso criar uma classe / Model. <br />
  
  Instalando Sequelize no NodeJS com MySQL: <br />
  <pre>
    <code>
      npm i mysql2 sequelize
    </code>
  </pre>
  
  Conectar no banco com Sequelize: <br />
  <pre>
    <code>
      const sequelize = new Sequelize('database_name', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
      });
    </code>
  </pre>
  Model: É uma abstração que representará uma tabela, é instanciada por uma classe. <br />
  Os campos e tipos são as propriedades do Model. <br />
  
  Métodos Sequelize: <br />
  <b>sync():</b> Método para criar tabelas baseadas no model. { force: true } recria a tabela zerada. <br />
  <b>create():</b> Método para inserir dados na tabela. <br />
  <b>fetchAll():</b> Método para seleciona dados da tabela, os dados vem em object, sendo necessário um parâmetro <b>{ raw: true }</b> para converter em array de object. <br />
  <b>findOne():</b> Método para selecionar um dado expecifico da tabela, sendo necessário um parâmetro <b>{ where: {id: id} }</b> para filtragem do dado expecifico. <br />
  <b>destroy():</b> Método para remover dados da tabela, sendo necessário um parâmetro <b>{ where: {id: id} }</b> para filtragem do dado expecifico. <br />
  <b>update():</b> Método para atualizar dados da tabela, sendo necessário um parâmetro <b>{ where: {id: id} }</b> para filtragem do dado expecifico. <br />
  Atualização é feito em duas partes: <br />
  1 - Selecionar os dados com findOne para preencher o formulário com os dados selecionados. <br />
  2 - Método update recebe os dados selecionados como objet. <br />
</details>
<br />
