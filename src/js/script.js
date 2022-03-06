const SUITS = ["H", "S", "D", "C"];
const CARDS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
let deck = [];

function createDeck() {
  SUITS.forEach((suit) => {
    CARDS.forEach((card) => {
      deck.push({ cardValue: `${card}`, cardSuit: `${suit}` });
    });
  });

  return deck;
}

function createDeckDivs(deck) {
  const deckDiv = document.createElement("div");
  deckDiv.classList.add("deck");
  deckValues = Object.values(deck).join([(separator = "")]);
  const content = document.createTextNode(deckValues);
  deckDiv.appendChild(content);

  return deckDiv;
}

deck = createDeck();
const deckList = deck.map(createDeckDivs);
const main = document.getElementById("deck");
main.append(...deckList);
