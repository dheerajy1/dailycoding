const ptag = document.querySelector('p')
const checkbox = document.querySelector('#daily-check-box')
function display() {
    if (checkbox.checked) {
        ptag.style.display = 'block'
        console.log(1)
    }
    else {
        ptag.style.display = 'none'
        console.log(0)
    }
}
