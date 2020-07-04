// A template for generating highscore cards
let currentPlayerId;
let currentScoreId;

// Generating the highscore cards on page load
$(function () {
  for (i = 0; i < localStorage.length; i++) {
    const currentPlayerName = localStorage.key(i);
    const currentScore = localStorage.getItem(currentPlayerName);
    currentPlayerId = 'playerName' + i;
    currentScoreId = 'highscore' + i;
    const cardTemplate = `<div class=\"card border-secondary mb-3\" style=\"max-width: 20rem;\"><div id=\"${currentPlayerId}\" class=\"card-header\"></div><div class=\"card-body\"><h4 id=\"${currentScoreId}\" class=\"card-title\"></h4></div></div>`;
    $('.jumbotron').append(cardTemplate);
    $('#' + currentPlayerId).text(currentPlayerName);
    $('#' + currentScoreId).text(currentScore);
  }
});
