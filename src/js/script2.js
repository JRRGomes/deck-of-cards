
const suits = ['H', 'S', 'D', 'C'];
const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var deck = [];

const resetButton = document.getElementById('reset-button');
const randomizeButton = document.getElementById('random-button');
const heartButton = document.getElementById('heart');
const spadeButton = document.getElementById('spade');
const diamondButton = document.getElementById('diamond');
const clubButton = document.getElementById('club');


function createDeck() {
  for(let suitsCounter = 0; suitsCounter < 4; suitsCounter++ ){
    for(let cardCounter = 0; cardCounter < 13; cardCounter++){
      let card = cards[cardCounter] + suits[suitsCounter]
      deck.push(card);
    }    
  }

  return deck;
}


deck = createDeck();

function renderDeck(deck) {
  const deckDiv = document.createElement('div');
  deckDiv.classList.add('deck');
  const content = document.createTextNode(deck);
  deckDiv.appendChild(content);

  const deckList = deck.map(deckDiv);
  const main = document.getElementById('deck');
  main.append(...deckList);
  //return deckDiv;
}


renderDeck(deck)


function shuffleDeck(deck) {
  for(let i = 0; i < 52; i++){
    let randomIndex = Math.floor(Math.random() * 52);
    let temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
  return deck;
}

heartButton.addEventListener('click', () => {
  //createDeck();
  //console.log(deck);
})

spadeButton.addEventListener('click', () => {
  //createDeck();
  //console.log(deck);
})

diamondButton.addEventListener('click', () => {
  //createDeck();
  //console.log(deck);
})

clubButton.addEventListener('click', () => {
  //createDeck();
  //console.log(deck);
})

resetButton.addEventListener('click', () => {
  createDeck();
  console.log(deck);
})

randomizeButton.addEventListener('click', () => {
  const newCardList = renderDeck(shuffleDeck(deck));
  main.replaceChildren(...newCardList);
})




const suits = ['H', 'S', 'D', 'C'];
const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var deck = [];

function createDeck() {
  for(let suitsCounter = 0; suitsCounter < 4; suitsCounter++ ){
    for(let cardCounter = 0; cardCounter < 13; cardCounter++){
      let card = cards[cardCounter] + suits[suitsCounter]
      deck.push(card);
    }    
  }

  return deck;
}

function renderDeck(deck) {
  const deckDiv = document.createElement('div');
  deckDiv.classList.add('deck');
  const content = document.createTextNode(deck);
  deckDiv.appendChild(content);

  return deckDiv;
}

deck = createDeck();
const deckList = deck.map(renderDeck);
const main = document.getElementById('deck');
main.append(...deckList);
