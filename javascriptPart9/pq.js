let p=document.createElement('p');
p.innerText="Hey I'm red";
p.style.color="red";
let body=document.querySelector('body');
body.appendChild(p);

let h3=document.createElement('h3');
h3.innerText="I am a blue h3";
h3.style.color="blue";
// body=document.querySelector('body');
body.appendChild(h3);

let div=document.createElement('div');
// p.innerText="Hey I'm red";
div.style.border="black";
div.style.backgroundColor="pink";
// ?=document.querySelector('body');

body.appendChild(div);

let h1=document.createElement('h1');
h1.innerText="I'm in a div";
let p1=document.createElement('p');
p1.innerText="me TOO";
// p.style.color="red";
// let div=document.querySelector('div');
div.appendChild(h1);
div.appendChild(p1);

