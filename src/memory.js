class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []; // Stores the currently flipped cards for comparison
    this.pairsClicked = 0; // Counts the number of attempts
    this.pairsGuessed = 0; // Counts the number of correctly guessed pairs
  }

  shuffleCards() {
    // ... write your code here
    // Method to shuffle cards using Fisher-Yates (Durstenfeld) Shuffle
    if (!this.cards) return undefined;
    for (let i = this.cards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      // Swap cards[i] and cards[randomIndex]
      [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]];
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++; // Increment the number of attempts
    if (card1 === card2) {
      this.pairsGuessed++; // Increment the number of correct guesses
      return true; // The cards match
    } else {
      return false; // The cards don't match
    }
  }

  checkIfFinished() {
    // ... write your code here
    // The game is finished when the number of guessed pairs equals half the number of cards
    return this.pairsGuessed === this.cards.length / 2;
  }
}
