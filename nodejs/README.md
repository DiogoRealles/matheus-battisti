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
  Permite executar determinados scripts nos projetos. <br />
</details>
<br />

<details>
  <summary>O que são módulos</summary>
  São conjuntos de códigos e funções "empacotados". Ou seja são scripts reaproveitáveis e precisam ser exportados (module.exports) e importados (require) onde necessário. <br />
  São divididos em 3 categorias: <br />
  Internos: Módulos desenvolvidos e utilizados no projeto. <br />
  Core Modules: Módulos pertencentes ao próprio NodeJS. <br />
  Externos: Módulos de terceiros, instalados e gerenciados pelo NPM. <br />
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
  HTTP - Servidores. <br />
  PATH - Caminhos, nomes e extenção de arquivos. <br />
  URL - Trabalhar com URLs. <br />
  É necessário importa-los. <br />
</details>
<br />

<details>
  <summary>O que é Express</summary>
  É um framework para back-end muito utilizado em NodeJS. <br />Podendo ser usado como monolito e para construção de APIs, padrões de arquitetura como MVC, conexão combanco de dados ORMs e ODMs, criar rotas, renderizar HTML e muito mais. <br />
</details>
<br />

<details>
  <summary>O que é são Rotas</summary>
  Basicamente são as URLs que o usuário acessa. <br />
  www.meusite.com/products. <br />
  www.meusite.com: É o dominio <br />
  /products: Rota que redireciona para pagina de produtos <br />
  Rotas estão atreladas a funcionalidades do sistema, como: carregar produtos do DB para exibir no front. <br />
  Uma rota pode ter 4 funcionalidades diferentes,utilizando dos verbos HTTP (GET, POST, POUT/PATCH, DELETE). <br />
</details>
<br />

<details>
  <summary>O que é são Template Engines (Handlebars / Mustache)</summary>
  São ferramentas que facilitam a criação de páginas HTMLs, permitindo manipular as views de acordo com as váriaveis recuperadas do back-end. Também permite aplicar loops, condicionais e outras features para deixar as views mais dinâmicas. <br />
  ... <br />
</details>
<br />
