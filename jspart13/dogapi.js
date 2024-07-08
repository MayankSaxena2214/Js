let url="https://dog.ceo/api/breeds/image/random";
let p=document.querySelector("p");
let img=document.querySelector("img");
let btn=document.querySelector("button");
async function getdog(){
    let res=await axios.get(url);
    return res.data.message;
   
}
// btn.addEventListener("click",async()=>{
//     let src=await getdog();
//     let img=document.createElement("img");
//     img.src=src;        //Now the new image will keep on adding because we are adding the new image not modifying the old image
//     p.appendChild(img); //For modifying old image below code
    
// })
btn.addEventListener("click",async()=>{
    let src=await getdog();
    // let img=document.createElement("img");
    img.src=src;        //Now the new image will keep on adding because we are adding the new image not modifying the old image
    // p.appendChild(img); //For modifying old image below code
    
})