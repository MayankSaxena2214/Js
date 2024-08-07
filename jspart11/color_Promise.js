let h1=document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay)
    })
}
changecolor("red",1000).then(()=>{
    return changecolor("blue",1000);
})
.then(()=>{
    return changecolor("green",1000);
})
.catch(()=>{
    console.log("Error occured");
})