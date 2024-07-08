function hello(){
    console.log("Inside hello");
    console.log("Hello");
}
function demo(){
    console.log("Calling hello function inside demo");
    hello();
}
console.log("Calling demo function");
demo();