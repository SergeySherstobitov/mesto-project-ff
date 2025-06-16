import "./pages/index.css";
import {
  createCard,
  deleteCard,
  toggleLikeCallback,
} from "./components/card.js";
import { initialCards } from "./components/cards.js";
import {
  openPopup,
  closePopup,
  closeClickByOverlay,
  closeByEsc,
} from "./components/modal.js";

// DOM узлы
const cardInput = document.querySelector(".popup__input_type_card-name");
const urlInput = document.querySelector(".popup__input_type_url");
const formElementNewCard = document.querySelector(
  ".popup__form[name=new-place]"
);
const popupAddNewCard = document.querySelector(".popup_type_new-card");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupFullImage = document.querySelector(".popup_type_image");
const buttonOpenPopupAddNewCard = document.querySelector(
  ".profile__add-button"
);
const cardList = document.querySelector(".places__list");
const popupImage = document.querySelector(".popup_type_image");
const photoPopupImage = popupImage.querySelector(".popup__image");
const captionPopupImage = popupImage.querySelector(".popup__caption");

const buttonEditProfile = document.querySelector(".profile__edit-button");
const formElementEdit = document.querySelector(
  ".popup__form[name=edit-profile]"
);
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
popupEditProfile.addEventListener("click", closeClickByOverlay);
popupAddNewCard.addEventListener("click", closeClickByOverlay);
popupFullImage.addEventListener("click", closeClickByOverlay);

function renderCard(card) {
  const cardElement = createCard(
    card,
    deleteCard,
    toggleLikeCallback,
    openImagePopupCallback
  );
  cardList.prepend(cardElement);
}

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
function openImagePopupCallback(card) {
  photoPopupImage.src = card.link;
  photoPopupImage.alt = card.alt;
  captionPopupImage.textContent = card.name;

  openPopup(popupImage);
}

initialCards.forEach(renderCard);
