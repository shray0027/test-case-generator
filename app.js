const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine' ,'ejs' );
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended :true}));


app.get("/",(req,res)=>{
    res.render("index");
})

let port  = process.env.PORT;
if(port ===null || port===""){
    port=3000;
}
app.listen(port,()=>{
    console.log("site hosted on port 3000");
})