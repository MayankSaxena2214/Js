let h1=document.querySelector("h1");
//Suppose we want to change the color of h1 to blue after the 1s
// setTimeout(()=>{
//     h1.style.color="blue";
// },1000);

//Again we want to change the color of h1 from blue to red after 1s
//1s to blue and anotehr 1s to red
// Total time for the red is 2s

// setTimeout(()=>{
//     h1.style.color="red";
// },2000);

//Again after red we want yellow so 
//Total time for yellow is 1s +1s+1s
// setTimeout(()=>{
//     h1.style.color="yellow";
// },3000);
//Main problem is that we have to calculate the time each time and 
//then werite and also it is dependent
//ANOTHER APPROACH TO WERITE THE FUNCTION
// function changecolor(color,delay){

//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// }
// changecolor("orange",1000);
// changecolor("yellow",2000);
// changecolor("green",3000);

//now we have reduced the rewriting the code 
//But if the error occurs in the first then another task 

//So we will use callback in which one fucntion will call the next function
//now we are not required to calculat the time for next change
//Used in db when we want to add data frequently
function colorchange(color,delay,nextcolor){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolor)
        nextcolor();
    },delay);
}
colorchange("red",1000,()=>{
    colorchange("orange",1000,()=>{
        colorchange("yellow",1000)
    })
})
//This is called callback hell and to 
//Very difficlut to understand this code 
//So we use promise to understand them