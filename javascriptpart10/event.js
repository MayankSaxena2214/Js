let btns=document.querySelectorAll('button');
for(btn of btns){
    btn.addEventListener("dblclick",sayHello);
    // btn.addEventListener("click",say);
}
function sayHello(){
    console.log("Hello");
}

function say(){
    console.log("Say");
}