const randomNumber= require("./randomNo");
const randomCharacter= require("./randomCh");
const randomString = (minRange,maxRange)=>{
    let string=``;
    for(let i=0;i<randomNumber(minRange,maxRange);i++){
        string+=randomCharacter();
    }
    return `${string}`;
}
module.exports = randomString;