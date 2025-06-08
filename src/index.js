import "./pages/index.css";
import {
  initialCards,
  createCard,
  renderCard,
  deleteCard,
} from "./components/cards.js";
import {
  openPopup,
  closePopup,
  closeByClick,
  closeByEsc,
} from "./components/modal.js";

// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
const cardList = document.querySelector(".places__list");

// DOM узлы
const formElementNewCard = document.querySelector(".popup_type_new-card");
const cardInput = document.querySelector(".popup__input_type_card-name");
const urlInput = document.querySelector(".popup__input_type_url");
const popupNewPlace = document.querySelector(".popup_type_new-card");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupImage = document.querySelector(".popup_type_image");
const buttonNewPlace = document.querySelector(".profile__add-button");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const formElementEdit = document.querySelector(".popup_type_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
popupEditProfile.addEventListener("click", closeByClick);
popupNewPlace.addEventListener("click", closeByClick);
popupImage.addEventListener("click", closeByClick);

buttonNewPlace.addEventListener("click", () => {
  cardInput.value = "";
  urlInput.value = "";
  openPopup(popupNewPlace);
});

buttonEditProfile.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});

formElementEdit.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function handleFormElementNewCardSubmit(evt) {
  evt.preventDefault();

  const newCard = {
    name: cardInput.value,
    link: urlInput.value,
    alt: cardInput.value,
  };

  formElementNewCard.addEventListener("submit", handleFormElementNewCardSubmit);

  renderCard(newCard); // Добавление в начало
  closePopup(popupNewPlace); // Закрытие попапа
  evt.target.reset(); // Очистка формы
}

initialCards.forEach(renderCard);

export { cardTemplate };
