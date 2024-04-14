$(() => {
    var gameInfo;
    var context;
    var WIDTH;      // game width
    var HEIGHT;     // game height
    var UNIT;       // game square

    var snakeLength;
    var snakeX;
    var snakeY;
    var speedX;
    var speedY;
    var isEat;
    var level;
    var score;
    var fruitX;
    var fruitY;
    var gameInterval
    var gameOver


    $('#game1Btn').on('click', () => {
        snakeGameInit();
    })


    // window.addEventListener("load", snakeGameInit, true);
    // window.onkeydown = keydown;


    // initialize CANVAS & GAME
    function snakeGameInit() {
        console.log("You are on the snake game");
        // context = document.getElementById("canvas").getContext("2d");
        context = $('#canvas')[0].getContext("2d");
        gameInfo = $('#gameInfo');

        // Variables Initialization
        WIDTH = $('#canvas').width();
        HEIGHT = $('#canvas').height();
        UNIT = 10;    // 1 UNIT of nake is 10px
        level = 0;
        score = 0;
        gameOver = true;
        isEat = true;

        drawGame();

        $('#canvas').css('background-color', 'white');
        window.addEventListener("keydown", keydown);
        console.log(gameOver);
        displaygameInfo();
    }

    function start() {
        console.log("Start the snake game.")
        level = 1;
        score = 0;

        // initial snake
        snakeX = [250 + UNIT, 250, 250 - UNIT];  // snake-head, ...... snake-tail
        snakeY = [250, 250, 250];            // snake Y-axis
        snakeLength = 3;
        // speed of snake
        speedX = [1, 1, 1];
        speedY = [0, 0, 0];

        gameInterval = setTimeout(gameProcess, 1000 / 6);
    }

    // Game process
    function gameProcess() {
        gameInterval = setTimeout(gameProcess, 1000 / (6 * level));
        clear();

        // redraw the game
        drawGame();
        drawFruit();
        moveSnake();
        checkCollision();
        drawSnake();
    }

    // clear the canvas
    function clear() {
        context.clearRect(0, 0, WIDTH, HEIGHT);
    }

    // draw the game
    function drawGame() {
        context.fillStyle = "#FFF";
        context.fillRect(0, 0, WIDTH, HEIGHT);
        context.fill();
        context.strokeStyle = "#666";
        context.strokeRect(0, 0, WIDTH, HEIGHT);
    }

    // move snake
    function moveSnake() {
        for (let i = 0; i < snakeLength; ++i) {
            snakeX[i] += (speedX[i] * UNIT);
            snakeY[i] += (speedY[i] * UNIT);
        }

        for (let i = snakeLength - 1; i > 0; i--) {
            speedX[i] = speedX[i - 1];
            speedY[i] = speedY[i - 1];
        }

        IsFruitEaten();
    }

    // checking snake found the fruit
    function IsFruitEaten() {
        if (snakeX[0] == fruitX && snakeY[0] == fruitY) {
            isEat = true;

            var newTailX = snakeX[snakeLength - 1] - speedX[snakeLength - 1] * UNIT;
            var newTailY = snakeY[snakeLength - 1] - speedY[snakeLength - 1] * UNIT;

            // add it to snake array
            snakeX.push(newTailX);
            snakeY.push(newTailY);

            speedX.push(speedX[snakeLength - 1]);
            speedY.push(speedY[snakeLength - 1]);
            snakeLength++;

            score += 10;

            if (score % 50 == 0) {
                level++;
            }

            // Update Score Info
            displaygameInfo(level, score);
        }
    }

    function drawSnake() {
        for (let i = 0; i < snakeLength; ++i) {
            // console.log("draw " + snakeX[i] + " | " + snakeY[i]);
            drawPoint(snakeX[i], snakeY[i]);
        }
    }

    function drawFruit() {
        if (isEat) {
            fruitX = Math.floor(WIDTH * Math.random() / UNIT) * UNIT;
            fruitY = Math.floor(HEIGHT * Math.random() / UNIT) * UNIT;
            if (fruitCollision(fruitX, fruitY)) {
                drawFruit();
            }
            else {
                isEat = false;
            }
        }
        console.log("draw fruit at [" + fruitX + " | " + fruitY + "]");
        drawPoint(fruitX, fruitY);
    }

    function fruitCollision(x, y) {
        for (let i = 4; i < snakeLength; ++i) {
            if (x == snakeX[i] && y == snakeY[i]) {
                return true;
            }
        }
        return false;
    }

    function selfCollision(x, y) {
        for (let i = 3; i < snakeLength; ++i) {
            if (x == snakeX[i] && y == snakeY[i]) {
                return true;
            }
        }
        return false;
    }

    function checkCollision() {
        if (snakeX[0] >= WIDTH || snakeX[0] < 0 || snakeY[0] >= HEIGHT || snakeY[0] < 0) {
            gameOver = true;
            clearTimeout(gameInterval);
        }
        else if (snakeLength > 4) {
            if (selfCollision(snakeX[0], snakeY[0])) {
                gameOver = true;
                clearTimeout(gameInterval);
            }
        }
        displaygameInfo();
    }

    function drawPoint(x, y) {
        context.fillStyle = "black";
        context.fillRect(x, y, UNIT, UNIT);
        context.fill();
        context.strokeStyle = "white";
        context.strokeRect(x, y, UNIT, UNIT);
    }

    function keydown(e) {
        // prevent arrow key moveing pages
        var arrowkeys = [37, 38, 39, 40];
        if (arrowkeys.indexOf(e.keyCode) > -1) {
            event.preventDefault();
        }

        // left
        if ((e.keyCode == 65 || e.keyCode === 37) && speedX[0] != 1) {
            console.log("GO LEFT")
            speedX[0] = -1;
            speedY[0] = 0;
        }
        // up
        else if ((e.keyCode == 87 || e.keyCode === 38) && speedY[0] != 1) {
            console.log("GO UP")
            speedY[0] = -1;
            speedX[0] = 0;
        }
        // right
        else if ((e.keyCode == 68 || e.keyCode == 39) && speedX[0] != -1) {
            console.log("GO RIGHT")
            speedX[0] = 1;
            speedY[0] = 0;
        }
        // down
        else if ((e.keyCode == 83 || e.keyCode == 40) && speedY[0] != -1) {
            console.log("GO DOWN")
            speedY[0] = 1;
            speedX[0] = 0;
        }

        // Restart game key press
        else if (e.keyCode == 13 && gameOver == true) {
            gameOver = false;
            start();
        }
    }

    function displaygameInfo() {
        if (gameOver) {
            gameInfo.html(`
                        <P>Press <b>ENTER</b> to start, final Score: ${score}</p>
                        <p>Control: <b>WASD</b> / &nbsp <b>&larr; &uarr; &rarr; &darr;</b></p>
                        `);
        }
        else {
            gameInfo.html(`<p>Lv:${level} &nbsp&nbsp&nbsp Score:${score}</p>
            <p>Control:&nbsp<b>WASD</b> / <b>&larr; &uarr; &rarr; &darr;</b></p>
            `);
        }
    }

})