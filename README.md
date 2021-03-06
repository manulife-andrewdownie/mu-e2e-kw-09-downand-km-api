Refactoring existing code
Imagine you work for a consultancy company, and one of your colleagues has been doing some work for the Tennis Society (see below). The contract is for 10 hours of billable work, and your colleague has spent 9 hours working on it. Unfortunately they have now fallen ill. They say the work has been completed, and the tests all pass.

Your boss has asked you to take over. She wants you to spend an hour or so on the code so she can bill the client for the full 10 hours. She instructs you to tidy up the code a little and perhaps make some notes so you can give your colleague some feedback on his chosen design. You should also prepare to talk to your boss about the value of this refactoring work, over and above the extra billable hours.

 

Tennis Scoring System
Tennis has a rather quirky scoring system, and to newcomers it can be a little difficult to keep track of. The Tennis Society has contracted you to build a scoreboard to display the current score during tennis games.

Your task is to write a “TennisGame” class containing the logic which outputs the correct score as a string for display on the scoreboard. When a player scores a point, it triggers a "wonPoint(playerName)" method to be called on your class letting you know who scored the point. Later, you will get a call "getScore()" from the scoreboard asking what it should display. This method should return a string with the current score.

You can read more about Tennis scores here which is summarized below:

    A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
    The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as "Love", "Fifteen", "Thirty", and "Forty" respectively.
    If at least three points have been scored by each player, and the scores are equal, the score is "Deuce".
    If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is "Advantage" for the player in the lead.
You need only report the score for the current game. Sets and Matches are out of scope at this time.