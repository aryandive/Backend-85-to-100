// const { createServer } = require('node:http');
// const fs = requir('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


// import harry from "./mymodule.js"
// console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here

//   });

const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)