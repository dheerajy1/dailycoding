const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice, computerChoice
possibleChoices.forEach(x => x.addEventListener('click', (e) => {
    userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML = userChoice
    generateComputerchoice()
}))

function generateComputerchoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or u can use possibleChoices.length
    let r = possibleChoices[0].innerHTML
    let p = possibleChoices[1].innerHTML
    let s = possibleChoices[2].innerHTML
    let rps = new Map([[1, r], [2, p], [3, s]])

    //let rpc = new Map([[1,'Rock'],[2,'Paper'],[3,'Scissor']])
    computerChoiceDisplay.innerHTML = rps.get(randomNumber)

} 