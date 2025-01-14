var express=require('express');

var todoController=require('./controllers/todoController');

var app=express();

//setting view engine to ejs
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoController(app);
//listen to port
app.listen(3000);
console.log('Listening to port localhost 3000');
