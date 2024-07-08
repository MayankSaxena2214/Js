function savetodb(data){
    return new Promise((resolve,reject)=>{
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>4)
            resolve("Data was saved");
        else
            reject("Data Failed to save");
    })
}
savetodb("Apna")
.then((result)=>{
    console.log("Resolved1");
    console.log("Result is:",result);

    return savetodb("College")
})
.then((result)=>{
    console.log("Resolved2");
    console.log("Result is:",result);
    return savetodb("World");
})
.then((result)=>{
    console.log("Resolved3");
    console.log("Result is:",result);
})
.catch((error)=>{        //HANDLING FOR BOTH 1 AND 2 FAILURE OR CAN WRITE FOR SEPARATE
    console.log("Failure for 1 and 2");
    console.log("Error is:",error);
})