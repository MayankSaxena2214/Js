let user=document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("Change Event");
    console.log("Final value=",user.value);
});
user.addEventListener("input",function(){
    console.log("input event");
    console.log("Final value=",user.value);
});