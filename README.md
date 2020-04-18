# JavaScript Fundamentals Quiz

## Summary
The aim of this project was to creat a functional quiz on JavaScript almost purely using jQuery. It features a static set of multiple choice questions and dynamically placed multipe choice answers which are presented one by one as the user progresses. The quiz also has a actively updated score display and timer; a dynamically generated results page plus the ability to save highscores against your name.

## Main Features
1. [Start dialogue](#start-dialogue)
2. [Timer](#timer)
3. [Score](#score)
4. [Question Dialogues](#question-dialogues)
5. [Timeout Screen](#timeout-screen)
6. [Results Dialogue](#results-dialogue)
7. [Highscores](#highscores)

## Demo
https://goldenaries658.github.io/JavaScript-Quiz/

## Start Dialogue
This is a simple dialogue that outlines the quiz rules and hold the start button. the start button triggers the [time](#timer) and [score](#score) to display.

## Timer
This is a basic timer that starts as part of the start button's event listener. It holds the seconds remaining as a variable then formats that into a readable mins:secs format. If the timer reaches zero it triggers the [timeout screen](#timeout-screen).

## Score
This display appears with the [timer](#timer), it shows the current user score and updates each time the user progresses through the [question dialogues](#question-dialogues).

## Question Dialogues
These are 10 predetermined questions that are updated as the user progresses through the quiz, each time the user clicks next multiple things happen:
* The score/timer is updated. If the answer is incorrect the user loses 15 seconds from their time. 
* The text content is replaced with the new question and the answers are shuffled so that the correct answer isn't always in the same place.
* The user's answer is printed to the table in [results dialogue](#results-dialogue)

## Timeout Screen
This is a red "Time's Up!" dialogue that pops up briefly if the [timer](#timer) reaches zero. It then progresses on to the [results table](#results-dialogue) after a 1sec delay.

## Results Dialogue
This simply shows whether the user has passed or failed alongsid etheir score. 

It then features a table with the breakdown of the questions answered and their correct answers, highlighting anything correct in green and incorrect in red.

At the bottom of this dialogue is  form for saving the score against your name in highscores. This saves to local storage then opens the [highscores](#highscores)

## Highscores
On opening this generates up cards with player name and score from local storage and prints them to the page. At the moment it isn't in any particular order, but later on I will look into changing this so that it only holds top 5 scores.
