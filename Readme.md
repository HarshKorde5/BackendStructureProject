# Backend Project Structre

This is a backend files and folders structure project 

##### Create initial package.json file using `npm init`

Created .gitignore file and added the code from `git ignore generators`

`.env` file for environment variables this is not pushed as its senstive

Updated `package.json` with `"type" : "module"` for syntax of js such as using `import` instead of `require()` syntax

##### Create `src` folder which will contain all source code

Whenever server files are updated edited we need to start and stop the server each time,so we use the `nodemon` utility of node which just reloads the page everytime changes are made(we can also use --watch but it's not used vastly till now)
We install it for only development dependency that is devdependency using '-D'
`npm instal -D nodemon`

##### Note : updated the package.json file
```javascript
  "scripts": {
    "dev" : "nodemon src/index.js"
  },
```

#### Create other folders such as :

1.controllers

2.db 

3.middlewares 

4.models 

5.routes 

6.utils



##### Add Prettier plugin `npm i -D prettier`

For deciding syntax such as use of semicolons and other nomanclature to keep it same between all team members.It's a dev dependency.

Create `.prettierrc` and `.prettierignore` files for setting up prettier plugin


## Connect MongoDB to our project

Create MongoDB Atlas account.

Get your connection string with username and password.

Add the string as MONGODB_URI in `.env` file.

Install the following packages :

1. mongoose
2. express
3. dotenv

Configure the .env file by adding MONGODB_URI and PORT number

Add the database name in constants file inside the src folder.

##### Two ways to connect to the database :

1 => Directly from the index.js file which is entry point of project and outside the src folder.

2 => Inside from `/src/db` folder's index.js file which is used for database releated functionalities and export the function e.g. `export default connectDB;`.

Note : Always use async functions for connection to database as database is in another continent


## Configure express app

Install the following packages and use them in the express app

`npm i cookie-parser` - set and access cookies of the user's browser from our backend server

`npm i cors`  - for cross origin resource sharing who can access the backend

`app.use()` is always used for using middlewares in our express application

Inside src/index.js import the express app from the /app.js and start listening using app.listen() method.

## Custom API and Error Handling

As we need to use the async functions,try catch blocks several times we can try and make a generalized wrapper which will perform the task without need to rewrite the code so that we'll pass the function to execute to the wrapper,the wrapper executes and returns.

#### Custom Error Handling 

ApiError.js file

#### Custom Response Handling

ApiResponse.js file

### asyncHandler

It is a higher order function designed to wrap asynchronous route handlers,the 'requestHandler' is expected to be a asynchronous function  that handles express request and returns a new function  which express can use as a middleware.

