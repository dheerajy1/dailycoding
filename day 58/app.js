
const button = document.querySelector('button')
const box2 = document.querySelector('.box2')
let i = 3
const color = ['#57f06475', '#73a51c72', '#d3a63572', '#d335c067']

button.addEventListener('click', () => {
    const div = document.createElement('div')
    //classname = `box${i++}`
    div.classList.add('box3') //gave to inherit width and height
    div.innerText = i++
    div.style.backgroundColor = color[Math.floor(Math.random() * color.length)]
    button.style.transform = `scale(0.8)`
    check(i)
    if (!(i > 10)) box2.after(div)
})

let check = (i) => {
    if (i > 10) {
        alert('Exceded click ok! To Initiate Reset.')
        setTimeout(() => { window.location.reload() }, 10)
    }
}