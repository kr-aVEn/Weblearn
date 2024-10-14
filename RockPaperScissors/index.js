const pchoice=document.querySelector(".p_choice");
const pimg=pchoice.previousElementSibling;

const cchoice = document.querySelector(".c_choice");
const cimg=cchoice.previousElementSibling;

const arms=document.querySelectorAll(".img");
const res=document.querySelector(".result");


function random(){
   let rand= Math.floor(Math.random()*3);
   return rand;
    
}
function computer(){
    const choices=["paper","rock","scissors"];
    const elem=choices[random()];
    cimg.src=`./img/${elem}.png`;
    cimg.id=elem;
    cchoice.innerHTML=elem;
}

arms.forEach(el => {
    el.addEventListener('click',() => {
        const item=el.childNodes[1];
        pimg.src=item.src;
        pimg.id=item.id;
        pchoice.innerHTML=item.id;
        computer();
        check(cimg.id,item.id);
    })
    
});

function check(a,b){
    let msg;
if(a===b){
    msg=`DRAW`;
}
else if(a==="rock" && b==="paper"){
    msg=`You win!!`;
}
else if(a==="rock" && b==="scissors"){
  msg=`You lose!!`;
}
else if(a==="paper"&& b==="scissors"){
    msg=`You win!!`;
}
else if(a==="paper"&& b==="rock"){
msg=`You lose!!`; 
}
else if(a==="scissors"&& b==="rocks"){
    msg=`You win!`;

}
else if(a==="scissors"&& b==="paper"){
    msg=`You Lose!`;
}

res.innerHTML=msg;
document.body.style.pointerEvents="none"
setInterval(() => {
    res.innerHTML+="."
}, 500);
setTimeout(() => {
    location.reload();
}, 2000);
}