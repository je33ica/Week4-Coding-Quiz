//questions in an array with answer matching
let questions = [
    {
      question: "A loop that never ends is referred to as a(n)_________.",
      choices: ["While loop", "Infinte loop", "Recursive loop", "For loop"],
      answer: "Infinte loop",
    },
    {
      question: "What is hoisting in Javascript?",
      choices: [
        "Best practice for accessing variables before they are declared ",
        "The default behavior of moving all declarations to the top of the current scope",
        "Changing how the code looks using indentation",
        "Minimising code into a smaller size file ",
      ],
      answer:
        "The default behavior of moving all declarations to the top of the current scope",
    },
    {
      question: "When was javascript first created?",
      choices: ["2001", "1990", "1988", "1995"],
      answer: "1995",
    },
  
    {
      question: " Where does a javascript tag go in a html file go?",
      choices: ["<div>", "<script>", "<container>", "<head>"],
      answer: "<script>",
    },
    {
        question: "Which of these is NOT a JavaScript datatype?",
        choices: ["Number", "String", "Boolean", "Float"],
        answer: "Float",
      },
  ];

  var homeScreen = document.getElementById("home");
  var playGameButton = document.getElementById("playGame");
  var answersOptions = document.getElementById("choice-container");
  var questionsContainer = document.getElementById("questions-container");
  var scoreDisplay = document.getElementById("score");
  var initialsInput = document.getElementById("user-input");
  var initials = document.getElementById("initials");
  var highScoresTitle = document.getElementById("high-scores-title");
  var highScoresList = document.querySelector(".high-scores");
  var restartBtn = document.getElementById("restart-quiz-button");
  var saveScore = document.getElementById("submit");
  var scoresList = document.getElementById("scoresList")
  var timer = document.getElementById("timer")

questionsContainer.style.display = "none";
scoreDisplay.style.display = "none";
restartBtn.style.display = "none";

var currentQuestionIndex = 0;
var userScore = 0;
var timeRemaining = 60; 
var countdown; 

playGameButton.onclick = startGame;



var savedHighScores = JSON.parse(localStorage.getItem("highScore")) || [];
//ordered the array before rendering to the
var orderScore =  savedHighScores.sort ((a, b) => (b.score - a.score));

if (orderScore.length > 0){
  orderScore.forEach(function(score){
    var scoreListEntry = document.createElement("li");
    scoreListEntry.textContent = "User: "+ score.initials + ": " + score.score; 
      scoresList.appendChild(scoreListEntry);
  })

}

console.log('the score ', orderScore);
//starts the quiz
function startGame() {
    // adding 'none' to the homeScreen hides it from view- setting "block" is returning the element to its original setting
    homeScreen.style.display = "none";
    highScoresTitle.style.display = "none";
    scoresList .style.display = "none";
  
    questionsContainer.style.display = "block";

    countdown = setInterval(function(){
        timeRemaining--;
        timer.textContent = timeRemaining;
        if(timeRemaining <= 0){
          endQuiz();
        }
      }, 1000)

    showQuestions();
}
  

function showQuestions() {
    //shows questions
    var questionAsked = document.getElementById("question-asked");
    questionAsked.textContent = questions[currentQuestionIndex].question;
    answersOptions.innerHTML = "";
    // creates choices for user
    var choices = questions[currentQuestionIndex].choices;
    choices.forEach(function (choice) {
      var choiceButton = document.createElement("button");
      choiceButton.setAttribute("class", "answerOption");
      choiceButton.setAttribute("value", choice);
      choiceButton.textContent = choice;
      choiceButton.onclick = answerClick;
      answersOptions.appendChild(choiceButton);
    });
  }

  function endQuiz() {
 
    clearInterval(countdown);
    scoreDisplay.style.display = "block";
    homeScreen.style.display = "none";
    questionsContainer.style.display = "none";
    highScoresTitle.style.display = "block";
    
    var orderScore = JSON.parse(localStorage.getItem("highScore")) || {};

    saveScore.onclick = function () {
      var initalsValue = initials.value;
      var usersScoreInput = {
        score: userScore,
        initials: initalsValue,
      };
      orderScore.push(usersScoreInput);
     localStorage.setItem("highScore", JSON.stringify(orderScore));
     

   };
  }
  // let orderScore =  savedHighScores.sort(function (a, b) {
  //   return b.score - a.score;
  // });

  

  function answerClick() {
    if (this.value === questions[currentQuestionIndex].answer) {
      userScore++;
    } else {
      timeRemaining -= 10;
      timer.textContent = timeRemaining; 
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      showQuestions();
    }
  }