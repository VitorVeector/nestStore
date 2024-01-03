<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## Anotações

- Nest.js suportar TS, Fastify
- Ao iniciar o Nest.js com comando padrões, podemos deletar alguns arquivos desnecessários como o React.js

O Nest possui outros decorators para capturar dados a partir de uma requisição, inclusive o @Body tem outros usos. Se precisarmos, por exemplo, capturar só uma parte de um objeto que foi enviado no body podemos passar o nome da chave desta parte do objeto e o Nest captura apenas este valor. Vejamos o objeto abaixo:

```json
{
    numeroPedido: 23123
    produtos: [
        {
          nome: "camiseta nerd 2077",
          preco: 24.90
        }
    ]
}
```

Se quiséssemos capturar apenas a lista de produtos, poderíamos fazer **@Body('produtos')** e o Nest nos daria apenas os produtos ignorando o restante dos valores no objeto. Temos outros dois decoratos que se comportam de forma parecida com o @Body. Eles são o @Query e o @Param, o primeiro lida com query parameters e o segundo com parâmetros dinâmicos na URL. Veremos mais sobre estes outros durante nossos estudos.

# Class Validator

Utilizaremos um biblioteca de validação para o Nest.js
[Docs Class Validator](https://github.com/typestack/class-validator) 

## Entidade

Devemos definir as propriedades que serão passadas no momento do post, para que haja conformidade nos dados passados como Post. Neste caso, podemos usar o usuário como exemplo recebendo suas propriedades corretas, através de um interface.

### Listagem

Podemos definir um DTO para a requisição GET, deixando nossos dados mais seguros e escondendo senha e e-mail de User

```ts
  @Get()
  async getUsers(){
    const users = await this.userRepository.listUsers()
    const setUsers = users.map(user => new ListUserDTO(
      user.id,
      user.name
  ))
```

ListUserDTO é uma classe construtora, que segue alguns parâmetros: 
```ts
  export class ListUserDTO {
    constructor (
        readonly id: string,
        readonly name: string
    ){}
}
```