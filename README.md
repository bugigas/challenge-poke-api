## SWAGGER
http://localhost:3000/api/docs

## Running the app Docker

```bash
# build
$ docker build -t challenge-poke-api .

# run
$ docker run -p 3000:3000 challenge-poke-api

```

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
