console.log(`--------------`)

for (var i=0; i < 3; i++){
    console.log(i, `hi`)

    const log = () =>{
        console.log(i, `bye`)
    }

    setTimeout(log, (i+1)*1000)
}
console.log(`--------------`, i)

/*
JS closure interview question

for (var i = 0; i < 3; i++) {

    const log = () => {

        console.log(i)
    }
    setTimeout(log, 1000)
}
 output: 
         3
         3
         3
*/