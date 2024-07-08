let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(event){
    let input=document.querySelector("input");
    let li=document.createElement("li");
    li.innerText=input.value;
    // console.log(inpput.value);
    ul.appendChild(li); 
    let delbtn=document.createElement("button");
    delbtn.classList.add("delete");
    console.log(delbtn.classList.contains("delete"));
    delbtn.innerText="Delete";
    li.appendChild(delbtn);
    delbtn.addEventListener("click",function(){
        let par=this.parentElement;
        par.remove();
    })
    input.value="";
});
let delbtns=document.querySelectorAll(".delete");
for(delbtn of delbtns){
    delbtn.addEventListener("click",function(){
        let par=this.parentElement;
        par.remove();
    })
}