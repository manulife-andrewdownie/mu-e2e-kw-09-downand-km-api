const assert = require('assert');
const TennisGame = require('../tennis');

describe('Tennis - getScore', function () {
  it('Player 1: 0, Player 2: 0 -> returns Love-All', async function () {
    let actual = generateOutput(0, 0);
    assert.equal(actual, 'Love-All');
  });
  it('Player 1: 1, Player 2: 1 -> returns Fifteen-All', async function () {
    let actual = generateOutput(1, 1);
    assert.equal(actual, 'Fifteen-All');
  });
  it('Player 1: 2, Player 2: 2 -> returns Thirty-All', async function () {
    let actual = generateOutput(2, 2);
    assert.equal(actual, 'Thirty-All');
  });
  it('Player 1: 3, Player 2: 3 -> returns Deuce', async function () {
    let actual = generateOutput(3, 3);
    assert.equal(actual, 'Deuce');
  });
  it('Player 1: 4, Player 2: 4 -> returns Deuce', async function () {
    let actual = generateOutput(4, 4);
    assert.equal(actual, 'Deuce');
  });
  it('Player 1: 1, Player 2: 0 -> returns Fifteen-Love', async function () {
    let actual = generateOutput(1, 0);
    assert.equal(actual, 'Fifteen-Love');
  });
  it('Player 1: 0, Player 2: 1 -> returns Love-Fifteen', async function () {
    let actual = generateOutput(0, 1);
    assert.equal(actual, 'Love-Fifteen');
  });
  it('Player 1: 2, Player 2: 0 -> returns Thirty-Love', async function () {
    let actual = generateOutput(2, 0);
    assert.equal(actual, 'Thirty-Love');
  });
  it('Player 1: 2, Player 2: 0 -> returns Thirty-Love', async function () {
    let actual = generateOutput(2, 0);
    assert.equal(actual, 'Thirty-Love');
  });
  it('Player 1: 0, Player 2: 2 -> returns Love-Thirty', async function () {
    let actual = generateOutput(0, 2);
    assert.equal(actual, 'Love-Thirty');
  });
  it('Player 1: 3, Player 2: 0 -> returns Forty-Love', async function () {
    let actual = generateOutput(3, 0);
    assert.equal(actual, 'Forty-Love');
  });
  it('Player 1: 0, Player 2: 3 -> returns Love-Forty', async function () {
    let actual = generateOutput(0, 3);
    assert.equal(actual, 'Love-Forty');
  });
  it('Player 1: 4, Player 2: 0 -> returns Win for player1', async function () {
    let actual = generateOutput(4, 0);
    assert.equal(actual, 'Win for player1');
  });
  it('Player 1: 0, Player 2: 4 -> returns Win for player2', async function () {
    let actual = generateOutput(0, 4);
    assert.equal(actual, 'Win for player2');
  });
  it('Player 1: 2, Player 2: 1 -> returns Thirty-Fifteen', async function () {
    let actual = generateOutput(2, 1);
    assert.equal(actual, 'Thirty-Fifteen');
  });
  it('Player 1: 1, Player 2: 2 -> returns Fifteen-Thirty', async function () {
    let actual = generateOutput(1, 2);
    assert.equal(actual, 'Fifteen-Thirty');
  });
  it('Player 1: 3, Player 2: 1 -> returns Forty-Fifteen', async function () {
    let actual = generateOutput(3, 1);
    assert.equal(actual, 'Forty-Fifteen');
  });
  it('Player 1: 1, Player 2: 3 -> returns Fifteen-Forty', async function () {
    let actual = generateOutput(1, 3);
    assert.equal(actual, 'Fifteen-Forty');
  });
  it('Player 1: 4, Player 2: 1 -> returns Win for player1', async function () {
    let actual = generateOutput(4, 1);
    assert.equal(actual, 'Win for player1');
  });
  it('Player 1: 1, Player 2: 4 -> returns Win for player2', async function () {
    let actual = generateOutput(1, 4);
    assert.equal(actual, 'Win for player2');
  });
  it('Player 1: 3, Player 2: 2 -> returns Forty-Thirty', async function () {
    let actual = generateOutput(3, 2);
    assert.equal(actual, 'Forty-Thirty');
  });
  it('Player 1: 2, Player 2: 3 -> returns Thirty-Forty', async function () {
    let actual = generateOutput(2, 3);
    assert.equal(actual, 'Thirty-Forty');
  });
  it('Player 1: 4, Player 2: 2 -> returns Win for player1', async function () {
    let actual = generateOutput(4, 2);
    assert.equal(actual, 'Win for player1');
  });
  it('Player 1: 2, Player 2: 3 -> returns Win for player2', async function () {
    let actual = generateOutput(2, 4);
    assert.equal(actual, 'Win for player2');
  });
  it('Player 1: 4, Player 2: 3 -> returns Advantage player1', async function () {
    let actual = generateOutput(4, 3);
    assert.equal(actual, 'Advantage player1');
  });
  it('Player 1: 3, Player 2: 4 -> returns Advantage player2', async function () {
    let actual = generateOutput(3, 4);
    assert.equal(actual, 'Advantage player2');
  });
  it('Player 1: 5, Player 2: 4 -> returns Advantage player1', async function () {
    let actual = generateOutput(5, 4);
    assert.equal(actual, 'Advantage player1');
  });
  it('Player 1: 4, Player 2: 5 -> returns Advantage player2', async function () {
    let actual = generateOutput(4, 5);
    assert.equal(actual, 'Advantage player2');
  });
  it('Player 1: 15, Player 2: 14 -> returns Advantage player1', async function () {
    let actual = generateOutput(15, 14);
    assert.equal(actual, 'Advantage player1');
  });
  it('Player 1: 14, Player 2: 15 -> returns Advantage player2', async function () {
    let actual = generateOutput(14, 15);
    assert.equal(actual, 'Advantage player2');
  });
  it('Player 1: 6, Player 2: 4 -> returns Win for player1', async function () {
    let actual = generateOutput(6, 4);
    assert.equal(actual, 'Win for player1');
  });
  it('Player 1: 4, Player 2: 6 -> returns Win for player2', async function () {
    let actual = generateOutput(4, 6);
    assert.equal(actual, 'Win for player2');
  });
  it('Player 1: 16, Player 2: 14 -> returns Win for player1', async function () {
    let actual = generateOutput(16, 14);
    assert.equal(actual, 'Win for player1');
  });
  it('Player 1: 14, Player 2: 16 -> returns Win for player2', async function () {
    let actual = generateOutput(14, 16);
    assert.equal(actual, 'Win for player2');
  });
});

// TESTS TO ADD:
// - add tests directly test wonPoint
//   - Player 1: winPoint, _score1 is increased by 1
// - test negative scoring for getScore
// - test big scores for getScore
// - test score differences bigger than two for getScore
// - test initialization of the game (all scores set to 0 and names set correctly)

// PRIORITIES FOR RELEASE BY 2PM TOMORROW
// - code coverage and test coverage
//   - need to prove all functionality defined in requirements are present and working as expected (otherwise release tomorrow isn't happening)
// - if this is an existing prod app, need to prioritize testing existing functionality to ensure new functionality doesn't break it
// - if functionality is missing or app behaves incorrectly, fixes and retests would be needed

// HOW DOES YOUR TEAM DO CODE REVIEWS
// - Iman: creating PRs, needs two approvers familiar with the code base to merge the PR
// - Andrew: create PRs, at least one approver needed to merge PRs
// - JGP is used to implement code scanning and unit test running automatically before the PR
// - Email goes out to reviewers/approvers, ping them directly as well
// - Clarifications asked by reviewer and addressed by PR submitter
// - Suggestions for improvment made by reviewer discussed with PR submitter and potentially implemented first
// - once everything is addressed, PR is approved and merged into codebase

function generateOutput(player1Score, player2Score) {
  const player1Name = 'player1';
  const player2Name = 'player2';
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