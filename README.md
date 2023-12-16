# api-resftul-nest-js


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- SQLite Database 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Endpoint | HTTP Method | CRUD Method | Result
-- | -- | -- | --
`users` | POST | CREATE | Created User
`users/:id` | GET | READ | Retrieved User
`users/:id` | PUT | UPDATE | Updated User
`users/:id` | DELETE | DELETE | Deleted User
`users` | GET | READ | Retrieved All Users
`products` | POST | CREATE | Created Product
`products/:id` | GET | READ | Retrieved Product
`products/:id` | PUT | UPDATE | Updated Product
`products/:id` | DELETE | DELETE | Deleted Product
`products` | GET | READ | Retrieved All Product


## Example Payloads for Users and Products

### Payload for Users (users)

```json
{
  "name": "user name 3",
  "email": "user@email.com",
  "password": "user pass"
}
```

Fields:

- name: The name of the user.
- email: The email address of the user.
- password: The password of the user.

### Payload for Products (products)

```json
{
  "name": "product name",
  "description": "product description",
  "price": 10.00
}
```

Fields:
- name: The name of the product.
- description: The description of the product.
- price: The price of the product.
