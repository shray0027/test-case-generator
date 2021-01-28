const randomNumber = (min,max)=>{
        return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + min);
} 
module.exports=randomNumber;