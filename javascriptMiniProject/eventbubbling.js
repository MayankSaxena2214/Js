let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelector("li");

div.addEventListener("click",function(event){
    console.log("Div clicked");
    event.stopPropagation();
});
ul.addEventListener("click",function(event){
    console.log("ul clicked");
    event.stopPropagation();
});
li.addEventListener("click",function(event){
    console.log("li clicked");
    event.stopPropagation();
});
