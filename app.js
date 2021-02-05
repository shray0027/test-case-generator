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
    res.render("index",{
        restext:"enter your options"});
}).post("/",(req,res)=>{
    const rn = req.body;
    console.log(rn);
    let restext=``
    const testcase=rn.testcase
    if(rn.testcaseFlag=='on'){
         restext = `${rn.testcase} \n`;
    }
    const optionRN =rn.noCharOption;
    if(optionRN==1){
        const minNo = parseInt(rn.minRange);
        const maxNo = parseInt(rn.maxRange);
        for(let i=0;i<rn.testcase;i++){
            restext+=`${randomNumber(minNo,maxNo)} \n`;
        }
    } else if(optionRN==2){
        for(let i=0;i<rn.testcase;i++){
            restext+=`${randomCharacter()} \n`;
        }
    } else {
        const sizeOfstring =rn.sizeOfstring;
        for(let i=0;i<rn.testcase;i++){
            for(let j =0 ;j<sizeOfstring;j++){
                restext+=`${randomCharacter()}`;
            }
        }
    }
    res.render("index",{
        restext:restext
    })
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
app.get("/about",(req,res)=>{
    res.render("about");
})
let port  = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("site hosted on port 3000");
})