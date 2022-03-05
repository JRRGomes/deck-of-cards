const suits = ['H', 'S', 'D', 'C'];
const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var deck = [];

function createDeck() {
  for(let suitsCounter = 0; suitsCounter < 4; suitsCounter++ ){
    for(let cardCounter = 0; cardCounter < 13; cardCounter++){
      let card = cards[cardCounter] + suits[suitsCounter]
      deck.push({ cardSuit: `${suits}`, cardValue: `${cards}` });
      //deck.push(card);
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




//currentDeck


