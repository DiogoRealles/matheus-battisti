# Hora de Codar - TypeScript
## O que é:
- É um **superset** do _JavaScript_ criado e mantido pela _Microsoft_, adiciona funções como **tipagem** de dados ao _JS_.
- Pode ser utilizado com frameworks como _React_ e _Express_
- Precisa ser **compilado** em _JS_
- Adiciona mais **confiabilidade** aos projetos, prevendo erros antes de irem para produção, gerando menos custos de manutenção

## Instalando:
- Pode ser instalado via **NPM**
- **CLI:** _npm i -g typescript_
- **@types/library**: comando para instalar pacotes de tipos em uma library (caso esta library possua pacote de tipos)

## Configurações:
- **tsc --init**: Comando que gera arquivo de configuração do _TS_ do projeto
- **tsconfig.json**: Arquivo _JSON_ de configuração do _TS_ do projeto, possui algumas opções interessantes.
- **target**: Qual versão do _JS_ será compilado (ES5, ES6, ESNext)
- **lib []**: Qual library _TS_ irá utilizar
- **rootDir**: Diretório onde se encontra o arquivo _TS_
- **outDir**: Diretório onde será compilado o arquivo _JS_
- **noEmmitOnError**: Não compila caso tenha algum erro em algum arquivo _TS_
- **removeComments**: Remove comnentários na hora de compilar o _JS_

## Usando | fluxo de desenvolvimento:
- **tsc**: comando para compilar arquivo _TS_
- **tsc -w**: comando para compilar arquivo _TS_ e fica monitorando alterações
- **ts-node-dev**: Pacote que compila _TS_ em _JS_ em tempo real (npm i ts-node-dev) _"ts-node-dev --respawn --transpileOnly src/script.ts"_
- 
- 