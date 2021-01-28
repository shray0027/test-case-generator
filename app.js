const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");
const randomNumber=require(__dirname+"/utils/randomNo")
const app = express();

app.set('view engine' ,'ejs' );
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended :true}));


app.get("/",(req,res)=>{
    res.render("index");
}).post("/",(req,res)=>{
    const rn = req.body;
    console.log(rn);
    const noTestcase=rn.noTestcase;
    const optionRN =rn.noCharOption;
    let restext = `${noTestcase}\n`;
    if(optionRN==1){
        const minNo = parseInt(rn.minRange);
        const maxNo = parseInt(rn.maxRange);
        for(let i =1 ;i<=noTestcase;i++ ){
            restext+=`${randomNumber(minNo,maxNo)} `;
        }
       console.log(randomNumber(minNo,maxNo));
    } else {
        console.log(optionRN);
    }
    fs.writeFile("file.txt",restext,(err)=>{
        if(err)
          throw err;
    })
})
app.get("/file.txt",(req,res)=>{
    fs.readFile("file.txt", 'utf8', function(err, data) {
        if (err) throw err;
       res.send(data)
      });
})
let port  = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("site hosted on port 3000");
})