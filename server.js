// // server.js
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//        ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }

// Instruct the app
// to use the forceSSL
// middleware
// app.use(forceSSL());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, ()=>console.log('Running'));