const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const letters = ['a', 'b', 'c', 'd', 'e', 'f']
const button = document.querySelector('button')
const hexexport = document.querySelector('.hexcode')
const arrayshold = new Map([
    [1, values], [2, letters]
])


let positions = ()=>{
    const keyGen = Math.floor(Math.random() * arrayshold.size + 1)
    const randomarray = arrayshold.get(keyGen)
    
    let arrlen
    if (keyGen === 1) arrlen = values.length
    else arrlen = letters.length
    
    const arrindGen = Math.floor(Math.random() * arrlen)
    pos = randomarray[arrindGen]
    return pos
}

button.addEventListener('click',()=>{
    const hexcode =
    `#${positions()}${positions()}${positions()}${positions()}${positions()}${positions()}`
    
    document.body.style.backgroundColor = hexcode
    hexexport.style.color = hexcode
    hexexport.innerHTML = hexcode
})