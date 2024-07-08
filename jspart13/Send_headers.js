let btn=document.querySelector("button");
let p=document.querySelector("p");

let url="https://icanhazdadjoke.com/";
async function getjoke(){
    let config={headers:{Accept:"application/json"}};
    let res=await axios.get(url,config);
    return res.data.joke;
}
btn.addEventListener("click",async ()=>{
    let str=await getjoke();
    p.innerText=str;
})
