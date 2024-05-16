const readline = require('readline');

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


    const playGame = () => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const playerOptions = ['rock', 'paper', 'scissors'];
        const computerOptions = ['rock', 'paper', 'scissors'];

        rl.question('Choose your move (rock, paper, scissors): ', (playerChoice) => {
            rl.close();

            moves++;
            console.log(`Moves Left: ${5 - moves}`);

            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];

            
            winner(playerChoice.toLowerCase(), computerChoice);

        
            if (moves === 5) {
                gameOver();
            }
        });
    };

    const winner = (player, computer) => {
        if (player === computer) {
            console.log('Tie');
        } else if (player === 'rock') {
            if (computer === 'paper') {
                console.log('Computer Won');
                computerScore++;
            } else {
                console.log('Player Won');
                playerScore++;
            }
        } else if (player === 'scissors') {
            if (computer === 'rock') {
                console.log('Computer Won');
                computerScore++;
            } else {
                console.log('Player Won');
                playerScore++;
            }
        } else if (player === 'paper') {
            if (computer === 'scissors') {
                console.log('Computer Won');
                computerScore++;
            } else {
                console.log('Player Won');
                playerScore++;
            }
        }
    };

    const gameOver = () => {
        console.log('Game Over!!');
        if (playerScore > computerScore) {
            console.log('You Won The Game');
        } else if (playerScore < computerScore) {
            console.log('You Lost The Game');
        } else {
            console.log('Tie');
        }
    };

    playGame();
};

game();
