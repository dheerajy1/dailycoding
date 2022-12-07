const computerChoiceDisplay =  document.getElementById('computer-choice')
const userChoiceDisplay =  document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userchoice
possibleChoices.forEach(x => x.addEventListener('click',(e)=>{
    userchoice = e.target.id
    userChoiceDisplay.innerHTML = userchoice
}))