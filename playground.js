const { Users } = require("./models");
const { Terminal } = require("./models");
const { Frontend } = require("./models");
const { Backend } = require("./models")
const { Database } = require("./models")


// Terminal.insertMany([
//     {
//         subject: "GITHUB",
//         notes: "git remote rm origin  #removes origin, git branch  #lists all of the branches, git push origin<branch name>  #to commit the new branch, git pull upstream<branch name>  #to pull in changes from the maintainer, git remote add upstream<enter clone url>  #add the repo to be accessed upstream, git clone<name> - copy  #if you need to reclone a repo, git status  #a status check, git pull < name and name of new branch >, git checkout - b < enter name of branch > #creates new branch, git fetch – all  #fetch changes being made to a public repo and other branches, git remote - v  #shows what repo you are on, git remote add enter name and url of repo, git checkout - b(name of new branch)  #dont have to do this if the branch is already selected or created, git add.#adds the changes in prep for a push, git commit - m “(commit message)”  #adding your commit message, git push  #to push the changes to the repository, git push - u origin(branch name)  #alt push command if u need to change the branch, git pull  #brings down changes made directly from github"
//     },
//     {
//         subject: "POSTGRES",
//         notes: ":q  #will take you out of endless results, CREATE DATABASE [enter db name]  #creates a db in postgres, \l  #search all dbs, \q  #quits postgres in terminal, CREATE TABLE [enter table name] ()  #creates a table inside the db, \connect [db name]  #way to connect to a specific db using the terminal"
//     },
//     {
//         subject: "MONGODB",
//         notes: "brew services list, brew services start, brew services start – all, mongosh  #starts the mongodb server"
//     },
//     {
//         subject: "NODE",
//         notes: "npm install, npm init -y  #Setting up the node project, npm init  #Setting up the node project, manually building the package.json, npm start  #Runs the script that’s in ‘scripts’/”start” in package.json file, npm install  #this will install all missing packages needed in a node project, npm test  #starts up all of the tests, node index.js  #run the server file, nodemon [enter file name]  #track changes without having to restart npm server, kill -9 $(lsof -ti:3000) #kills port 3000"
//     },
//     {
//         subject: "SEQUELIZE",
//         notes: "npm install -g sequelize-cli  #installs sequelize globally, npm install pg sequelize  #installs postgres sequelize module, sequelize init  #set up a project with json files etc., sequelize db:migrate  #runs the migration, sequelize db:migrate:undo  #undo the most recent migration, sequelize db:migrate:undo all  #undo all migrations, npm uninstall -g sequelize  #uninstalls if sequelize is installed globally"
//     },
//     {
//         subject: "EJS",
//         notes: "npm install express-ejs-layouts  #installs ejs layouts module"
//     },
//     {
//         subject: "Method-override",
//         notes: "npm install method-override  #installs method override module"
//     },
//     {
//         subject: "REACT",
//         notes: "npx create-react-app [name of app]  #this creates a react app in the folder, npm install react-router-dom  #to install React Router"
//     },
//     {
//         subject: "MONGOOSE",
//         notes: "npm i express mongoose dotenv  #setting up the project"
//     },
//     {
//         subject: "HEROKU",
//         notes: "heroku login  #takes you to login page from terminal, heroku apps:create <insert app name>  #creates the app on heroku, heroku create $APP_Name – buildpack https://github.com/mars/create-react-app-buildpack.git, git push heroku main  #push changes to heroku, heroku open  #opens app in browser from the terminal, heroku run bash  #opens heroku terminal, exit .  #exits heroku terminal, heroku config  #shows heroku db url, heroku logs  #shows heroku logs, heroku logs – tail, heroku config:set  #where you but in SECRET_SESSION info in .env file"
//     }
    
// ])
//     .then((newTerminalNotes) => {
//     console.log(newTerminalNotes);
// })
//     .catch((error) => {
//         console.log(error);
//     });

// Frontend.insertMany([
//     {
//         subject: "",
//         notes: ""
//     }
// ])
//     .then((newFrontendNotes) => {
//         console.log(newFrontendNotes);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// Backend.insertMany([
//     {
//         subject: "",
//         notes: ""
//     }
// ])
//     .then((newBackendNotes) => {
//         console.log(newBackendNotes);
//     })
//     .catch((error) => {
//         console.log(error);
//     });



// Database.insertMany([
//     {
//         subject: "",
//         notes: ""
//     }
// ])
//     .then((newDatabaseNotes) => {
//         console.log(newDatabaseNotes);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

