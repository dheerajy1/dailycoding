let name1 = {
    firstname: "Elon",
    lastname: "Musk",
}
let printFullname = function(hometown){
    console.log(`${this.firstname} ${this.lastname} ${hometown}`)
}
printFullname.call(name1,'TX')
let name2 = {
    firstname: "Jeff",
    lastname: "bezos",
}
printFullname.call(name2,'CA')

