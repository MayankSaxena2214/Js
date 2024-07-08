let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");
let p=document.querySelector("p");
let ul=document.querySelector("#list");
let inp=document.querySelector("input");
// let country=inp.value;
btn.addEventListener("click",async()=>{
    let country=inp.value;
    let mydata=await getuniv(country);
    let colleges=mydata.data;
    // console.log(mydata);
    for(let i=0;i<colleges.length;i++){
        let li=document.createElement("li");
        li.innerText=colleges[i].name;
        ul.appendChild(li);
        
    }
    
})
async function getuniv(country){
    return axios.get(url+country);
    
}