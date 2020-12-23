//Got help from the following Youtube Link https://www.youtube.com/watch?v=riDzcEQbX6k */
//Begin Game
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-Container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// Starts game when Start Button is pressed
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button =document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}
//Resets answers
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}



function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}    

function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


//List of Questions
var questions = [
    {
        question: 'Which best describes and Array?',
        answers: [
            {text: 'List', correct: true},
            {text: 'Function', correct: false},
            {text: 'Light', correct: false},
            {text: 'Toothbrush', correct: false}
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: "javascript", correct: false },
            { text: "script", correct: true },
            { text: "js", correct: false },
            {text: 'Toothbrush', correct: false}
        ]
    },
    {
        question: 'Is Javascript fun?',
        answers: [
            {text: 'NO', correct: false},
            {text: 'Kind of', correct: false},
            {text: 'YES', correct: true},
            {text: 'Toothbrush', correct: false}
        ]
    },
    {
        question: 'Will this Function work? function startGame() {{ ',
        answers: [
            {text: 'False', correct: true},
            {text: 'True', correct: false},
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
    answers: [
            { text: "javascript", correct: false },
            { text: "script", correct: true },
            { text: "js", correct: false },
            { text: "ToothBrush", correct: false }
        ]
    },
    {
        question: "How do you write an IF statement in JavaScript?",
    answers: [
            { text: "if (i === 5)", correct: true },
            { text: "if i = 5 then", correct: false },
            { text: "if i === 5 then", correct: false },
            { text: "if (i = 5)", correct: false }
        ]
    },
    {
        question: 'Where should you insert a JavaScript?',
        answers: [
            {text: 'Top of Body', correct: false},
            {text: 'Bottom of Body', correct: true},
            {text: 'Head', correct: false},
            {text: 'Toothbrush', correct: false}
        ]
    },
    {
        question: "!= means what in javascript?",
    answers: [
            { text: "Or", correct: false },
            { text: "And", correct: false },
            { text: "Toothbrush", correct: false },
            { text: "Not Equal To", correct: true }
                ]
    },
    {
        question: "How do you write an IF statement in JavaScript?",
    answers: [
            { text: "if (i === 5)", correct: true },
            { text: "if i = 5 then", correct: false },
            { text: "if i === 5 then", correct: false },
            { text: "Toothbrush", correct: false }
        ]
    },
    {
        question: "The external JavaScript file must contain the script tag.",
    answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    }
]
