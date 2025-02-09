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

#### asyncHandler

It is a higher order function designed to wrap asynchronous route handlers,the 'requestHandler' is expected to be a asynchronous function  that handles express request and returns a new function  which express can use as a middleware.

## User and Video models with hooks and jwt

`npm install bcrypt`  - for password hashing

`npm install jsonwebtoken`  -   using jwt

Define a pre() hook for the model, this hook does some task just before doing any action on the database model like just 'before' saving. We have similar post() hook which performs action 'after' database operation.

Add ACCESS_TOKEN_SECRET which will be any random string and ACCESS_TOKEN_EXPIRY which will be duration 1d,2d,10d.Add similar refresh tokens.

We can add required custom methods in our schema using the `schema_name.methods.custom_method_name` syntax.

`mongoose-aggregate-paginate-v2` is a plugin used by mongoose to get advanced level queries and pipelines than using insertOne,updateOne,etc.

## Multer and Cloudinary

We use multer for uploading files or the file handling and cloudinary for cloud storage.

We follow the model where the files go from remote location to the server-local storage followed by the cloudinary url:

remote-location->server-local-storage->cloudinary

So as, if any error occurs we don't need to reaccess file from remote location as we will have it in our server's local storage already and unlink as and when required.

`npm install multer`

`npm install cloudinary`

Create a multer middleware for file operations in the /middlewares folder.

Cloudinary can be configured as a utility each time we need to access the files url.Add the .env variables for cloudinary such as the api key,secret key,cloud name.

## User route and controller

We will not use app.get directly instead we will use app.use("/main_route_name",middleware_name) (here our middleware is the router)this syntax which will use middlewares such as Router.route("/sub_route_name").post(controller_name), following controller will have all main_route_name sub_route_name methods defined which would be executed using the asyncHandler.

Program flow is as follows : 

Inside app.js : (app.use("/users",userRegister)) --> Inside /routes/user.routes.js : (router.route('/register').post(registerUser)) --> Inside /controllers/user.controller.js : (registerUser variable will have the call to asyncHandler function).

Inshort we can say for every main_route we have a main_controller inside which we have different sub_controllers for sub_routes.


#### Use of POSTMAN

Use postman to check the requests parameters results.

You can also use thunderclient.

Set environment variables in environments tab and use in the url {{env_var_name}}/...

Create separate folder for storing requests for each project so as to directly use when required.



##### Note : Always make todos/steps before coding to make process simpler.

##### Note : use await for all database calls as database is in another continent and it needs time for operations or else code might give inappropriate results.


#### Working of middlewares in routes

The functions having (req,res,next) specifically the next method is called once the working of middleware is finished,then the middleware will just call next() method which will transfer the call to the method to be executed after the middleware.

Consider this example : router.route("/logout").post(verifyJWT, logoutUser)

Once the route is activated the verifyJWT method will be excuted which is the middleware, inside the defination of middleware function we have called next() at the end, this next is referenced to the logoutUser() method which is the route method to be executed.

Inshort we can say that our verfiyJWT method would look like :

```javascript
function verifyJWT(req, res, next){

  //some code here
  next();
}
```

After next() control will be transfered to logoutUser.

#### If the parameter provided suppose `(req,res,next)` and from these suppose we only need req and next then in some code we might find a '_' which is just used to denote no use