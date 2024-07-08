let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log(response); //Data is not readable
    // console.log(response.json());
    return response.json()  //It returs the promise by defalt
}).then((data)=>{
    console.log("Result 1 is:",data);   //Now data is readable format
    return fetch(url); //Sending another request
})
.then((res)=>{
    return res.json(); //Not readable so convrt in readable and it erturns the promise
})
.then((res)=>{
    console.log("Result 2 is:",res);//Now the data can be printed
})
.catch((err)=>{
    console.log("Error is:",err);
})