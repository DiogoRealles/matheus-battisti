NPM - Node Package Manager / Gerenciador de Pacotes do Node
É uma ferramenta do NodeJS para gerenciar os pacotes e comandos da aplicação.
Permite instalar, atualizar, e remover pacotes, Além disso permite criar scripts de comandos para a aplicação.

**Verificar versão do NodeJS:**
`node -v`

**Verificar versão do NPM:**
`npm -v`

**Criar projeto rápido:**
`npm init -y`

**Config. NPM Infos**
`npm config set init-author-name "Seu Nome"`

`npm config set init-author-emaul "Seu e-mail"`

`npm config set init-author-url "Seu site"`

<a href="docs.npmjs.com/misc/config">Doc NodeJS</a>

**Deletar key de Config**
`npm config delete author`
`npm config delete name`
`npm config delete email`

**Instalação package global**
`npm i typescript -g`

**Instalação package dependence local**
`npm i express`

**Instalação package DevDependence**
`npm i nodemoon -D`

**Remover packages global**
`npm remove typescript -g`

**Listar packages globais**
`npm ls -g`

**Remover Dependencias não utilizadas**
`npm prune`

**Verificar atualização de pacotes local**
`npm outdated`

**Verificar atualização de pacotes globais**
`npm outdated -g`

**Atualização de pacotes globais**
`npm update NODE_DO_PACOTE -g`

**Verificando cache NPM**
`npm cache verify`

**Limpar cache NPM**
`npm cache clean --force`

**Reduzindo duplicação de pacotes**
`npm dedupe`
