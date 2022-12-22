function logfun(message) {
    return () => {
        console.log(`${message}`)
    }
}
const alertMom = logfun('hi mom')

alertMom()


for (let i = 0; i < 3; i++) {
    const log = () => {
        console.log(i)
    }
    setTimeout(log, 100)
}

for (var i = 0; i < 3; i++) {
    const log = () => {
        console.log(i)
    }
    setTimeout(log, 100)
}
