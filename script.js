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

$(function () {
  $('#start-button').on('click', function () {
    $('#ready-dialogue').css('display', 'none');
    $('#quiz-dialogue').css('display', 'inherit');
        questionCounter = 0;
        var currentQuestion = questionCaller[questionCounter].question;
        var currentTrueAnswer = questionCaller[questionCounter].true;
        var currentfalseAnswer = questionCaller[questionCounter].false;

        $('#question').text(currentQuestion);

  });
});
