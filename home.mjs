function createHome(cardContainer) {
  const homeElement = document.createElement("h2");
  homeElement.textContent = "Bienvenido al Mundo Mágico de Harry Potter";
  cardContainer.appendChild(homeElement);
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = "Explorá los personajes más icónicos de Hogwarts. Hacé click en Personajes para comenzar tu aventura.";
  cardContainer.appendChild(descriptionElement);
}

export { createHome };