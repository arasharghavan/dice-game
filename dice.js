

$(document).ready(function () {


    "use strict";


    var scores, roundScore, activePlayer, gamePlaying;

    $(".btn-new").click(function () {
        init();
    });


    init();

    function init() {
        scores = [0, 0];
        activePlayer = 0;
        roundScore = 0;
        gamePlaying = true;


        $(".dice").css("display","none");
        $(".pig").removeClass("visible");
        $(".pig1").addClass("visible");

        $("#score-0").text('0');

        $("#score-1").text('0');

        $("#current-0").text('0');

        $("#current-1").text('0');


        $("#name-0").text(prompt("Player 1:"));

        $("#name-1").text(prompt("Player 2:"));

        $(".player-0-panel").removeClass("winner").addClass("active");

        $(".player-1-panel").removeClass("winner").removeClass("active");

    }

    $(".btn-roll").click(function () {

        if(gamePlaying){
            // 1. Random number
            var dice = Math.floor(Math.random() * 6) + 1;
            //2. Display the result
            $(".dice").css("display","block").attr("src","img/dice-" + dice + ".png");

            //3. Update the round score IF the rolled number was NOT a 1
            if (dice !== 1){
                //Add score
                roundScore = roundScore + dice;
                $("#current-" + activePlayer).text(roundScore);
            } else{
                //Next player
                alert("next player");
                nextPlayer();

            }
        }
    });


    $(".btn-hold").click(function () {

        if (gamePlaying){
            // Add CURRENT score to GLOBAL score
            scores[activePlayer] = scores[activePlayer] + roundScore;

            // Update
            $("#score-" + activePlayer).text(scores[activePlayer]);

            // Check if player won the game
            if (scores[activePlayer] >= 30){
                $("#name-" + activePlayer).text("Winner!");
                $(".dice").css("display","none");
                $(".player-" + activePlayer + "-panel").removeClass("active").addClass("winner");
                gamePlaying = false;
            } else {
                //Next player
                nextPlayer();
            }
        }
    });


    function nextPlayer() {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        $("#current-0").text("0");
        $("#current-1").text("0");

        $(".player-0-panel").toggleClass("active");
        $(".player-1-panel").toggleClass("active");
        $(".pig").toggleClass("visible");

        $(".dice").css("display","none");
    }

});
