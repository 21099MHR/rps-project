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
    switch (toReturn){
        case 0:
            return Selections.ROCK;
            break;
        case 1:
            return Selections.PAPER;
            break;
        case 2:
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
    switch (this.playerSelection) {
      case "rock":
        if (this.computerSelection == "paper") return Outcomes.COMPUTER_WINS;
        else if (this.computerSelection == "scissors") return Outcomes.PLAYER_WINS;
        else return Outcomes.TIE;
        break;
      case "paper":
        if (this.computerSelection == "scissors") return Outcomes.COMPUTER_WINS;
        else if (this.computerSelection == "rock") return Outcomes.PLAYER_WINS;
        else return Outcomes.TIE;
        break;
      case "scissors":
        if (this.computerSelection == "rock") return Outcomes.COMPUTER_WINS;
        else if (this.computerSelection == "paper") return Outcomes.PLAYER_WINS;
        else return Outcomes.TIE;
        break;
    }
  }
}
//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;
