## First TDD

following a tutorial about Javascript testing with jest

## Set up

- First, we install Jest.

- $ node -v
v11.5.0
We use Node version 11.5.0.

- $ npm init -y
We initiate a new Node application.

- $ npm i --dev jest
We install Jest module with nmp i --dev jest.

- $ npm i -g jsonserver
- $ npm i axios
We are going to use jsonserver and axios too.


- package.json should contain at least:

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

## Notes

As I was going along with this tutorial I noticed it was not written in ES6. As i wanted to replace the export.module to ES6 it gave me error this error:

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html


- For the sake of learning how to write tests as a beginner I keep the common JS for now.

- I made comments on places where I diverted from the tutorial as I see it as better written code.