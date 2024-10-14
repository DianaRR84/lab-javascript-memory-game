const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  // Add the cards to the HTML
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Store the clicked cards in pickedCards
  const pickedCards = [];

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      // Flip the card
      card.classList.add('turned');
      pickedCards.push(card);

      // If two cards are picked, check if they are a pair
      if (pickedCards.length === 2) {
        const card1 = pickedCards[0];
        const card2 = pickedCards[1];
        const card1Name = card1.getAttribute('data-card-name');
        const card2Name = card2.getAttribute('data-card-name');
      
        // Check if it's a pair
        if (memoryGame.checkIfPair(card1Name, card2Name)) {
          // If it's a match, keep them flipped
          card1.classList.add('blocked');
          card2.classList.add('blocked');
          pickedCards.length = 0; // Clear picked cards
        } else {
          // If it's not a match, flip them back after a short delay
          setTimeout(() => {
            card1.classList.remove('turned');
            card2.classList.remove('turned');
            pickedCards.length = 0; // Clear picked cards
          }, 1000);
        }

        // Check if the game is finished
        if (memoryGame.checkIfFinished()) {
          setTimeout(() => {
            alert('You won!!!');
          }, 500); // Delay of 500 milliseconds (0.5 seconds. The alert will be shown 0.5 seconds after the game finishes.
        }
      }
    });
  });
});