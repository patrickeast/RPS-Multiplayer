// .gameContainer
// #gameDescription
// #player1Container
// #player2Container

$(document).ready(function() {
    var player1Image = $("<img>");
    player1Image.attr("src", "assets/images/player1.png");
    player1Image.attr("alt", "Player 1");
    
    var player2Image = $("<img>");
    player2Image.attr("src", "assets/images/player2.png");
    player2Image.attr("alt", "Player 2");

    $("#gameDescription").text("Choose your player.");
    $("#player1Container").html(player1Image);
    $("#player2Container").html(player2Image);
}) 

