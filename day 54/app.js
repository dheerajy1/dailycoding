const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')

let userChoice, computerChoice

const choices = ['Rock', 'Paper', 'Scissor']

for (let i of choices) {
    const button = document.createElement('button')
    button.id = i
    button.innerHTML = i
    button.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = `UserChoice : ${userChoice}`

        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        computerChoice = randomChoice
        computerChoiceDisplay.innerHTML = `ComputerChoice: ${computerChoice}`
        switch (userChoice + computerChoice) {
            case 'RockPaper':
            case 'PaperScissor':
            case 'ScissorRock':
                resultDisplay.innerHTML = 'You Lost!😂'
                break
            case 'RockScissor':
            case 'PaperRock':
            case 'ScissorPaper':
                resultDisplay.innerHTML = 'You Win!🏆'
                break
            case 'RockRock':
            case 'PaperPaper':
            case 'ScissorScissor':
                resultDisplay.innerHTML = 'Its a Draw!🤥'
                break
        }
    })
    gameGrid.appendChild(button)
}
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

/*const getResult = () => {
  switch (userChoice + computerChoice) {
            case 'RockPaper':
            case 'PaperScissor':
            case 'ScissorRock':
                resultDisplay.innerHTML = 'You Lost!😂'
                break
            case 'RockScissor':
            case 'PaperRock':
            case 'ScissorPaper':
                resultDisplay.innerHTML = 'You Win!🏆'
                break
            case 'RockRock':
            case 'PaperPaper':
            case 'ScissorScissor':
                resultDisplay.innerHTML = 'Its a Draw!🤥'
                break
        }
}
*/