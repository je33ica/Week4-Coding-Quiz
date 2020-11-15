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