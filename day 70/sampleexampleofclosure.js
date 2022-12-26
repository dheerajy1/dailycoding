function outer(x){
    
    function inner(){
        console.log(x)
    }
    function greet(){
        console.log(`hi`)
    }
    return {
        inner,
        greet
    }
}
outer(8).inner()