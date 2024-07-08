async function greet(){
    throw("No");
    return "hello world";
    // console.log(a);
    // throw("Random errors");
}
greet()
.then((result)=>{
    console.log("Promise resolved");
    console.log("Result is:",result);
})
.catch((error)=>{
    console.log("Promise failed");
    console.log("Error is:",error);
})