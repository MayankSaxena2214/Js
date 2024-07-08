// let url="https://catfact.ninja/fact";
// async function getfacts(){
//     let res=await fetch(url);
//     let data= await res.json();
//     console.log(data);
// }
let url="https://catfact.ninja/fact";
async function getfacts(){
    let res=await fetch(url);
    let data=await res.json();
    console.log(data.fact);
}