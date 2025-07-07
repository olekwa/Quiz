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

const quizQuestionsFour = [
  {
    question: "Which famous artist cut off his own ear?",
    answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: true },
      { text: "Salvador Dalí", correct: false },
      { text: "Claude Monet", correct: false }
    ]
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false }
    ]
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "What is the capital of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Montreal", correct: false },
      { text: "Ottawa", correct: true }
    ]
  },
  {
    question: "Which language has the most native speakers?",
    answers: [
      { text: "English", correct: false },
      { text: "Spanish", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Hindi", correct: false }
    ]
  }
];

const quizQuestionsFive = [
  {
    question: "Who invented the telephone?",
    answers: [
      { text: "Thomas Edison", correct: false },
      { text: "Alexander Graham Bell", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Guglielmo Marconi", correct: false }
    ]
  },
  {
    question: "What is the largest internal organ in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Brain", correct: false },
      { text: "Liver", correct: true },
      { text: "Lungs", correct: false }
    ]
  },
  {
    question: "Which country gifted the Statue of Liberty to the US?",
    answers: [
      { text: "Spain", correct: false },
      { text: "England", correct: false },
      { text: "France", correct: true },
      { text: "Italy", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for silver?",
    answers: [
      { text: "Si", correct: false },
      { text: "Ag", correct: true },
      { text: "Sv", correct: false },
      { text: "Au", correct: false }
    ]
  },
  {
    question: "Which ancient wonder was located in Babylon?",
    answers: [
      { text: "Great Pyramid", correct: false },
      { text: "Colossus of Rhodes", correct: false },
      { text: "Lighthouse of Alexandria", correct: false },
      { text: "Hanging Gardens", correct: true },
    ]
  }
];

const quizQuestionsSix = [
  {
    question: "What is the main component of the Sun?",
    answers: [
      { text: "Liquid lava", correct: false },
      { text: "Hydrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon dioxide", correct: false }
    ]
  },
  {
    question: "Which bone is the longest in the human body?",
    answers: [
      { text: "Spine", correct: false },
      { text: "Femur", correct: true },
      { text: "Humerus", correct: false },
      { text: "Tibia", correct: false }
    ]
  },
  {
    question: "In which country would you find the Great Barrier Reef?",
    answers: [
      { text: "Brazil", correct: false },
      { text: "Indonesia", correct: false },
      { text: "Australia", correct: true },
      { text: "Philippines", correct: false }
    ]
  },
  {
    question: "How many continents are there?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false }
    ]
  },
  {
    question: "What is the capital of South Africa?",
    answers: [
      { text: "Johannesburg", correct: false },
      { text: "Cape Town", correct: true },
      { text: "Pretoria", correct: false },
      { text: "Durban", correct: false }
    ]
  }
];

const quizQuestionsSeven = [
  {
    question: "Which country invented tea?",
    answers: [
      { text: "India", correct: false },
      { text: "England", correct: false },
      { text: "China", correct: true },
      { text: "Japan", correct: false }
    ]
  },
  {
    question: "How many hearts does an octopus have?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false }
    ]
  },
  {
    question: "What is the world's fastest land animal?",
    answers: [
      { text: "Peregrine falcon", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Pronghorn antelope", correct: false },
      { text: "Sailfish", correct: false }
    ]
  },
  {
    question: "Which planet spins backwards?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Uranus", correct: false }
    ]
  },
  {
    question: "What is the capital of Iceland?",
    answers: [
      { text: "Oslo", correct: false },
      { text: "Stockholm", correct: false },
      { text: "Reykjavik", correct: true },
      { text: "Helsinki", correct: false }
    ]
  }
];

const quizQuestionsEight = [
  {
    question: "Which fruit has seeds on the outside?",
    answers: [
      { text: "Pineapple", correct: false },
      { text: "Strawberry", correct: true },
      { text: "Kiwi", correct: false },
      { text: "Raspberry", correct: false }
    ]
  },
  {
    question: "How many time zones does Russia have?",
    answers: [
      { text: "5", correct: false },
      { text: "7", correct: false },
      { text: "11", correct: true },
      { text: "15", correct: false }
    ]
  },
  {
    question: "What is the only mammal capable of true flight?",
    answers: [
      { text: "Flying squirrel", correct: false },
      { text: "Bat", correct: true },
      { text: "Sugar glider", correct: false },
      { text: "Colugo", correct: false }
    ]
  },
  {
    question: "Which blood type is the universal donor?",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "AB", correct: false },
      { text: "O", correct: true }
    ]
  },
  {
    question: "What is the largest species of shark?",
    answers: [
      { text: "Great white", correct: false },
      { text: "Whale shark", correct: true },
      { text: "Tiger shark", correct: false },
      { text: "Megalodon", correct: false }
    ]
  }
];

const quizQuestionsNine = [
  {
    question: "Which country has the most islands?",
    answers: [
      { text: "Indonesia", correct: false },
      { text: "Philippines", correct: false },
      { text: "Sweden", correct: true },
      { text: "Canada", correct: false }
    ]
  },
  {
    question: "What is the only continent without deserts?",
    answers: [
      { text: "Australia", correct: false },
      { text: "Antarctica", correct: false },
      { text: "Europe", correct: true },
      { text: "South America", correct: false }
    ]
  },
  {
    question: "Which planet has the shortest day?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "What is the world's longest river?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false }
    ]
  },
  {
    question: "Which language has the most words?",
    answers: [
      { text: "English", correct: true },
      { text: "Arabic", correct: false },
      { text: "Chinese", correct: false },
      { text: "Russian", correct: false }
    ]
  }
];

const quizQuestionsTen = [
  {
    question: "What is the smallest country in the world?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "San Marino", correct: false },
      { text: "Liechtenstein", correct: false }
    ]
  },
  {
    question: "Which animal never sleeps?",
    answers: [
      { text: "Bullfrog", correct: true },
      { text: "Dolphin", correct: false },
      { text: "Shark", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "What is the only letter not in any US state name?",
    answers: [
      { text: "X", correct: false },
      { text: "Q", correct: true },
      { text: "Z", correct: false },
      { text: "J", correct: false }
    ]
  },
  {
    question: "Which planet rains diamonds?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: true }
    ]
  },
  {
    question: "What is the most consumed fruit in the world?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Banana", correct: true },
      { text: "Orange", correct: false },
      { text: "Tomato", correct: false }
    ]
  }
];


//all quiz variables
const allQuizSets = [quizQuestionsOne, quizQuestionsTwo, quizQuestionsThree, quizQuestionsFour, quizQuestionsFive, quizQuestionsSix, quizQuestionsSeven,quizQuestionsEight, quizQuestionsNine, quizQuestionsTen];

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

let usedQuestions = {
  quizOne: Array(quizQuestionsOne.length).fill(false),
  quizTwo: Array(quizQuestionsTwo.length).fill(false),
  quizThree: Array(quizQuestionsThree.length).fill(false),
  quizFour: Array(quizQuestionsFour.length).fill(false),
  quizFive: Array(quizQuestionsFive.length).fill(false),
  quizSix: Array(quizQuestionsSix.length).fill(false),
  quizSeven: Array(quizQuestionsSeven.length).fill(false),
  quizEight: Array(quizQuestionsEight.length).fill(false),
  quizNine: Array(quizQuestionsNine.length).fill(false),
  quizTen: Array(quizQuestionsTen.length).fill(false)
};

let exhaustedQuizzes = [];

function getRadomUnusedQuestions(){
  const availableQuizzes = allQuizSets.filter((_, index) => !exhaustedQuizzes.includes(index));

  if(availableQuizzes.length === 0){
    resetQuestionTracking();
    return getRadomUnusedQuestions();
  }

  const quizIndex = Math.floor(Math.random() * availableQuizzes.length);

  const selectedQuiz = availableQuizzes[quizIndex];
  const originalQuizIndex = allQuizSets.indexOf(selectedQuiz);
  const quizKey =`quiz${['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'][originalQuizIndex]}`;

  const unusedIndices = [];
  usedQuestions[quizKey].forEach((used, index) => {
    if (!used) unusedIndices.push(index);
  });

  if (unusedIndices.length === 0){
    exhaustedQuizzes.push(originalQuizIndex);
    return getRadomUnusedQuestions();
  }

  const questionIndex = unusedIndices[Math.floor(Math.random() * unusedIndices.length)];
  usedQuestions[quizKey][questionIndex] = true;

  return {
    question: selectedQuiz[questionIndex],
    quizIndex: originalQuizIndex,
    questionIndex: questionIndex
  };
}

function resetQuestionTracking (){
  exhaustedQuizzes = [];
  Object.keys(usedQuestions).forEach(quizKey => {
    usedQuestions[quizKey] = usedQuestions[quizKey].map(() => false);
  });
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
   resetQuestionTracking();
   

   startScreen.classList.remove('active');
   quizScreen.classList.add('active');

   const {question} = getRadomUnusedQuestions();

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

