function trainpassengers() {
    var noofpassengeres = 0
    return function passengercounter() {
        noofpassengeres++
        console.log(noofpassengeres)
    }
}
const trainpasstc = trainpassengers()
trainpasstc()
trainpasstc()

