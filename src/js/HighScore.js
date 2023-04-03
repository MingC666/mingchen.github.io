var Player = [];
var player = [
    {name: "John", score: 99},
    {name: "Tom", score: 44},
    {name: "Peter", score: 88},
    {name: "Ming", score: 66}
];



/////////////////// The getPlayerInfo Function should place in the function below, so 
//                          The displayerHighSocre() function receive the Player Data 
function displayHighScore() {
    getPlayerInfo(player);
    // Sort the Score~~~~~~~~~~~~~~~~~~~~~~~~
    Player.sort(function (a, b) {
        return a.score - b.score
    });

    // Write Data In string
    var nameStr = "";
    var scoreStr = "";
    var dotStr ="";
    for (var i = 0; i < Player.length; i++) {
        nameStr += "<i class='fa fa-car'></i>   "+ Player[i].name + "<br>";
        dotStr += "-----------------------<br>";
        scoreStr +="" +Player[i].score + "<br>";
    }
    
    document.getElementById("nameDemo").innerHTML = nameStr;
    document.getElementById("dotDemo").innerHTML = dotStr;
    document.getElementById("scoreDemo").innerHTML = scoreStr;
}

//////////////////////// Button Test/////////////////////////////////////


function getPlayerInfo(receiver) {
    for (var i = 0; i < receiver.length; i++) {
        var obj = {name: "", score: 0};
        obj.name = receiver[i].name;
        obj.score = receiver[i].score;
        Player[i] = obj;
    }
}
;