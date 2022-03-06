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

const heartButton = document.getElementById("heart");
const spadeButton = document.getElementById("spade");
const diamondButton = document.getElementById("diamond");
const clubButton = document.getElementById("club");
const resetButton = document.getElementById("reset");
const shuffleButton = document.getElementById("shuffle");

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


function filterSuit(suit){
  filteredDeck = currentDeck.filter((card) => {
    return card.cardSuit.includes(suit);
  })
  const suitCards = filteredDeck.map(createDeckDivs);
  return suitCards;
}

let initialDeck = [...deck];
let currentDeck = [...deck];

heartButton.addEventListener("click", () => {
  heartCards = filterSuit('H');
  main.replaceChildren(...heartCards);
});

spadeButton.addEventListener("click", () => {
  spadeCards = filterSuit('S');
  main.replaceChildren(...spadeCards);
});

diamondButton.addEventListener("click", () => {
  diamondCards = filterSuit('D');
  main.replaceChildren(...diamondCards);
});

clubButton.addEventListener("click", () => {
  clubCards = filterSuit('C');
  main.replaceChildren(...clubCards);
});

resetButton.addEventListener("click", () => {
  currentDeck = [...initialDeck];
  const resetDeck = currentDeck.map(createDeckDivs);
  main.replaceChildren(...resetDeck);
});

shuffleButton.addEventListener("click", () => {
  const shuffleDeck = currentDeck.sort(() => 0.5 - Math.random());
  const shuffledDeck = shuffleDeck.map(createDeckDivs);
  main.replaceChildren(...shuffledDeck);
});
