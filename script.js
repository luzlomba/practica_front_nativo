const cards = [
  {
    title: "Crema Facial",
    description: "This is the description for Card 1.",
    image: "https://i.postimg.cc/QBJbddjZ/cremas.png",
    price: "200",
  },
  {
    title: "Esmalte",
    description: "This is the description for Card 2.",
    image: "https://i.postimg.cc/Nyk4jjQt/esmaltes.png",
    price: "150",
  },
  {
    title: "Labial",
    description: "This is the description for Card 3.",
    image: "https://i.postimg.cc/zLFjGGq5/labiales.png",
    price: "800",
  },
  {
    title: "Sombras",
    description: "This is the description for Card 4.",
    image: "https://i.postimg.cc/rdNJwwMP/sombras.png",
    price: "550",
  },
  {
    title: "Brochas",
    description: "This is the description for Card 5.",
    image: "https://i.postimg.cc/D8zyCjSG/brochas.png",
    price: "320",
  },
  {
    title: "Rimmel",
    description: "This is the description for Card 6.",
    image: "https://i.postimg.cc/1fz5WC8v/rimmel.png",
    price: "150",
  }
]

/* Enlace a la galeria
https://postimg.cc/gallery/gZ92wzd */

const cardContainer = document.getElementById("cards");

console.log(cardContainer);

cards.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imageElement = document.createElement("img");
  imageElement.src = card.image;
  imageElement.alt = card.title;

  const titleElement = document.createElement("h2");
  titleElement.textContent = card.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = card.description;

  const priceElement = document.createElement("p");
  priceElement.classList.add("price");
  priceElement.textContent = `$ ${card.price}`;

  cardElement.appendChild(imageElement);
  cardElement.appendChild(titleElement);
  cardElement.appendChild(descriptionElement);
  

  cardContainer.appendChild(cardElement);
  cardElement.appendChild(priceElement);
});


// Otra forma de hacerlo es usando innerHTML, pero no es tan recomendable porque puede ser menos seguro y más difícil de mantener. Sin embargo, aquí tienes un ejemplo de cómo hacerlo con innerHTML:

/*
cards.forEach(card => {
  cardContainer.innerHTML += `
    <div class="card">
      <img src="${card.image}" alt="${card.title}" />
      <h2>${card.title}</h2>
      <p>${card.description}</p>
    </div>
  `;
});
*/
