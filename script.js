// Object with questions and answers stored
var q0 = {
  question:
    'Which of the following is the correct syntax to print a page using JavaScript?',
  true: 'window.print()',
  false: ['browser.print()', 'navigator.print();', 'document.print()'],
};
var q1 = {
  question:
    'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
  true: 'push()',
  false: ['last()', 'put()', 'None of the above.'],
};
var q2 = {
  question:
    "Which of the following function of Number object returns the number's value?",
  true: 'valueOf()',
  false: ['toString()', 'toLocaleString()', 'toPrecision()'],
};
var q3 = {
  question:
    'Which of the following function of String object returns the characters in a string between two indexes into the string?',
  true: 'substring',
  false: ['slice()', 'split()', 'substr()'],
};
var q4 = {
  question:
    'Which of the following function of String object returns the primitive value of the specified object.',
  true: 'valueOf()',
  false: ['toLocaleUpperCase()', 'toUpperCase()', 'toString()'],
};
var q5 = {
  question:
    "Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?",
  true: 'fontcolor()',
  false: ['fixed()', 'blink()', 'bold()'],
};
var q6 = {
  question:
    'Which of the following function of Array object calls a function for each element in the array?',
  true: 'forEach()',
  false: ['concat()', 'every()', ' filter()'],
};
var q7 = {
  question:
    'Which of the following function of Array object calls a function for each element in the array?',
  true: 'sort()',
  false: ['toSource()', 'toString()', 'unshift()'],
};

var questionCaller = [q0, q1, q2, q3, q4, q5, q6, q7];
var questionCounter = '';

// This generates a question and randomly places the correct answer
function questionGenerator() {
  // Dynamic selectors
  var currentQuestion = questionCaller[questionCounter].question;
  var currentTrueAnswer = questionCaller[questionCounter].true;
  var currentFalseAnswer = questionCaller[questionCounter].false;
  $('#question').text(currentQuestion);

  // Randomising answers
  function rand() {
    x = Math.floor(Math.random() * 10);
    return x;
  }
  randomiser = rand();

  if (randomiser < 2.5) {
    $('#answer0').text(currentTrueAnswer);
    $('#answer1').text(currentFalseAnswer[0]);
    $('#answer2').text(currentFalseAnswer[1]);
    $('#answer3').text(currentFalseAnswer[2]);
    correctButton = 'answer0';
  } else if (randomiser >= 2.5 && randomiser < 5) {
    $('#answer0').text(currentFalseAnswer[0]);
    $('#answer1').text(currentTrueAnswer);
    $('#answer2').text(currentFalseAnswer[1]);
    $('#answer3').text(currentFalseAnswer[2]);
    correctButton = 'answer1';
  } else if (randomiser >= 5 && randomiser < 7.5) {
    $('#answer0').text(currentFalseAnswer[0]);
    $('#answer1').text(currentFalseAnswer[1]);
    $('#answer2').text(currentTrueAnswer);
    $('#answer3').text(currentFalseAnswer[2]);
    correctButton = 'answer2';
  } else {
    $('#answer0').text(currentFalseAnswer[0]);
    $('#answer1').text(currentFalseAnswer[1]);
    $('#answer2').text(currentFalseAnswer[2]);
    $('#answer3').text(currentTrueAnswer);
    correctButton = 'answer3';
  }
}

// Evaluating current answer and scoring.
// Declaring global variables.
var score = 0;
var correctButton;
var choice;
var isCorrect;
var currentPlayerAnswer;

// Storing answer selection
$('.answer').on('click', function (event) {
  clickedButton = event.target;
  currentPlayerAnswer = $(clickedButton).text();
  choice = $(clickedButton).attr('id');
  isCorrect = correctButton == choice ? true : false;
});

// Reward/punishment for correct/incorrect answer respectively
function updateScore() {
  isCorrect ? score++ : (secondsRemaining -= 10);
}

// Generating results page
function writeResult() {
  // Dynamic selectors
  var currentQuestion = questionCaller[questionCounter].question;
  var currentTrueAnswer = questionCaller[questionCounter].true;
  var questionSelector = '#question-' + questionCounter;
  var correctAnswerSelector = '#correct-answer-' + questionCounter;
  var playerAnswerSelector = '#player-answer-' + questionCounter;

  // Writing current data to results page
  $(questionSelector).text(currentQuestion);
  $(correctAnswerSelector).text(currentTrueAnswer);
  $(playerAnswerSelector).text(currentPlayerAnswer);

  var currentRow = $(questionSelector).parent();
  if (currentTrueAnswer == currentPlayerAnswer){
    $(currentRow).attr('class', 'table-success')
} else {
    $(currentRow).attr('class', 'table-danger')
  }
  
}

// Creating the timer
// Setting initial variables.
var secondsRemaining = 600;
var timer;
function timeFormatted() {
  var minutesDisp = Math.floor(secondsRemaining / 60);
  var secondsDisp = Math.floor(secondsRemaining % 60);

  // Formatting the seconds to always have two digits.
  if (secondsDisp < 10) {
    secondsDisp = '0' + secondsDisp;
  }

  // Producing the final string to print
  var timeDisp = 'Time Remaining: ' + minutesDisp + ':' + secondsDisp;
  return timeDisp;
}
// This function starts and runs the timer
function startTimer() {
  secondsRemaining = 600;
  timer = setInterval(function () {
    secondsRemaining--;
    $('#timer').text(timeFormatted());

    if (secondsRemaining <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

$(function () {
  // Starting the quiz
  $('#start-button').on('click', function () {
    $('#ready-dialogue').css('display', 'none');
    $('#quiz-dialogue').css('display', 'inherit');
    $('#question-number').text('Question 1');
    $('#question-count').text('Question: 1/20');
    startTimer();
    $('.progress-display').show(500);
    questionCounter = 0;
    questionGenerator();
  });

  // Progressing through the quiz
  $('#next-button').on('click', function () {
    writeResult();
    updateScore();
    questionCounter++;
    var questionNumber = questionCounter + 1;
    $('#question-number').text('Question ' + questionNumber);
    $('#question-count').text('Question: ' + questionNumber + '/20');
    $('.answer').hide(250);
    questionGenerator();
    $('.answer').show(250);
  });
});
