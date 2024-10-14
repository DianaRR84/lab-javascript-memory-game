class MemoryGame {
  constructor(cards) {
    if (!cards || !Array.isArray(cards) || cards.length === 0) {
      console.warn("No cards array provided or the array is empty.");
      this.cards = undefined; // This is where the 'undefined' behavior is handled.
      return;
    }
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []; // Stores the currently flipped cards for comparison
    this.pairsClicked = 0; // Counts the number of attempts
    this.pairsGuessed = 0; // Counts the number of correctly guessed pairs
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      console.warn("Cannot shuffle because no cards are defined.");
      return; // Early exit if no cards are defined.
    }
    
    let currentIndex = this.cards.length;
    let randomIndex, tempValue;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap the current element with the randomly selected one
      tempValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempValue;
    }
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
