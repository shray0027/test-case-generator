const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");
const randomNumber = require(__dirname + "/utils/randomNo");
const randomCharacter = require(__dirname + "/utils/randomCh");
const randomString = require(__dirname + "/utils/randomString");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", (req, res) => {
  res.render("index", {
    restext: "enter your options"
  });
}).post("/", (req, res) => {
  const rn = req.body;
  let restext = ``
  const testcase = rn.testcase
  if (rn.testcaseFlag == 'on') {
    restext = `${rn.testcase} \n`;
  }
  const option = rn.option;
  if (option == 1) {
    const optionRN = rn.noCharOption;
    if (optionRN == 1) {
      const minNo = parseInt(rn.minRange);
      const maxNo = parseInt(rn.maxRange);
      for (let i = 0; i < rn.testcase; i++) {
        restext += `${randomNumber(minNo,maxNo)} \n`;
      }
    } else if (optionRN == 2) {
      for (let i = 0; i < rn.testcase; i++) {
        restext += `${randomCharacter()} \n`;
      }
    } else {
      const sizeOfstring = rn.sizeOfstring;
      for (let i = 0; i < rn.testcase; i++) {
        for (let j = 0; j < sizeOfstring; j++) {
          restext += `${randomCharacter()}`;
        }
      }
    }
  } else if (option == 2) {
    const optionARR = rn.noCharOption;
    const checkMatrix = rn.checkMatrix;
    if (checkMatrix == "on") {
      const n = rn.noRow;
      const m = rn.noCol;
      const arraySizeFlag = rn.arraySizeFlag;

      if (optionARR == 1) {
        const minNo = rn.minRange;
        const maxNo = rn.maxRange;
        for (let i = 0; i < testcase; i++) {
          if (arraySizeFlag == "on") {
            restext += `${n} ${m} \n`;
          }
          for (let j = 0; j < n; j++) {
            for (let k = 0; k < m; k++) {
              restext += `${randomNumber(minNo,maxNo)} `;
            }
            restext += `\n`;
          }
        }
      } else if (optionARR == 2) {
        for (let i = 0; i < testcase; i++) {
          if (arraySizeFlag == "on") {
            restext += `${n} ${m} \n`;
          }
          for (let j = 0; j < n; j++) {
            for (let k = 0; k < m; k++) {
              restext += `${randomCharacter()} `;
            }
            restext += `\n`;
          }
        }
      } else {
        const checkRandomString=rn.checkRandomString; 
        const checkRandomArray=rn.checkRandomArray;
        for(let i=0;i<testcase;i++){
            if(arraySizeFlag=="on"){
                restext+=`${n} ${m} \n`
            }
            for(let j=0;j<n;j++){
                for(let k=0;k<m;k++){
                    let sizeString=rn.sizeOfstring;
                    if(checkRandomString=="on"){
                        const minNo=rn.minRange;
                        const maxNo=rn.maxRange;
                        sizeString=randomNumber(minNo,maxNo);
                    } else {
                        sizeString=rn.sizeOfstring;
                    }
                    for(let l=0;l<sizeString;l++){
                        restext+=`${randomCharacter()}`;
                    }
                    restext+=` `;
                }
                restext+=`\n`;
            }
        }
      }
    } else {
      const arraySizeFlag = rn.arraySizeFlag;
      const checkRandomArray = rn.checkRandomArray;
      if (optionARR == 1) {
        const minRange = rn.minRange;
        const maxRange = rn.maxRange;
        for (let i = 0; i < testcase; i++) {
          let size;
          if (checkRandomArray == "on") {
            size = randomNumber(1, 100000000);
          } else {
            size = rn.arraySize;
          }
          if (arraySizeFlag == "on") {
            restext += `${size} \n`;
          }
          for (let j = 0; j < size; j++) {
            restext += `${randomNumber(minRange,maxRange)} `
          }
          restext += `\n`;
        }
      } else if (optionARR == 2) {
        for (let i = 0; i < testcase; i++) {
          let size;
          if (checkRandomArray == "on") {
            size = randomNumber(1, 1000000);
          } else {
            size = rn.arraySize;
          }
          if (arraySizeFlag == "on") {
            restext += `${size} \n`;
          }
          for (let j = 0; j < size; j++) {
            restext += `${randomCharacter()} `
          }
          restext += `\n`;
        }
      } else {
          console.log(rn);
        const checkRandomString=rn.checkRandomString; 
        const checkRandomArray=rn.checkRandomArray;
        for(let i=0;i<testcase;i++){
            let sizeArray;
            if(checkRandomArray=="on"){
                sizeArray=randomNumber(1,1000000);
            } else {
                sizeArray=rn.arraySize;
            }
            if(arraySizeFlag=="on"){
                restext+=`${sizeArray} \n`
            }
                for(let k=0;k<sizeArray;k++){
                    let sizeString=rn.sizeOfstring;
                    if(checkRandomString=="on"){
                        // const minNo=rn.minRange;
                        // const maxNo=rn.maxRange;
                        sizeString=randomNumber(1,10);
                    } else {
                        sizeString=rn.sizeOfstring;
                    }
                    for(let l=0;l<sizeString;l++){
                        restext+=`${randomCharacter()}`;
                    }
                    restext+=` `;
                }
                restext+=`\n`;
            
        }
      }
      }

    }

  


  res.render("index", {
    restext: restext
  })
  fs.writeFile("file.txt", restext, (err) => {
    if (err)
      throw err;
  })
})
app.get("/file.txt", (req, res) => {
  fs.readFile("file.txt", 'utf8', function(err, data) {
    if (err) throw err;
    res.send(data)
  });
})
app.get("/about", (req, res) => {
  res.render("about");
})
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("site hosted on port 3000");
})