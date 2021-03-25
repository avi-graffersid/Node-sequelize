const express = require("express");
const app = express();
var userCtrl= require('./controllers/userController')
require('./models/index'); 
const bodyParser = require("body-parser");
const cors = require("cors");
const Reviews = require('./models/reviews');

const db = require('./models/index');
const port = 8080;





// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req,resp)=>{
    resp.send("Home page");
});






//app.post('/add11',userCtrl.addReview1);
app.post('/add-book1',userCtrl.addReview);
app.post('/add-book',userCtrl.addUser);
app.get('/crud',userCtrl.crudOperation);
app.get('/query',userCtrl.queryData);
app.get('/find',userCtrl.finderData);
app.get('/api2',userCtrl.rawQ);
app.get('/api1',userCtrl.oneToOne);
app.get('/get',userCtrl.one);


app.listen(port, ()=>{
    console.log(`Listening at  http://localhost:${port}`);
});

module.exports = app;