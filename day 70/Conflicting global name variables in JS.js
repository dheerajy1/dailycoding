function outtest() {
    function outer() {

        function inner(x) {
             x = 14
            console.log(x)
        }
        function greet(t) {
            console.log(t)
        }
        return {
            inner,
            greet
        }
    }
    function y(){

    }
    return {
        outer,y
        }
}
let x = 60
outtest().outer().inner()
outtest().outer().greet('bye')