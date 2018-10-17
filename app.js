require ('./config/config');
const express = require ('express');
const bodyparser = require('body-parser');
const morgan = require ('morgan');
const session = require ('cookie-session');
const port = process.env.PORT;
const app = express();

app.use (morgan('dev'));
app.use (bodyparser.urlencoded({
      extended: true
} )

);

// app.use(
//     session({
//   secret: 'node'  
// }));

app.listen(port, function(){
    console.log('escuhcando el puerto', port);
});