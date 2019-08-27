const cors = require("cors")
const express=require("express")
const bodyparser=require("body-parser")
var http = require('http');


const mongoconn=require("../ecommerce_node/dbconn/dbconn")
const app=express()
app.use(cors({origin: '*'}))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

mongoconn.connectToServer(function(){

    db=mongoconn.getDb()
    console.log("connected")
   
    const login=require('./ecomroute/test')
    
    app.use(login);
    //app.listen(3000,function() {console.log("3000 is listning")});
    const server = http.createServer(app)
    server.listen(3000)
    console.log("listning 3000")



})

