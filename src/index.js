import "./pages/index.css";
import { createCard } from "./components/card.js";
import { openPopup, closePopup } from "./components/modal.js";
import {
  enableValidation,
  validationConfig,
  clearValidation,
} from "./components/validation.js";
import {
  addNewCard,
  getUserData,
  getCards,
  toggleLike,
  editingProfileApi,
  updateAvatar,
} from "./components/api.js";

// DOM элементы
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
const profileAvatar = document.querySelector("#profile-avatar");
const formAvatar = document.querySelector("#avatar-form");
const avatarInput = document.querySelector("#avatar-url");
const popupAvatar = document.querySelector("#avatar-popup");

profileAvatar.addEventListener("click", () => {
  openPopup(popupAvatar);
  clearValidation(formAvatar, validationConfig);
});

//Улучшенный UX всех форм
function renderLoading(
  isLoading,
  buttonElement,
  defaultText = "Сохранить",
  loadingText = "Сохранение..."
) {
  if (!buttonElement) return;
  buttonElement.textContent = isLoading ? loadingText : defaultText;
}
// Включаем валидацию
enableValidation(validationConfig);

// Отрисовка карточек
function renderCards(cards, userId) {
  while (cardList.firstChild) {
    cardList.removeChild(cardList.firstChild);
  }

  cards.forEach((card) => {
    const cardElement = createCard(
      card,
      toggleLike,
      openImagePopupCallback,
      userId
    );
    cardList.append(cardElement);
  });
}

// Получаем данные пользователя и карточки, отрисовываем
Promise.all([getUserData(), getCards()])
  .then(([userData, cards]) => {
    window.currentUserId = userData._id;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    document.querySelector(".profile__image").src = userData.avatar;
    renderCards(cards, userData._id);
  })
  .catch((err) => {
    console.error("Ошибка загрузки данных:", err);
  });

// Обработчик формы редактирования профиля
formElementEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const button = formElementEdit.querySelector(".popup__button");
  renderLoading(true, button); // Показываем "Сохранение..."

  const newName = nameInput.value.trim();
  const newAbout = jobInput.value.trim();

  editingProfileApi(newName, newAbout)
    .then((userData) => {
      profileTitle.textContent = userData.name;
      profileDescription.textContent = userData.about;
      closePopup(popupEditProfile);
    })
    .catch((err) => console.error("Ошибка обновления профиля:", err))
    .finally(() => renderLoading(false, button)); // Возвращаем "Сохранить"
});

// Функция отрисовки одной новой карточки
function renderCard(card, userId) {
  const cardElement = createCard(
    card,
    toggleLike,
    openImagePopupCallback,
    userId
  );
  cardList.prepend(cardElement);
}

// Обработчик открытия попапа добавления карточки
buttonOpenPopupAddNewCard.addEventListener("click", () => {
  cardInput.value = "";
  urlInput.value = "";
  openPopup(popupAddNewCard);
  clearValidation(formElementNewCard, validationConfig);
});

// Обработчик открытия попапа редактирования профиля
buttonEditProfile.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
  clearValidation(formElementEdit, validationConfig);
});

// Обработчик отправки новой карточки
formElementNewCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const button = formElementNewCard.querySelector(".popup__button");
  renderLoading(true, button, "Сохранить", "Сохранение...");

  const name = cardInput.value.trim();
  const link = urlInput.value.trim();

  addNewCard(name, link)
    .then((newCardFromServer) => {
      renderCard(newCardFromServer, window.currentUserId);
      closePopup(popupAddNewCard);
      evt.target.reset();
    })
    .catch((err) => console.error("Ошибка при добавлении карточки:", err))
    .finally(() => renderLoading(false, button, "Сохранить"));
});

// Обработчик клика по изображению карточки (открытие попапа)
function openImagePopupCallback(card) {
  photoPopupImage.src = card.link;
  photoPopupImage.alt = card.name;
  captionPopupImage.textContent = card.name;
  openPopup(popupImage);
}

// Обработчик формы обновления аватара
formAvatar.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const button = formAvatar.querySelector(".popup__button");
  renderLoading(true, button, "Сохранить", "Сохранение...");

  const avatarUrl = avatarInput.value.trim();

  updateAvatar(avatarUrl)
    .then((data) => {
      document.querySelector(
        ".profile__image"
      ).style.backgroundImage = `url(${data.avatar})`;
      closePopup(popupAvatar);
      evt.target.reset();
    })
    .catch((err) => console.error("Ошибка обновления аватара:", err))
    .finally(() => renderLoading(false, button, "Сохранить"));
});
