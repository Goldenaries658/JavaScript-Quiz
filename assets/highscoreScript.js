// A template for generating highscore cards
var currentPlayerId;
var currentScoreId;

// Generating the highscore cards on page load
$(function () {
  for (i = 0; i < localStorage.length; i++) {
    var currentPlayerName = localStorage.key(i);
    var currentScore = localStorage.getItem(currentPlayerName);
    currentPlayerId = 'playerName' + i;
    currentScoreId = 'highscore' + i;
    var cardTemplate = `<div class=\"card border-secondary mb-3\" style=\"max-width: 20rem;\"><div id=\"${currentPlayerId}\" class=\"card-header\"></div><div class=\"card-body\"><h4 id=\"${currentScoreId}\" class=\"card-title\"></h4></div></div>`;
    $('.jumbotron').append(cardTemplate);
    $('#' + currentPlayerId).text(currentPlayerName);
    $('#' + currentScoreId).text(currentScore);
  }
});
