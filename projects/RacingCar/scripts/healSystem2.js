// It may using this.heal for all players' heal
var heal1 = 100;
var heal2 = 100;
var heal3 = 100;
var heal4 = 100;

var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
/******************************************/
/*    This just for the reduce heal      */
/****************************************/

var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
//////////////////////////////////////////////////////////
////////////////////////////Test//////////////////////////
function Test1() {
    Player1_reduceHealth();
}
function Test2() {
    Player2_reduceHealth();
}
function Test3() {
    Player3_reduceHealth();
}
function Test4() {
    Player4_reduceHealth();
}
///////////////////////////End Test//////////////////////
////////////////////////////////////////////////////////


//Player1 call this function
function player1() {
    if (flag1) {
        Player1_reduceHealth();
        flag1 = false;
    }
}
// Player2 call this function
function player2() {
    if (flag2) {
        Player2_reduceHealth();
        flag2 = false;
    }
}
// Similarly update for player3 and player4

// Player3 call this function
function player3() {
    if (flag3) {
        Player3_reduceHealth();
        flag3 = false;
    }
}
// Player4 call this function
function player4() {
    if (flag4) {
        Player4_reduceHealth();
        flag4 = false;
    }
}

////////////////////Reduce heal Functions//////////////////////////
function Player1_reduceHealth() {
    var ele1 = document.getElementById("player1_bar");
    heal1 -= 10;
    if (heal1 <= 0) {
        heal1 = 0;
        score1 = score;
        // Code end the player action

        // document.getElementById("demo1").innerHTML = "You dead";
        document.getElementById("demo1").innerHTML = "Dead. SCORE: " + score1;
    }
    ele1.style.width = heal1 + '%';
    ele1.innerHTML = heal1 * 1 + '%';
}

function Player2_reduceHealth() {
    var ele2 = document.getElementById("player2_bar");
    heal2 -= 10;
    if (heal2 <= 0) {
        heal2 = 0;
        // Code end the player action

        score2 = score
        document.getElementById("demo2").innerHTML = "Dead. SCORE: " + score2;
    }
    ele2.style.width = heal2 + '%';
    ele2.innerHTML = heal2 * 1 + '%';
}
function Player3_reduceHealth() {
    var ele3 = document.getElementById("player3_bar");
    heal3 -= 10;
    if (heal3 <= 0) {
        heal3 = 0;
        // Code end the player action

        score3 = score
        document.getElementById("demo3").innerHTML = "Dead. SCORE: " + score3;
    }
    ele3.style.width = heal3 + '%';
    ele3.innerHTML = heal3 * 1 + '%';
}
function Player4_reduceHealth() {
    var ele4 = document.getElementById("player4_bar");
    heal4 -= 10;
    if (heal4 <= 0) {
        heal4 = 0;
        // Code end the player action

        score4 = score
        document.getElementById("demo4").innerHTML = "Dead. SCORE: " + score4;
    }
    ele4.style.width = heal4 + '%';
    ele4.innerHTML = heal4 * 1 + '%';
}

//////////////////////////Score ////////////////////
var score = 0;
var t;
function startGame() {
    t = setInterval(updateScore, 50);
}
function updateScore() {
    if (heal1 === 0 && heal2 === 0 && heal3 === 0 && heal4 === 0) {
        clearInterval(t);
    }
    score++;
    document.getElementById("scoreDemo").innerHTML = "Score: " + score;
}
;