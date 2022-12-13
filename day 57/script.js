const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScorespan = document.querySelector('[data-computer-score]')
const yourScorespan = document.querySelector('[data-your-score]')

const SELECTION = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissor'
    },
    {
        name: 'paper',
        emoji: '🖐',
        beats: 'rock'
    },
    {
        name: 'scissor',
        emoji: '✌️',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', (e) => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTION.find(selection => selection.name === selectionName)
        scoreCheck()
        makeSelection(selection)

    })
});

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    addselectionResult(computerSelection, computerWinner, computerScorespan)
    addselectionResult(selection, yourWinner, yourScorespan)
    /*
    incrementScore(yourScorespan)
    incrementScore(computerScorespan)*/
}



function addselectionResult(selection, winner, scoreSpan) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) {
        div.classList.add('winner')
        incrementScore(scoreSpan)
    }
    finalColumn.after(div)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name

}
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTION.length)
    return SELECTION[randomIndex]
}

function scoreCheck() {
    if (yourScorespan.innerText >= 5 || computerScorespan.innerText >= 5) {
        console.log(yourScorespan.innerText, computerScorespan.innerText)

        if (yourScorespan.innerText > computerScorespan.innerText) {
            alert(`Yay! You Won`)
            window.location.reload()
        }
        else {
            alert(`Sorry, You lost`)
            window.location.reload()
        }
    }
}

