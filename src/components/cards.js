import { cardTemplate } from '../index.js';
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt:"Изображение гор Архыза с белым снегом у подножия и зеленой травой на вершинах",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    alt:"Изображение незамерзшей извилистой реки посреди припорошенного снегом леса",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    alt:"Изображение серых девятиэтажек одного из спальных районов г. Иваново",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt:"Изображение камчатской равнины с мелкой травяной порослью на переднем плане и полузаснеженной горой на заднем",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt:"Изображение прямой железной дороги посреди зеленого леса",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt:"Изображение скалистого берега темного цвета на фоне замерзшего озера Байкал",
  }
];

// дом узлы
function createCard(card, deleteCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card_title').textContent = card.name;
  const deleteButton = cardElement. querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => deleteCard (cardElement) );
  return cardElement;
}

// @todo: Функция создания карточки
function renderCard (card) {
const cardElement = createCard (card, deleteCard);
cardList. append (cardElement);
}
// Функция удаления карточки
function deleteCard(cardElement) {
  cardElement. remove();
}

// Функция лайка
//function toggleLikeCallback (likeButton) {
  //  likeButton.classList.toggle('card__like-button_is-active');
//};

export {initialCards, createCard, renderCard, deleteCard};

