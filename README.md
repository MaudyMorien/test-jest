## First TDD

following a tutorial about Javascript testing with jest

## Set up

First, we install Jest.

$ node -v
v11.5.0
We use Node version 11.5.0.

$ npm init -y
We initiate a new Node application.

$ npm i --dev jest
We install Jest module with nmp i --dev jest.

$ npm i -g jsonserver
$ npm i axios
We are going to use jsonserver and axios too.


package.json should contain at least:

{
  "name": "jest-test",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "jest --verbose"
  },
  "keywords": [],
  "author": "Jan Bodnar",
  "license": "ISC",
  "devDependencies": {
    "jest": "^24.0.0"
  },
  "dependencies": {
    "axios": "^0.18.0"
  }
}