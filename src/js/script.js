const tiles = document.querySelectorAll('.tile');
const startButton = document.getElementById('startButton');
const scoreDisplay = document.getElementById('score');
let activeTileIndex = -1;
let score = 0;
let gameInterval;

function activateRandomTile() {
    if (activeTileIndex !== -1) {
        tiles[activeTileIndex].classList.remove('active');
    }
    activeTileIndex = Math.floor(Math.random() * tiles.length);
    tiles[activeTileIndex].classList.add('active');
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = 'Score: ' + score;
    activateRandomTile();
    tiles.forEach(tile => {
        tile.addEventListener('click', handleTileClick);
    });
    gameInterval = setInterval(() => {
        if (activeTileIndex !== -1) {
            tiles[activeTileIndex].classList.remove('active');
        }
        activateRandomTile();
    }, 500); // Change tile every 0.5 seconds
}

function handleTileClick(event) {
    if (event.target.classList.contains('active')) {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
        activateRandomTile();
    } else {
        alert('Game Over! Your score: ' + score);
        clearInterval(gameInterval);
        tiles.forEach(tile => {
            tile.removeEventListener('click', handleTileClick);
        });
        tiles[activeTileIndex].classList.remove('active');
        activeTileIndex = -1;
    }
}

startButton.addEventListener('click', startGame);