let btn=document.querySelector('button');
btn.onclick=function(){
    console.log("button was clicked",btn.innerText);
}
btn.onmouseenter=function(){
    console.log("On mouse enter");
}