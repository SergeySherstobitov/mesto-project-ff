import './pages/index.css';
import { 
  // initialCards, 
  createCard, deleteCardCallback, toggleLikeCallback } from './components/card.js';
import { openPopup, closePopup, closeByClick } from './components/modal.js';
import { enableValidation, clearValidation, hideInputError, toggleButtonState, validationConfig } from './components/validation.js';

// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// DOM узлы
const placesList = document.querySelector('.places__list');

// Добавление новой карточки
const formElementNewCard = document.querySelector('.popup_type_new-card');
const cardInput = document.querySelector('.popup__input_type_card-name');
const urlInput = document.querySelector('.popup__input_type_url');

// Открытие попапов
const popupNewPlase = document.querySelector('.popup_type_new-card');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');

const buttonNewPlase = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');


//Изменение данных профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

//Изменение аватара
const popupEditIcon = document.querySelector('.popup_type_edit-icon');
const buttonEditIcon = document.querySelector('.profile__image');
const editAvatarInput = document.querySelector('.popup__input_type_edit-icon');

popupEditIcon.addEventListener('submit', handleNewAvatar); 

// Добавление карточки с картинкой
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

// Попап с картинкой
const imageLink = document.querySelector('.popup__image');
const imageAlt = document.querySelector('.popup__caption');

// Слушатели закрытия попапов по нажатию на оверлей
popupEditProfile.addEventListener('click', closeByClick);
popupNewPlase.addEventListener('click', closeByClick);
popupImage.addEventListener('click', closeByClick);

// Слушатель добавления новой карточки
formElementNewCard.addEventListener('submit', handleFormElementNewCardSubmit);

//Сохранение данных формы 
const formElementEdit = document.querySelector('.popup_type_edit');

// Слушатель сохранения данных профиля
formElementEdit.addEventListener('submit', handleFormElementEditSubmit); 

const popup = document.querySelector('.popup');
// Анимация попапов
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
    popup.classList.add('popup_is-animated');
        popup.querySelector('.popup__button');
});

// const saveButton = popup.querySelectorAll(('.popup__button'));

// Слушатели открытия попапов
buttonNewPlase.addEventListener('click', () => {
  cardInput.value = '';
  urlInput.value = '';
  hideInputError(formElementNewCard, cardInput);
  hideInputError(formElementNewCard, urlInput);
  openPopup(popupNewPlase);
});

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  clearValidation(popupEditProfile, validationConfig);
  openPopup(popupEditProfile);
});

buttonEditIcon.addEventListener('click', () => {
  const editIcon = getComputedStyle(profileImage).backgroundImage;
  const imageUrl = editIcon.replace(/url\(["']?(.*?)["']?\)/, '$1'); 
  editAvatarInput.value = imageUrl;
  clearValidation(popupEditIcon, validationConfig);
  openPopup(popupEditIcon);
});

// Обработчик сохранения данных профиля

function handleFormElementEditSubmit(evt) {
    evt.preventDefault();

    popup.querySelectorAll(('.popup__button')).textContent = 'Сохранение...'; 

    updateProfileInfo(nameInput.value, jobInput.value)
    .then(updatedProfile => {      
      console.log('Профиль успешно обновлен на сервере, статус код:', updatedProfile.status);
      closePopup(formElementEdit);   
    })
    .catch(err => {
      console.error('Ошибка при обновлении профиля на сервере:', err);
    })
    .finally(function () {
      popup.querySelector('.popup__button').textContent = 'Сохранить' 
    })
}


// Обработчик изменения аватара
function handleNewAvatar(evt) {
  evt.preventDefault();
  
  // saveButton.textContent = 'Сохранение...';


  updateAvatar(editAvatarInput.value)
  .then(updatedAvatar => {      
      console.log('Аватар профиля успешно обновлен на сервере, статус код:', updatedAvatar.avatar);   
      closePopup(popupEditIcon);  
    })
    .catch(err => {
      console.error('Ошибка при обновлении аватара профиля на сервере:', err);
    })
    .finally(function () {
      popup.querySelectorAll(('.popup__button')).textContent = 'Сохранить'
    })
       
    
}


// Обработчик добавления новой карточки
function handleFormElementNewCardSubmit(evt) {
  evt.preventDefault();
  popup.querySelectorAll(('.popup__button')).textContent = 'Сохранение...' 
   
  addNewCardToServer(cardInput.value, urlInput.value)
    .then(updatedCardList => {
      console.log('Картинка добавлена на сервере:', updatedCardList);
      const newCard = createCard({ name: cardInput.value, link: urlInput.value }, deleteCardCallback, toggleLikeCallback, openImagePopupCallback);
      placesList.prepend(newCard); 
      closePopup(formElementNewCard);
      cardInput.value = '';
      urlInput.value = '';
      toggleButtonState([cardInput, urlInput], formElementNewCard.querySelector('.popup__button'));
    })
    
    .catch(err => {
      console.error('Ошибка при добавлении картинки на сервере:', err);
    }).finally(function () {
      popup.querySelector('.popup__button').textContent = 'Сохранить' 
    })

  
}

// Функция отрытия попапа с картинкой
function openImagePopupCallback (buttonImage) {
  openPopup(popupImage);

  imageLink.src = buttonImage.src;
  imageAlt.textContent = buttonImage.alt;
  imageLink.setAttribute("alt", buttonImage.alt);
}
 
// Вызов функции включения валидации
enableValidation(validationConfig);

// Вызов функции очистки ошибок валидации 
clearValidation(popupEditProfile, validationConfig); 