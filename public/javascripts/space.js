//board
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns; // 32 * 16
let boardHeight = tileSize * rows; // 32 * 16
let context;

//ship 
let shipWidth = tileSize * 2;
let shipHeight = tileSize;
let shipX = tileSize * columns / 2 - tileSize;
let shipY = tileSize * rows - tileSize;

let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}

let shipImg;
let shipVelocityX = tileSize; // velocidade de movimento de speed

//aliens
let alienArray = [];
let alienWidth = tileSize*2;
let alienHeight = tileSize;
let alienX = tileSize;
let alienY = tileSize;
let alienImg;

let alienRows = 2;

window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d"); // desenhar o quadro

    //quadro inicial ship
    // context.fillStyle = "green";
    // context.fillRect(ship.x, ship.y, ship.width, ship.height);

    // carregar imagens
    shipImg = new Image();
    shipImg.src = "./images/ship.png";
    shipImg.onload  = function() {
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }
    requestAnimationFrame(update);
    document.addEventListener("keydown", moveShip);
}

function update() {
    requestAnimationFrame(update);

    context.clearRect(0, 0, board.width, board.height);
   
    //Ship 
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
}

function moveShip(e) {
    if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0) {
        ship.x -= shipVelocityX; // movimento para esquerda na tela
    }
    else if (e.code == "ArrowRight" && ship.x + shipVelocityX + ship.width <= board.width) {
        ship.x += shipVelocityX; // moviemnto para direita na tela
    }
}