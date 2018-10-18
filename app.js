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

   app.use(
       session({
   secret: 'node'  
   }));

 // configuracion de EJS Template Engine
 app.set('view engine', 'ejs')
let tareas= ['uno','dos'];

//compartir recursos 
app.use('/public', express.static('public'))

//ruta iniciada
 app.get('/',function(request,response){
     response.render('formulario.ejs',{
         tareas
     })
 })

 //ruta formulario
app.post('/adicionar',function(request,response){
    let tarea = request.body.nuevaTarea;
    tareas.push(tarea);
    response.redirect('/')
})
//borrar tareas
app.get('/borrar/:id',function(request,response){
    let id = +request.params.id;
    tareas.splice(id,1)
    response.redirect('/');
    
})

app.listen(port, function(){
    console.log('escuchando el puerto', port);
});