// function savetodb(data){
//     let speed=Math.floor(Math.random()*10)+1;
//     if(speed>4){
//         console.log("Your data was saved");
//     }
//     else{
//         console.log("Slow INternet Faliled")
//     }
    
// }
// function savetodb(data,success,failure){
//     let speed=Math.floor(Math.random()*10)+1;
//     if(speed>4){
//         success();
//     }
//     else{
//         failure();          
//     }
// }
// savetodb("Hello",()=>{
//     console.log("Success1");    //IT IS BECOMMING CALLBACK BECAUSE WE ARE
//     savetodb("World",()=>{      //CALLING AGAIN AND AGAIN SO HANDLE WE NEED PROMISES
//         console.log("Success2");
//     },()=>{
//         console.log("Failure2");
//     })
// },()=>{
//     console.log("Failure1");
// });
//CALLBACK HELL CAN BE HANDLED BY THE PROMISES

function savetodb(data){
    return new Promise((resolve,reject)=>{
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>4)
            resolve("Data was saved");
        else
            reject("Data Failed to save");
    })
}
// let req=savetodb("Hello");
// req.then(()=>{
//     console.log("Resolved");
//     console.log(req);
// })
// .catch(()=>{
//     console.log("Rejected");
//     console.log(req);
// });
//OR
savetodb("Hello")
.then(()=>{
    console.log("Resolved");
    console.log();
})
.catch(()=>{
    console.log("Rejected");
    console.log();
});

