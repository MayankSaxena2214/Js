// let n=4;
// for(let i=0;i<n;i++){
//     console.log("Hello",i);
// }
// let args=process.argv;
// for(let i=2;i<args.length;i++){
//     console.log(args[i]);
// }

// let somevalue=require("./math.js");
// console.log(somevalue);
// console.log(somevalue.sum(2,3));

import{sum,mul} from "./math.js";

//But we can't use it directly first we have to create package within the directory using "npm init" command 
//And then inside the package.json we will write the another key:value pair 
//where key="type" and value ="module"
console.log(sum(1,2));