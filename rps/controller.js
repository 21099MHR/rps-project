var game = new Game();

// main entry point
function playGame() {
  //*********************************ADD CODE HERE *************************************/
  // Call the function game.newGame() to reset the counts.

  game.newGame();

  //*********************************ADD CODE HERE *************************************/
  // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
  // Use game.IsNumerOfRoundsValid() to validate the user input.
  // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game
  //  >> Else, try to get the number of rounds for the suer again

  var numberOfRounds = prompt(
    "Please enter the number of rounds you'd like to play from 1 to 5!"
  );

  var check = game.isNumberOfRoundsValid(numberOfRounds);

  while (check == false) {
    numberOfRounds = prompt(
      "The value you entered was invalid. Please enter a number from 1 to 5."
    );
    check = game.isNumberOfRoundsValid(numberOfRounds);
  }

  game.setNumberOfRounds(numberOfRounds);

  //*********************************ADD CODE HERE *************************************/
  // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round

  var counter = 1;
  while (counter <= numberOfRounds) {
    playRound(counter);
    counter += 1;
  }
  //*********************************ADD CODE HERE *************************************/
  // Display the Final Score from the properties stored in the Game object

  alert(
    "The final scores are: \nPlayer wins: " +
      String(game.countOfPlayerWins) +
      "\nComputer wins: " +
      String(game.countOfComputerWins) +
      "\nTies: " +
      String(game.countOfTies)
  );
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
  //*********************************ADD CODE HERE *************************************/
  // Display the Current Score to the User

  //Prompt for Player Selection
  var playerSelection = getPlayerSelection();
  var round = new Round(playerSelection);

  //Play the Round
  var outcome = round.determineWinner(playerSelection, round.computerSelection);

  //*********************************ADD CODE HERE *************************************/
  // Display the Round Results from the properties stored in the Round object

  alert("The outcome was: " + outcome);
  switch (outcome) {
    case "tie":
      game.incrementCountOfTies();
      break;
    case "player":
      game.incrementPlayerWins();
      break;
    case "computer":
      game.incrementComputerWins();
      break;
    default:
      alert("Something went wrong.");
  }
}

/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
  //*********************************ADD CODE HERE *************************************/
  // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly

  let selection = prompt(
    "Please enter rock, paper, or scissors exactly as shown."
  );

  while (
    selection !== "rock" &&
    selection !== "paper" &&
    selection !== "scissors"
  ) {
    selection = prompt(
      "Invalid selection. Please enter rock, paper, or scissors exactly as shown."
    );
  }
  
  switch (selection) {
    case "rock":
      return Selections.ROCK;
      break;
    case "paper":
      return Selections.PAPER;
      break;
    case "scissors":
      return Selections.SCISSORS;
      break;
  }
}
