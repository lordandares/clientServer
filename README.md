# Client App Server

This Project was build with NodeJs, Typescript, ServerlessFramework

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.16.20.2)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.
Serverless Framework is needed to work run `npm install -g serverless` or check https://www.serverless.com/framework/docs/getting-started, also you will need to configure aws SSO or use Auth keys from aws to deploy

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

## Test service

### Locally

In order to test the server locally, run the following command:
- run `npm run local` 

## Functional Test

To run functional tes on the server Create a Graqhql Rrequest to `http://localhost:3000/dev/graphql` once the server is running locally

copy the content of `functionalTest.Postman` to test script

## Lint 

- run `npm run lint` 
- run `npm run lint:fix` 

## Test 

- run `npm run test` 
- run `npm run test:coverage` 
