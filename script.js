import { createHome } from './home.mjs';
import { chargeCards } from './chargeCards.mjs';

const cardContainer = document.getElementById("cards");
createHome(cardContainer);

document.getElementById("home").addEventListener("click", () => {
  cardContainer.innerHTML = "";
  createHome(cardContainer);
});

document.getElementById("characters").addEventListener("click", () => {
  cardContainer.innerHTML = "";
  chargeCards();
});