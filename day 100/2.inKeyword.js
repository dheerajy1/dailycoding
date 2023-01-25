const person = {
    name: "Elon",
    age: 25,
}
console.log(person.name,)
console.log(Object.entries(person))
console.log(Object.entries(person)[0])
console.log(Object.entries(person)[0][0])



if(person.name){
    console.log("Has truthy name value")
}
if("name" in person){
    console.log("Has name property")
}

delete person.name
console.log(person.name,)
if("name" in person){
    console.log("Has name property")
}