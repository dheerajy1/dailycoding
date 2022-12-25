function livingthing(name) {
    //const name = 'lion'
    //const name = 'cat'
    function isbites() {
        if (name === 'lion') console.log(`yes! ${name} bites`)
        else console.log(`No!${name} doesn't bites`)

    }
    function ispet() {
        if (name === 'lion') console.log(`you cannot pet a ${name}`)
        else console.log(`you can pet a ${name}`)
    }
    return {
        isbites,
        ispet
    }

}
livingthing('lion').isbites()
livingthing('cat').ispet()

console.log(i)


