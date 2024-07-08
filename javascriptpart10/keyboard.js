let inp=document.querySelector('input');
inp.addEventListener('keydown',()=>{
    console.log(event.key);
    console.log(event.code);
    console.log("Key down");
})
inp.addEventListener('keyup',()=>{
    console.log("Key up");
})