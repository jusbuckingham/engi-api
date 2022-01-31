// const { Users } = require("./models");
// const { Terminal } = require("./models");
// const { Frontend } = require("./models");
// const { Backend } = require("./models")
// const { Database } = require("./models")


// Terminal.insertMany([
//     {
//         subject: "GITHUB",
//         notes: "A provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration and wikis for every project.  Headquartered in California, it has been a subsidiary of Microsoft since 2018."
//     },
//     {
//         subject: "BASH",
//         notes: "A Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell.  First released in 1989, it has been used as the default login shell for most Linux distributions.  A version is also available for Windows 10 via the Windows Subsystem for Linux.[14] It is also the default user shell in Solaris 11.  Bash was also the default shell in all versions of Apple macOS prior to the 2019 release of macOS Catalina, which changed the default shell to zsh, although Bash remains available as an alternative shell."
//     },
//     {
//         subject: "MONGODB",
//         notes: ""
//     },
//     {
//         subject: "POWERSHELL",
//         notes: "A command-line shell and the associated scripting language. Initially a Windows component only, known as Windows PowerShell, it was made open-source and cross-platform on 18 August 2016 with the introduction of PowerShell Core.  The former is built on the .NET Framework, the latter on .NET Core. The name Windows PowerShell is still present on the latest versions of Windows 11 and 10, but the latest versions of PowerShell are called PowerShell or Microsoft PowerShell."
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
//         notes: "The standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
//     },
//     {
//         subject: "CSS",
//         notes: "A style sheet language used for describing the presentation of a document written in a markup language such as HTML.  CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
//     },
//     {
//         subject: "JAVASCRIPT",
//         notes: "A programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.  Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.  All major web browsers have a dedicated JavaScript engine to execute the code on users' devices."
//     },
//     {
//         subject: "EJS",
//         notes: "An open-source rich Internet application framework based on jQuery and OpenAjax. It extends those libraries with a model–view–controller architecture and tools for testing and deployment. Because it does not depend on server components, it can be combined with any web-service interface and server-side language like ASP.NET, Java, Perl, PHP, Python, or Ruby."
//     },
//     {
//         subject: "REACT",
//         notes: "A free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.  React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality."
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
//         subject: "NODE.JS",
//         notes: "An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a 'JavaScript everywhere' paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.",
//     },
//     {
//         subject: "EXPRESS",
//         notes: "A back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.  It has been called the de facto standard server framework for Node.js."
//     },
//     {
//         subject: "DJANGO",
//         notes: "A Python-based free and open-source web framework that follows the model–template–views (MTV) architectural pattern."
//     },
//     {
//         subject: "FLASK",
//         notes: "A micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. However, Flask supports extensions that can add application features as if they were implemented in Flask itself. Extensions exist for object-relational mappers, form validation, upload handling, various open authentication technologies and several common framework related tools.",

//     },
//     {
//         subject: "SEQUELIZE:",
//         notes: ""
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
//         subject: 'MONGODB',
//         notes: "A source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL)."
//     },
//     {
//         subject: "POSTGRES",
//         notes: "A free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.[14][15] In 1996, the project was renamed to PostgreSQL to reflect its support for SQL. After a review in 2007, the development team decided to keep the name PostgreSQL and the alias Postgres."
//     }
// ])
//     .then((newTerminalNotes) => {
//         console.log(newTerminalNotes);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

