const assert = require('assert');
const TennisGame = require('./tennis')

describe('Tennis', function() {
    it('Player 1: 0, Player 2: 0: Love-All', async function() {
    	let actual = generateOutput(0, 0);
    	assert.equal(actual, 'Love-All');
    });

    
});

function generateOutput(player1Score, player2Score) {
    const player1Name = "player1";
    const player2Name = "player2";
    const tennis = new TennisGame(player1Name, player2Name);
    const increment = (name, count) => {
        for (let i = 0; i < count; i++) {
            tennis.wonPoint(name);
        }
    };
    increment(player1Name, player1Score);
    increment(player2Name, player2Score);
    return tennis.getScore();
}

//Setup
// Player 1: 0, Player 2: 0: Love-All
// Player 1: 1, Player 2: 1: Fifteen-All
// Player 1: 2, Player 2: 2: Thirty-All
// Player 1: 3, Player 2: 3: Deuce
// Player 1: 4, Player 2: 4: Deuce
// Player 1: 1, Player 2: 0: Fifteen-Love
// Player 1: 0, Player 2: 1: Love-Fifteen
// Player 1: 2, Player 2: 0: Thirty-Love
// Player 1: 0, Player 2: 2: Love-Thirty
// Player 1: 3, Player 2: 0: Forty-Love
// Player 1: 0, Player 2: 3: Love-Forty
// Player 1: 4, Player 2: 0: Win for player1
// Player 1: 0, Player 2: 4: Win for player2
// Player 1: 2, Player 2: 1: Thirty-Fifteen
// Player 1: 1, Player 2: 2: Fifteen-Thirty
// Player 1: 3, Player 2: 1: Forty-Fifteen
// Player 1: 1, Player 2: 3: Fifteen-Forty
// Player 1: 4, Player 2: 1: Win for player1
// Player 1: 1, Player 2: 4: Win for player2
// Player 1: 3, Player 2: 2: Forty-Thirty
// Player 1: 2, Player 2: 3: Thirty-Forty
// Player 1: 4, Player 2: 2: Win for player1
// Player 1: 2, Player 2: 4: Win for player2
// Player 1: 4, Player 2: 3: Advantage player1
// Player 1: 3, Player 2: 4: Advantage player2
// Player 1: 5, Player 2: 4: Advantage player1
// Player 1: 4, Player 2: 5: Advantage player2
// Player 1: 15, Player 2: 14: Advantage player1
// Player 1: 14, Player 2: 15: Advantage player2
// Player 1: 6, Player 2: 4: Win for player1
// Player 1: 4, Player 2: 6: Win for player2
// Player 1: 16, Player 2: 14: Win for player1
// Player 1: 14, Player 2: 16: Win for player2