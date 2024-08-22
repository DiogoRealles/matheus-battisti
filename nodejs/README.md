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
  <b>package.json:</b> É um arquivo que guarda informações do projetos como: <br />
  - Nome, Autor, versão, pacotes/módulos necessários para o funcionamento do projeto. <br />
  Permite executar determinados scripts nos projetos. <br />
  
  Comando para iniciar um projeto em NodeJS:<br />
  `npm init -y`<br />
  
  Comando para instalar pacote local:<br />
  `npm i name_package`<br />
  
  Comando para instalar pacote de desenvolvimento:<br />
  `npm i -D name_package`<br />

</details>
<br />

<details>
  <summary>O que são módulos</summary>
  São conjuntos de códigos e funções "empacotados". Ou seja são scripts reaproveitáveis e precisam ser exportados (module.exports) e importados (require) onde necessário. <br />
  São divididos em 3 categorias: <br />
  Módulos Internos: São módulos desenvolvidos e utilizados no projeto. <br />
  Core Modules: São módulos pertencentes ao próprio NodeJS. <br />
  Módulos Externos: são módulos de terceiros, instalados e gerenciados pelo NPM. <br />
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
  FS, MKDIR - Trabalhar com arquivos (criar, ler, escrever e deletar) e diretórios. <br />
  HTTP - Utilizado para criar servidores. Podendo capturar dados tanto do front quanto retornar pro front dados do back-end. <br />
  PATH - Utilizado para caminhos, nomes e extenção de pastas e arquivos. <br />
  OS - Utilizado para saber dados e informa;'oes do sistema (OS, processador, mem[oria, etc]). <br />
  URL - Utilizado para trabalhar com URLs. <br />
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
  `npm i express-handlebars` <br />
</details>
<br />
