import { cardTemplate } from "../index.js";
import { openPopup } from "./modal.js";
// дом узлы
const cardList = document.querySelector(".places__list");
const popupImage = document.querySelector(".popup_type_image");
const imageLink = popupImage.querySelector(".popup__image");
const imageAlt = popupImage.querySelector(".popup__caption");

function createCard(
  card,
  deleteCard,
  toggleLikeCallback,
  openImagePopupCallback
) {
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

function renderCard(card) {
  const cardElement = createCard(
    card,
    deleteCard,
    toggleLikeCallback,
    openImagePopupCallback
  );
  cardList.prepend(cardElement);
}

function deleteCard(cardElement) {
  cardElement.remove();
}

// Функция лайка
function toggleLikeCallback(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}

function openImagePopupCallback(card) {
  imageLink.src = card.link;
  imageLink.alt = card.alt;
  imageAlt.textContent = card.name;

  openPopup(popupImage);
}

export { createCard, renderCard, deleteCard };
