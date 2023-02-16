function sum(n1,n2){
    return n1+n2
}

console.log(sum(2,3));

function sum1(x){
    if(arguments.length===2){
        return arguments[0] + arguments[1]
    }
    else{
       return function (y){
            return x + y
        }
    }
}
console.log(sum1(2,3));
console.log(sum1(2)(3));

function sum2(x,y){
    if(y!==undefined){
        return arguments[0] + arguments[1]
    }
    else{
       return function (y){
            return x + y
        }
    }
}
console.log(sum2(2,3));
console.log(sum2(2)(3));


const arr = [1,2,3,4,5]

const log = arr.findIndex((e)=>e===3)
console.log(log);
