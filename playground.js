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
//         subject: "HTML",
//         notes: "Control Flow - HTML → CSS → JS | Shift + 1 + enter inserts HTML boilerplate code on a vs code page. | DOM - Includes all html elements on the page."
//     },
//     {
//         subject: "CSS",
//         notes: "Command + L + O - Open files on a browser tab. | Flex & Grid helps to keep things organized. | Command + / - To comment out code in vs code. | Use (img/(jpg name) - to show pics in the browser. | ‘/’ is the link back to the folder. | <div> is a block element. | Block Element - Takes up the width of the page. | Inline Element - Only as much width as needed. | Position - Controls how an element appears in regards to other elements on the page. | CSS Grid Layout - Grid layout system. | Flexbox - One directional flow layout system. | Grid Template Columns - How you dictate how the columns will be set up. | Grid Template Rows - How you dictate the rows to be set up. | fr - Fractal unit. | ‘Auto’ uses whatever space is available on the page. | You have to set the container grid up first before anything else. | Everything on the web page is a rectangle. | ‘:root’ trumps everything in the css style sheet."
//     },
//     {
//         subject: "JAVASCRIPT",
//         notes: "Objects & Functions are used everywhere (very important). | List out and check edge cases when building functions. |An empty return statement returns undefined. | The function is like the engine. | Parameter is like a placeholder. | No semicolon at the end of an object. | Functions make routes for the data. | Javascript uses camelcase when referencing css even if css doesn't. | Important -  Conditionals, Booleans & Loops. | Always know what the data type is to be able to use it later. | Control Flow - HTML → CSS → JS | An ‘array of objects’ is used quite often. | Shift + Option + (down key) - Copies what you’ve highlighted in VS code. | ‘For Loops’ are used to go through a large array of objects often. | Data types are objects. | As long as you have an output you’ve won!"
//     },
//     {
//         subject: "EJS",
//         notes: "ejs template - HTML page you can put javascript in. | express ejs layouts - Putting express with the ejs so it can be used in express. | Make and fill empty arrays with problemed data to store and sort later. | Once you know the data type, you know what methods you can use on it. | Make sure to always think about reference and data type. | console.log helps you tinker until you get what you want. | Whenever we use split() we end up with an array. | split() splits it in different places and makes an array with it. | The easy way to access your data is by making it an object. | You create empty arrays at the beginning to start separating the data to then bring it back in the order you want. | You have to make a ‘views’ folder for ejs to read the files inside. | You don't have to restart the server if ejs page is already created & you’ve made changes to it."
//     },
//     {
//         subject: "REACT",
//         notes: "React - Frontend framework. | SPA - Single page application. | Express API - Connects to React to make it full stack. | Virtual DOM - Putting an entire page on top of an element. | React uses Ex6 ‘import’ syntax. | Make your components with a capital letter. | JSX - HTML like, but React style. | className = class in HTML. | <noscript> will make everything between the tags regular HTML. | React restarts on it’s own like nodemon. | You can’t have 2 divs on the outer div. | ‘?’ - is like an else statement. | ‘:’ - is like a return statement. | You export functions to use in React to the index page. | ‘export default App;’ - ES6 syntax for exporting. | React gives you a boilerplate of imports. | ReactDOM.render() - How React displays the app.  This is what makes it a virtual DOM. | ‘node_module’ in error stacks don't matter.  Don't consider it when debugging code. | Functional Component - Made out of a function. | Class Component - Is made out of a class. | The newer syntax is ‘functional components’. | ‘.map’ - Returns a new array. | ‘idx’ - Can be used to define an index (not required though)."
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
//         subject: "BACKEND/NODE.JS",
//         notes: "CRUD - Create, Read, Update & Delete., package.json - Config file for your node project., init - initialize., Putting ‘node’ before the filename runs it in the terminal."
//     },
//     {
//         subject: "NODE MODULES",
//         notes: "Module - JS file that's being imported to the main file., We can create our own modules and some are already built into Node (Ex: fs - file system)., The modules have their own set of functions that we can use., When you get a data type back, print it to see what data type is., Test a function before you use it. , If you don't specify the file name in ‘require’ it will default to the index.js on the main file level (when importing js files to other js files). , You have to export your functions when using a module. , You have to import your functions in the main js file as a variable. , ‘Require’ is how you bring in an external file. , For changes to take effect you have to cut off and on the server (unless you’re using nodemon)., Control + c - Stops the server in vs code. , NPM Registry - Developers building out modules for you then to use. , package.json will have all dependencies listed., Third party modules have to be downloaded per project unless they are global (should rarely be global)."
//     },
//     {
//         subject: "NODE/EXPRESS",
//         notes: "Express - Framework for writing restful API’s in Node.js., We can create an app using this module., Think of this as a Node package for now., Express is lightweight with not a lot of set up., CSV - Ends up being a long string that you will have to parse.,  Parsing - Turning data into a format that works for you., Anytime you use split() you will get back an array., ‘req’ - request., ‘res’ - response., The array returned should match the routes., Make sure to restart the server every time you make a change."
//     },
//     {
//         subject: "SEQUELIZE:",
//         notes: "where - Change a certain section in the database and key to finding things in the database., Model name needs to be singular (ex: Player not Players)., You can use commas when specifying millions and so on in javascript., Make sure to create if/else statements to deal with edge cases for search queries.,  Once you ‘drop’ a database its gone forever., Never use the ‘destroy’ function.  It can cause too many issues potentially. "
//     },
//     {
//         subject: "MONGOOSE",
//         notes: "Mongoose is known as an ODM (Object Document Mapper)."
//     }
// ])
//     .then((newTerminalNotes) => {
//         console.log(newTerminalNotes);
//     })
//     .catch((error) => {
//         console.log(error);
//     });



// Database.insertMany([
//     {
//         subject: 'Mongodb',
//         notes: ""
//     }
// ])
//     .then((newTerminalNotes) => {
//         console.log(newTerminalNotes);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

