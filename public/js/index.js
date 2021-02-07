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
const cb= document.querySelectorAll(".cb");
const generateRN= document.querySelector(".rn-form");
const output=document.querySelector(".textArea");
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
            range[2].disabled=false;
            range[3].disabled=false;
            range[1].disabled=true;
    } else {
        if(e===2){
            range[1].disabled=false;
            range[2].disabled=true;
            range[3].disabled=true;
        } else {
            range[2].disabled=true;
            range[3].disabled=true;
            range[1].disabled=true;
        }
    }
}
const whichOptionSelectedARR= e=>{
    if(e===0){
            range[6].disabled=true;
            range[9].disabled=false;
            range[10].disabled=false;
            cb[0].disabled=true;
    } else {
        if(e===1){
            range[6].disabled=true;
            range[9].disabled=true;
            range[10].disabled=true;
            cb[0].disabled=true;
        } else {
            range[6].disabled=false;
            range[9].disabled=true;
            range[10].disabled=true;
            cb[0].disabled=false;
        }
    }
}

const chaMatrix=()=>{
        range[7].disabled=!range[7].disabled
        range[8].disabled=!range[8].disabled
        range[5].disabled=!range[5].disabled
}
console.log(output.value);
const copy = () => {
    const el = document.createElement('textarea');
    el.value = output.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };