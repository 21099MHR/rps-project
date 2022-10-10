// Enum of Selections
const Selections = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
  PLAYER_WINS: "player",
  COMPUTER_WINS: "computer",
  TIE: "tie",
};
Object.freeze(Outcomes);

class Round {
  constructor(playerSelection) {
    this.playerSelection = playerSelection;
    this.computerSelection = this.getComputerSelection();
  }

  /**
   * get a random computer selection
   * @returns Selections
   */
  getComputerSelection() {
    //*********************************ADD CODE HERE *************************************/
    // Use Math.floor and select a random Selections enumerator from above
    var toReturn = Math.floor(Math.random() * 3);
    switch (toReturn) {
      case 0:
        alert("The computer threw " + String(Selections.ROCK) + ".");
        return Selections.ROCK;
        break;
      case 1:
        alert("The computer threw " + String(Selections.PAPER) + ".");
        return Selections.PAPER;
        break;
      case 2:
        alert("The computer threw " + String(Selections.SCISSORS) + ".");
        return Selections.SCISSORS;
        break;
    }
  }

  /**
   * determine the winner of the round
   * @param {*} playerSelection
   * @param {*} computerSelection
   * @returns Outcomes
   */
  determineWinner(playerSelection, computerSelection) {
    //*********************************ADD CODE HERE *************************************/
    // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.

    if (
      (this.playerSelection == "rock" &&
        this.computerSelection == "scissors") ||
      (this.playerSelection == "scissors" &&
        this.computerSelection == "paper") ||
      (this.playerSelection == "paper" && this.computerSelection == "rock")
    ) {
      return Outcomes.PLAYER_WINS;
    } else if (
      (this.computerSelection == "rock" &&
        this.playerSelection == "scissors") ||
      (this.computerSelection == "scissors" &&
        this.playerSelection == "paper") ||
      (this.computerSelection == "paper" && this.playerSelection == "rock")
    ) {
      return Outcomes.COMPUTER_WINS;
    } else {
      return Outcomes.TIE;
    }
  }
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;
