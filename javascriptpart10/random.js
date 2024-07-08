console.log("LInked")
let h1=document.querySelector('h1');
let div=document.querySelector('div');
let btn=document.querySelector('button');
function getRandom(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
btn.addEventListener("click",function(){
    let clr=getRandom();
    console.log(clr);
    
    h1.style.color=clr;
    div.style.backgroundColor=clr;
})