/*
function Goatrip(person) {
 
  
person = new Promise((resolve)=>{
  return resolve(`${person}`)
})

person.then((param)=>{
  console.log(`${param} just joined`)
})
}

new Goatrip(`rk`);
Goatrip(`gskv`);
*/




let i =0
let timer  = ()=>{
  if(i===5) clearInterval(x)
  console.log(i)
  i++
}

let x = setInterval(timer,1000)
function Goatrip(persons) {
persons.forEach(person => {
  person = new Promise((resolve) => {
    return resolve(`${person}`);
  });
  person.then((param) => {
    console.log(`${param} just joined`);
    clearInterval(timer)
  });
});
}
console.log("dheeraj started solo ");
new Goatrip([`rk`,`gskv`]);