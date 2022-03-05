const suits = ['H', 'S', 'D', 'C'];
const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var deck = [];

const heartButton = document.getElementById('heart');
const spadeButton = document.getElementById('spade');
const diamondButton = document.getElementById('diamond');
const clubButton = document.getElementById('club');
const resetButton = document.getElementById('reset');
const shuffleButton = document.getElementById('shuffle');

function createDeck() {
  for(let suitsCounter = 0; suitsCounter < 4; suitsCounter++ ){
    for(let cardCounter = 0; cardCounter < 13; cardCounter++){
      let card = cards[cardCounter] + suits[suitsCounter]
      deck.push({ cardValue: `${cards[cardCounter]}`, cardSuit: `${suits[suitsCounter]}` });
    }    
  }

  return deck;
}

function createDeckDivs(deck) {
  const deckDiv = document.createElement('div');
  deckDiv.classList.add('deck');
  deckValues = Object.values(deck).join([separator = ''])
  const content = document.createTextNode(deckValues);
  deckDiv.appendChild(content);

  return deckDiv;
}

//RENDER
deck = createDeck();
const deckList = deck.map(createDeckDivs);
const main = document.getElementById('deck');
main.append(...deckList);

//EVENTS
var initialDeck = [...deck]
var currentDeck = [...deck]

resetButton.addEventListener('click', () => {
  currentDeck = [...initialDeck]
  const resetDeck = currentDeck.map(createDeckDivs);
  main.replaceChildren(...resetDeck);
})

shuffleButton.addEventListener('click', () => {
  const shuffleDeck = currentDeck.sort(() => 0.5 - Math.random())
  const shuffledDeck = shuffleDeck.map(createDeckDivs);
  main.replaceChildren(...shuffledDeck);
})

heartButton.addEventListener('click', () => {
  
  filteredDeck = currentDeck.filter((card) => {
    return card.cardSuit.includes('H');
  })
  const heartCards = filteredDeck.map(createDeckDivs);
  main.replaceChildren(...heartCards);
})

spadeButton.addEventListener('click', () => {
  
  filteredDeck = currentDeck.filter((card) => {
    return card.cardSuit.includes('S');
  })
  const spadeCards = filteredDeck.map(createDeckDivs);
  main.replaceChildren(...spadeCards);
})

diamondButton.addEventListener('click', () => {
  
  filteredDeck = currentDeck.filter((card) => {
    return card.cardSuit.includes('D');
  })
  const diamondCards = filteredDeck.map(createDeckDivs);
  main.replaceChildren(...diamondCards);
})

clubButton.addEventListener('click', () => {
  
  filteredDeck = currentDeck.filter((card) => {
    return card.cardSuit.includes('C');
  })
  const clubCards = filteredDeck.map(createDeckDivs);
  main.replaceChildren(...clubCards);
})

