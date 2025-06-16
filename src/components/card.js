function createCard(
  card,
  deleteCard,
  toggleLikeCallback,
  openImagePopupCallback
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  cardImage.src = card.link;
  cardImage.alt = card.alt;
  cardTitle.textContent = card.name;
  deleteButton.addEventListener("click", () => deleteCard(cardElement));
  likeButton.addEventListener("click", () => toggleLikeCallback(likeButton));
  cardImage.addEventListener("click", () => openImagePopupCallback(card));
  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

// Функция лайка
function toggleLikeCallback(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}
export { createCard, deleteCard, toggleLikeCallback };
