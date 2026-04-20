
const cardContainer = document.getElementById("cards");

let currentData = null; //variable de espera antes de que lleguen los datos de la api
fetch("https://hp-api.onrender.com/api/characters")
  .then(response => response.json())
  .then(data => {
    currentData = data;
  })


export function chargeCards() {
  cardContainer.innerHTML = "";
  currentData.forEach(card => {
    createCard(card);
  });
}

function createCard(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imageElement = document.createElement("img");
  imageElement.src = card.image;

  const titleActor = document.createElement("p");
  titleActor.textContent = `Actor: ${card.actor}`;

  const titleName = document.createElement("h2");
  titleName.textContent = card.name;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = card.description;

  const descriptionHouse = document.createElement("p");
  descriptionHouse.textContent = `Casa: ${card.house}`;


  cardElement.appendChild(imageElement);
  cardElement.appendChild(titleName);
  cardElement.appendChild(descriptionElement);
  cardElement.appendChild(descriptionHouse);
  cardElement.appendChild(titleActor);

  cardContainer.appendChild(cardElement);
}

