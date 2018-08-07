# Homework Assignment #1

## [The Assignment](https://pirple.thinkific.com/courses/take/the-nodejs-master-class/texts/4342320-homework-assignment-1):

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice.
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want.

## Setup
1. Run `nvm use`
1. Run `npm i`

## Running the Default Staging Server
1. `npm start`
1. You should be able to hit the API at [`http://localhost:5555`](http://localhost:5555).
1. You should see the 'hello world' response JSON.

## Running the Production Server
1. `SERVER_ENV=production npm start`
1. You should be able to hit the API at [`http://localhost:8888`](http://localhost:8888).

## Running Tests
1. `npm test`

## Development Notes
- Had to use `SERVER_ENV` because Jest automatically sets `NODE_ENV=test`.
