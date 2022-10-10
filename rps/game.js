class Game {
  constructor() {
    this.numberOfRounds = null;
    this.countOfPlayerWins = 0;
    this.countOfComputerWins = 0;
    this.countOfTies = 0;
  }
  incrementPlayerWins() {
    //*********************************ADD CODE HERE *************************************/
    // Add 1 to the countOfPlayerWins property
    this.countOfPlayerWins = this.countOfPlayerWins + 1;
  }

  incrementComputerWins() {
    //*********************************ADD CODE HERE *************************************/
    // Add 1 to the countOfComputerWins property
    this.countOfComputerWins = this.countOfComputerWins + 1;
  }

  incrementCountOfTies() {
    //*********************************ADD CODE HERE *************************************/
    // Add 1 to the countOfTies property
    this.countOfTies = this.countOfTies + 1;
  }

  setNumberOfRounds(numberOfRounds) {
    //*********************************ADD CODE HERE *************************************/
    // Set the numberOfRounds property to the parameter
    this.numberOfRounds = numberOfRounds;
  }

  newGame() {
    //*********************************ADD CODE HERE *************************************/
    // Clear all properties to their default values
    this.numberOfRounds = null;
    this.countOfPlayerWins = 0;
    this.countOfComputerWins = 0;
    this.countOfTies = 0;
  }

  /**
   * tests the numberOfRounds global variable and determines if it is a valid value
   * @returns boolean
   */
  isNumberOfRoundsValid(num) {
    //*********************************ADD CODE HERE *************************************/
    // return a boolean value that shows if the parameter is a valid user input (A number from 1 - 5)

    num = parseInt(num);

    if (num > 0 && num < 6) {
      return true;
    } else {
      return false;
    }
  }
}

// DO NOT TOUCH THIS CODE
let unit_test = Game;
