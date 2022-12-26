function a(){
    var x = 0
    this.b = function(){
        console.log(x)
    }
}
var y = new a()
y.b()