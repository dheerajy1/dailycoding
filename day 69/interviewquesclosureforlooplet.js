console.log(`--------------`)

for (let i = 0; i < 3; i++) {
        console.log(i,`hi`)

    const log = () => {

        console.log(i,`bye`)
    }
    setTimeout(log, 1000)
}
console.log(`--------------`)

/*
JS closure interview question

for (let i = 0; i < 3; i++) {

    const log = () => {

        console.log(i)
    }
    setTimeout(log, 1000)
}
 output: 
         0
         1
         2
*/