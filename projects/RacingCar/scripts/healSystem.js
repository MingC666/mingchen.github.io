var heal = 100;
var heal2 = 100;
var heal3 = 100;
var heal4 = 100;


function Add_heal10() {
    var ele = document.getElementById("player1_bar");
    heal += 10;
    if(heal>=100){
        heal=100;
    }
    ele.style.width = heal + '%';
    ele.innerHTML = heal * 1+'%';
}
function Re_heal10() {
    var ele = document.getElementById("player1_bar");
    heal -= 10;
    isDead();
    ele.style.width = heal + '%';
    ele.innerHTML = heal * 1+'%';
}
function Re_heal20() {
    var ele = document.getElementById("player1_bar");
    heal -= 20;
    isDead();
    ele.style.width = heal + '%';
    ele.innerHTML = heal * 1+'%';
}

function isDead(){
    if (heal <= 0) {
        heal=0;
        document.getElementById("demo1").innerHTML ="You dead";
    }
}

/*
 * Deal Score
 */
var score = 0;
var t;
function startGame() {
    t=setInterval(updateScore, 50);
}
function updateScore(){
    if(heal===0){
        clearInterval(t);
    }
    score++;
    document.getElementById("scoreDemo").innerHTML = "Score: "+ score;
}
;