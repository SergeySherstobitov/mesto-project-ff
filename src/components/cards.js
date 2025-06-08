import { cardTemplate } from "../index.js";
import { openPopup } from "./modal.js";
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt: "Изображение гор Архыза с белым снегом у подножия и зеленой травой на вершинах",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    alt: "Изображение незамерзшей извилистой реки посреди припорошенного снегом леса",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    alt: "Изображение серых девятиэтажек одного из спальных районов г. Иваново",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt: "Изображение камчатской равнины с мелкой травяной порослью на переднем плане и полузаснеженной горой на заднем",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt: "Изображение прямой железной дороги посреди зеленого леса",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt: "Изображение скалистого берега темного цвета на фоне замерзшего озера Байкал",
  },
];

// дом узлы
const cardList = document.querySelector(".places__list");

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
  const popupImage = document.querySelector(".popup_type_image");
  const imageLink = popupImage.querySelector(".popup__image");
  const imageAlt = popupImage.querySelector(".popup__caption");

  imageLink.src = card.link;
  imageLink.alt = card.alt;
  imageAlt.textContent = card.name;

  openPopup(popupImage);
}

export { initialCards, createCard, renderCard, deleteCard };
