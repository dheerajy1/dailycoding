const choicesDisplay = document.querySelector('#choices')
const resultDisplay = document.querySelector('#result')


const choices = ['Rock','Paper','Scissor']

const handleclick = (e)=> {
    getResults(e.target.innerHTML,choices[Math.floor(Math.random() * choices.length)])
}
choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click',handleclick)
    choicesDisplay.appendChild(button)
} )

const getResults = (userChoice,computerChoice)=>{
    switch (userChoice + computerChoice) {
        case 'RockPaper':
        case 'PaperScissor':
        case 'ScissorRock':
            resultDisplay.innerHTML = `You chose ${ userChoice};<br>Computer chose ${computerChoice};<br>You Lost!`
            break
        case 'RockScissor':
        case 'PaperRock':
        case 'ScissorPaper':
            resultDisplay.innerHTML = `You chose ${ userChoice};<br>Computer chose ${computerChoice};<br>You Win!`
            break
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorScissor':
            resultDisplay.innerHTML = `You chose ${ userChoice};<br> also the Computer chose ${computerChoice};<br> Its a Draw!`
            break
}

}