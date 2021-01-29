const randomCharacter = ()=>{
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    return alpha[Math.floor(Math.random()*26)]; 
}
module.exports=randomCharacter;