function hello(name){
var message = "hello" + name;
return function hello () {
console.log(message );
};
}
//generate closure
var helloWorld = hello("world");
//use closure
helloWorld();