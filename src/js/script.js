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

let initialDeck = [...deck];
let currentDeck = [...deck];

heartButton.addEventListener("click", () => {
  filteredDeck = currentDeck.filter((card) => {
    return card.cardSuit.includes("H");
  });
  const heartCards = filteredDeck.map(createDeckDivs);
  main.replaceChildren(...heartCards);
});

spadeButton.addEventListener("click", () => {
  filteredDeck = currentDeck.filter((card) => {
    return card.cardSuit.includes("S");
  });
  const spadeCards = filteredDeck.map(createDeckDivs);
  main.replaceChildren(...spadeCards);
});

diamondButton.addEventListener("click", () => {
  filteredDeck = currentDeck.filter((card) => {
    return card.cardSuit.includes("D");
  });
  const diamondCards = filteredDeck.map(createDeckDivs);
  main.replaceChildren(...diamondCards);
});

clubButton.addEventListener("click", () => {
  filteredDeck = currentDeck.filter((card) => {
    return card.cardSuit.includes("C");
  });
  const clubCards = filteredDeck.map(createDeckDivs);
  main.replaceChildren(...clubCards);
});

resetButton.addEventListener("click", () => {
  currentDeck = [...initialDeck];
  const resetDeck = currentDeck.map(createDeckDivs);
  main.replaceChildren(...resetDeck);
});
