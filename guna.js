const express = require("express");
const exphbs=require("express-handlebars");
const bodyParser=require("body-parser");
const mysql=require("mysql");

require('dotenv').config();

const guna=express();
const port=process.env.PORT || 3000;

guna.use(bodyParser.urlencoded({extended:false}));
guna.use(bodyParser.json());

//static Files
guna.use(express.static("public"));

//Template Engine
const handlebars =exphbs.create({extname:".hbs"});
guna.engine('hbs',handlebars.engine);
guna.set("view engine","hbs");

//Router

guna.get('/',(req,res)=>{
    res.render("home");
})


//Listen Port
guna.listen(port,()=>{
console.log("Listening Port : "+port);
});