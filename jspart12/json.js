let jsonres='{"fact":"Most cats adore sardines.","length":25}';
console.log(jsonres.fact);
let validres=JSON.parse(jsonres);
console.log(validres);
console.log(validres.fact);
console.log(jsonres.fact);

let student={
    name:"Mayank",
    age:23
}
