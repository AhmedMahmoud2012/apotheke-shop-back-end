## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

```

## Test

```bash
# unit tests
$ npm run test

```


## What I did
- I used  `CacheModule` for Caching 


## APIs 
`{domain} : http://localhost:3000`
- List of the most popular repos sorted by number of stars: `{{domain}}/repositories/search/`
- Using given date - List of the most popular repos : `{{domain}}/repositories/search/?created=2020-04-29`
- View top 10,50,100 : `{{domain}}/repositories/search/?per_page=50`
- Filter by Language : `{{domain}}/repositories/search/?language=python`

## POSTMAN COLLECTION
you can get the postman collection from the folder `postman-collection`



## Video Demo
Kindly check this [Video Demo](https://drive.google.com/file/d/1qG4LBVjrlhtuwLoE7bJTkS0apLjrRAn6/view)