const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");
const randomNumber=require(__dirname+"/utils/randomNo");
const randomCharacter=require(__dirname+"/utils/randomCh");
const app = express();

app.set('view engine' ,'ejs' );
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended :true}));


app.get("/",(req,res)=>{
    res.render("index");
}).post("/",(req,res)=>{
    const rn = req.body;
    const optionRN =rn.noCharOption;
    let restext = ``;
    if(optionRN==1){
        const minNo = parseInt(rn.minRange);
        const maxNo = parseInt(rn.maxRange);
        restext+=`${randomNumber(minNo,maxNo)} `;
    } else if(optionRN==2){
        restext+=`${randomCharacter()} `;
    } else {
        const sizeOfstring =rn.sizeOfstring;
        for(let i =0 ;i<sizeOfstring;i++){
            restext+=`${randomCharacter()}`;
        }
    }
    fs.writeFile("file.txt",restext,(err)=>{
        if(err)
          throw err;
    })
    res.redirect("/");
})
app.get("/file.txt",(req,res)=>{
    fs.readFile("file.txt", 'utf8', function(err, data) {
        if (err) throw err;
       res.send(data)
      });
})
app.get("/about",(req,res)=>{
    res.render("about");
})
let port  = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("site hosted on port 3000");
})