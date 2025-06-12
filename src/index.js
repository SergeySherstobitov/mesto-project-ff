import "./pages/index.css";
import { createCard, renderCard, deleteCard } from "./components/card.js";
import { initialCards } from "./components/cards.js";
import {
  openPopup,
  closePopup,
  closeByClick,
  closeByEsc,
} from "./components/modal.js";

// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// DOM узлы
const formElementNewCard = document.querySelector(".popup_type_new-card");
const cardInput = document.querySelector(".popup__input_type_card-name");
const urlInput = document.querySelector(".popup__input_type_url");
const popupAddNewCard = document.querySelector(".popup_type_new-card");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupFullImage = document.querySelector(".popup_type_image");
const buttonOpenPopupAddNewCard = document.querySelector(
  ".profile__add-button"
);
const buttonEditProfile = document.querySelector(".profile__edit-button");
const formElementEdit = document.querySelector(".popup_type_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
popupEditProfile.addEventListener("click", closeByClick);
popupAddNewCard.addEventListener("click", closeByClick);
popupFullImage.addEventListener("click", closeByClick);

buttonOpenPopupAddNewCard.addEventListener("click", () => {
  cardInput.value = "";
  urlInput.value = "";
  openPopup(popupAddNewCard);
});

buttonEditProfile.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});

formElementEdit.addEventListener("submit", handleFormEditProfileSubmit);

function handleFormEditProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

formElementNewCard.addEventListener("submit", handleFormElementNewCardSubmit);

function handleFormElementNewCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardInput.value,
    link: urlInput.value,
    alt: cardInput.value,
  };

  renderCard(newCard); // Добавление в начало
  closePopup(popupAddNewCard); // Закрытие попапа
  evt.target.reset(); // Очистка формы
}

initialCards.forEach(renderCard);

export { cardTemplate };
