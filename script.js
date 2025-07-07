// dom elements

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


const quizQuestionsOne = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

const quizQuestionsTwo = [
  {
  question: "What is the largest mammal in the world?",
  answers: [
    { text: "Elephant", correct: false },
    { text: "Blue Whale", correct: true },
    { text: "Giraffe", correct: false },
    { text: "Polar Bear", correct: false },
  ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "Which country is home to the kangaroo?",
    answers: [
      { text: "Brazil", correct: false },
      { text: "South Africa", correct: false },
      { text: "Australia", correct: true },
      { text: "New Zealand", correct: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "K2", correct: false },
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Denali", correct: false },
    ],
  },
  {
    question: "Which language is the most widely spoken in the world?",
    answers: [
      { text: "English", correct: false },
      { text: "Spanish", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Hindi", correct: false },
    ],
  },
];

const quizQuestionsThree = [
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the main gas found in Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which year did World War II end?",
    answers: [
      { text: "1943", correct: false },
      { text: "1945", correct: true },
      { text: "1947", correct: false },
      { text: "1950", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which element has the atomic number 1?",
    answers: [
      { text: "Helium", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Magnesium", correct: false },
      { text: "Hydrogen", correct: true },
    ],
  },
];


//all quiz variables
const allQuizSets = [quizQuestionsOne, quizQuestionsTwo, quizQuestionsThree];

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let answerDisable = false;

//initialise quiz
function initQuize(){
  currentQuiz = getRandomQuiz();

  let currentQuestionIndex = 0;
  let score = 0;
  let answerDisable = false;

  scoreSpan.textContent = score
  totalQuestionsSpan.textContent = currentQuiz.length;
  maxScoreSpan.textContent = currentQuiz.length;

}

//get quiz at random
function getRandomQuiz() {
  const randomIndex = Math.floor(Math.random() * allQuizSets.length);
  return allQuizSets[randomIndex];
}



//add event listeners

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz(){
   //reset vars
   currentQuestionIndex = 0;
   score = 0;
   scoreSpan.textContent = 0;

   initQuize();

   startScreen.classList.remove('active');
   quizScreen.classList.add('active');

   showQuestion();
}


function showQuestion (){
  //reset states
  answerDisable = false;
  answersContainer.innerHTML = "";

  const currentQuestion = currentQuiz[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1

  const progressPercent = (currentQuestionIndex / currentQuiz.length) * 100;
  progressBar.style.width = progressPercent + "%";
  questionText.textContent = currentQuestion.question
  


  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('answer-btn');

    button.dataset.correct = answer.correct;

    button.addEventListener('click', selectionAnswer);

    answersContainer.appendChild(button);
  });
}

function selectionAnswer(event) {
  if(answerDisable) return;

  answerDisable = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === 'true';

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    } else if (button === selectedButton) {
      button.classList.add('incorrect');
    }
    button.disable = true;
  });

  if(isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if(currentQuestionIndex < currentQuiz.length) {
      showQuestion();
    } else{
      showResults()
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');

  finalScoreSpan.textContent = score;

  const percentage = (score/currentQuiz.length) * 100;

  if(percentage === 100){
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz (){
  resultScreen.classList.remove('active')

  startQuiz();
}

