const cards = [
  {
    name: "Harry Potter",
    house: "Gryffindor",
    description: "El niño que vivió. Sobrevivió al ataque de Voldemort de bebé y es el elegido para derrotarlo.",
    image: "https://cdn.shopify.com/s/files/1/1943/7257/files/Harry-Potter_large_0dad831f-4b4a-4db5-b0eb-f96e70436102_large.jpg?v=1514443105",
    actor: "Daniel Radcliffe"
  },
  {
    name: "Hermione Granger",
    house: "Gryffindor",
    description: "La mejor estudiante de Hogwarts. Su inteligencia y valentía son clave para enfrentar a las fuerzas del mal.",
    image: "https://hp-api.onrender.com/images/hermione.jpeg",
    actor: "Emma Watson"
  },
  {
    name: "Ron Weasley",
    house: "Gryffindor",
    description: "El leal mejor amigo de Harry. Proviene de una familia de magos de corazón noble.",
    image: "https://hp-api.onrender.com/images/ron.jpg",
    actor: "Rupert Grint"
  },
  {
    name: "Draco Malfoy",
    house: "Slytherin",
    description: "Rival de Harry en Hogwarts. Criado en una familia de magos de sangre pura con vínculos a Voldemort.",
    image: "https://hp-api.onrender.com/images/draco.jpg",
    actor: "Tom Felton"
  },
  {
    name: "Albus Dumbledore",
    house: "Gryffindor",
    description: "El director de Hogwarts y el mago más poderoso de su época. Guía y protector de Harry.",
    image: "https://static.wikia.nocookie.net/wikihp/images/8/88/Dumbledore.jpg/revision/latest/scale-to-width-down/340?cb=20090911073332&path-prefix=es",
    actor: "Richard Harris / Michael Gambon"
  },
  {
    name: "Severus Snape",
    house: "Slytherin",
    description: "Profesor de Pociones de Hogwarts. Misterioso y severo, esconde un pasado complejo y doloroso.",
    image: "https://hp-api.onrender.com/images/snape.jpg",
    actor: "Alan Rickman"
  }
]

const cardContainer = document.getElementById("cards");

console.log(cardContainer);

cards.forEach(card => {
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
