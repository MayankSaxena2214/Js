// function getnum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000)
//     })
// }
// async function demo(){
//     await getnum();
//    await getnum();
//    getnum();
// }

let h1=document.querySelector("h1");
function changecolor(color){
    return new Promise((resolve,reject)=>{
        let num=Math.floor(Math.random()*6)+1;
        if(num<3){
            reject("Rejected");
        }
        setTimeout(()=>{
            h1.style.color=color;
        resolve();
        },1000);
    });
}
async function demo(){
   try{
    await changecolor("red");
    await changecolor("blue");
    await changecolor("orange");
   }
   catch(err){
    console.log("Error is:",err);
   }
}
demo();