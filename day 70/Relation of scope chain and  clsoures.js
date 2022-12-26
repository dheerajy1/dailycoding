function outtest() {
    function outer() {

        function inner(x) {
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
    function y() {

    }
    return {
        outer, y
    }
}
outtest().outer().inner(9)
outtest().outer().greet('bye')