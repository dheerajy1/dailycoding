function counter(){
    let count = 0
    return function() {
        count++
        console.log(count);
    }
}
const mycounter = counter()
mycounter()
mycounter()
mycounter()
mycounter()
mycounter()

{
    function counter(){
        let count = 0
        return function() {
            count++
            console.log(count);
        }
    }
    const mycounter = counter()()
    console.log(mycounter);
    const mycounter2 = counter()()
    counter()()
}
