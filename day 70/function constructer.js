function trainpassengers() {

    var noofpassengeres = 0
    this.boardingpassengercounter = function () {
        noofpassengeres++
        console.log(noofpassengeres)
    }
    this.exitpassengercounter = function () {
        noofpassengeres--
        console.log(noofpassengeres)
    }
}
const trainpasstc = new trainpassengers()
trainpasstc.boardingpassengercounter()

trainpasstc.exitpassengercounter()
trainpasstc.exitpassengercounter()