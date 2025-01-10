# Backend Project Structre

This is a backend files and folders structure project 

Created .gitignore file and added the code from `git ignore generators`

`.env` file for environment variables this is not pushed as its senstive

Updated `package.json` with `"type" : "module"` for syntax of js such as using `import` instead of `require()` syntax


Whenever server files are updated edited we need to start and stop the server each time,so we use the `nodemon` utility of node which just reloads the page everytime changes are made(we can also use --watch but it's not used vastly till now)
We install it for only development dependency that is devdependency using '-D'
`npm instal -D nodemon`

Note : updated the package.json file
```javascript
  "scripts": {
    "dev" : "nodemon src/index.js"
  },
```