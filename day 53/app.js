const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice, computerChoice,result
let r = possibleChoices[0].innerHTML
let p = possibleChoices[1].innerHTML
let s = possibleChoices[2].innerHTML

possibleChoices.forEach((x) => x.addEventListener('click', (e) => {
    userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML = userChoice
    generateComputerchoice()
    getResult()
}))

function generateComputerchoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or u can use possibleChoices.length
  
    let rps = new Map([[1, r], [2, p], [3, s]])

    //let rpc = new Map([[1,'Rock'],[2,'Paper'],[3,'Scissor']])
    computerChoice = rps.get(randomNumber)
    computerChoiceDisplay.innerHTML = computerChoice
} 

function getResult(){
    if(computerChoice===userChoice){
        result = 'Its a Draw!'
    }
    else if(computerChoice===r&&userChoice===p){
        result = 'You Win!'
    }
    else if(computerChoice===r&&userChoice===s){
        result = 'You Lost!'
    }
    else if(computerChoice===p&&userChoice===r){
        result = 'You Lost!'
    }
    else if(computerChoice===p&&userChoice===s){
        result = 'You Win!'
    } 
    else if(computerChoice===s&&userChoice===r){
        result = 'You Win!'
    }
    else if(computerChoice===s&&userChoice===p){
        result = 'You Lost!'
    }
    resultDisplay.innerHTML = result
}
