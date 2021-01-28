const year = document.querySelector(".current-year");
const rn = document.querySelector(".rn-content");
const arr = document.querySelector(".arr-content");
const t = document.querySelector(".t-content");
const g = document.querySelector(".g-content");
const rn_l = document.querySelector(".rn-label");
const arr_l = document.querySelector(".arr-label");
const t_l = document.querySelector(".t-label");
const g_l = document.querySelector(".g-label");
const range= document.querySelectorAll(".range");
const date =  new Date();
year.textContent = date.getFullYear();
const choose_rn = ()=>{
    rn.style.display="block";
    rn.style.zIndex="1";
    arr.style.display="none";
    t.style.display="none";
    g.style.display="none";
    rn_l.style.zIndex="2";
    arr_l.style.zIndex="0";
    t_l.style.zIndex="0";
    g_l.style.zIndex="0";
}
const choose_arr = ()=>{
    arr.style.display="block";
    arr.style.zIndex="1";
    rn.style.display="none";
    t.style.display="none";
    g.style.display="none";
    rn_l.style.zIndex="0";
    arr_l.style.zIndex="2";
    t_l.style.zIndex="0";
    g_l.style.zIndex="0";
}
const choose_t = ()=>{
    t.style.display="block";
    t.style.zIndex="1";
    arr.style.display="none";
    rn.style.display="none";
    g.style.display="none";
    rn_l.style.zIndex="0";
    arr_l.style.zIndex="0";
    t_l.style.zIndex="2";
    g_l.style.zIndex="0";
}
const choose_g = ()=>{
    g.style.display="block";
    g.style.zIndex="1";
    arr.style.display="none";
    t.style.display="none";
    rn.style.display="none";
    rn_l.style.zIndex="0";
    arr_l.style.zIndex="0";
    t_l.style.zIndex="0";
    g_l.style.zIndex="2";
}
function whichOptionSelectedRN(e){
    if(e===0){
       range[0].disabled=false;
       range[1].disabled=false;
    } else {
       range[0].disabled=true;
       range[1].disabled=true;
    }
}

// let txt;
// function preload(){
//     txt=loadStrings("file.txt");
  
// }
// function setup(){
//     console.log(txt);
// }