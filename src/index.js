import './pages/index.css';
import { 
  initialCards, createCard, renderCard, deleteCard } from './components/cards.js';
import { openPopup, closePopup, closeByClick, closeByEsc } from './components/modal.js';

// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// DOM узлы
const cardList = document.querySelector('.places__list');

// Добавление новой карточки
const formElementNewCard = document.querySelector('.popup_type_new-card');
const cardInput = document.querySelector('.popup__input_type_card-name');
const urlInput = document.querySelector('.popup__input_type_url');

// Открытие попапов
const popupNewPlace = document.querySelector('.popup_type_new-card');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const buttonNewPlace = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');

// заткрытие попапа ред профиля
const closebutton = document.querySelector('.popup__close');
const savebutton = document.querySelector('.button popup__button');

//Изменение данных профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
// Попап с картинкой
const imageLink = document.querySelector('.popup__image');
const imageAlt = document.querySelector('.popup__caption');

// Слушатели закрытия попапов по нажатию на оверлей
popupEditProfile.addEventListener('click', closeByClick);
popupNewPlace.addEventListener('click', closeByClick);
popupImage.addEventListener('click', closeByClick);

// Слушатель добавления новой карточки
formElementNewCard.addEventListener('submit', handleFormElementNewCardSubmit);

//Сохранение данных формы 
const formElementEdit = document.querySelector('.popup_type_edit');



// Слушатели открытия попапов
buttonNewPlace.addEventListener('click', () => {
  cardInput.value = '';
  urlInput.value = '';
  openPopup(popupNewPlace);
});

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
});


//Находим форму в DOM
const formElement = document.querySelector('.popup__form'); // Замените на нужный селектор

// Находим поля формы в DOM
//  РЕДАКТИРОВАНИЕ ПРОФИЛЯ)
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
    evt.preventDefault(); // Отменяем стандартную отправку формы

    // Получаем значения из полей формы
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    // Выбираем элементы, куда вставим новые значения
    const profileName = document.querySelector('.profile__title');
    const profileJob = document.querySelector('.profile__description');

    // Вставляем новые значения
    profileName.textContent = nameValue;
    profileJob.textContent = jobValue;
    
}
// Прикрепляем обработчик события submit к форме
formElement.addEventListener('submit', handleFormSubmit);

// Обработчик сохранения данных профиля

function handleFormElementEditSubmit(evt) {
    evt.preventDefault();//устанавливаем стандартное поведение формы
};
//открываем попап
  // buttonEditProfile.addEventListener('click',() => {
      // подставляем текущие значения в инпут
      //nameInput.value = profileTitle.textContent.replace('Имя: ', '');
     // jobInput.value = profileDescription.textContent.replace('Занятие: ', '');
      // показываем попап
      //popup.style.display = 'flex'; });
//закрытие попапа
      //closebutton.addEventListener('click', () => { popup.style.display = 'none' });
// сохранение изменений
     savebutton.addEventListener('click', () => {
        profileTitle.textContent = 'Имя:' +   nameInput.value;   
        profileDescription.textContent = 'Занятие: ' + jobInput.value;
        //закрываем попап
        function closePopup(popup) {
          popup.classList.remove('popup_is-opened');}
      });
    

    //popup.querySelectorAll(('.popup__button')).textContent = ''; 

  //  updateProfileInfo(name, job);
   // popup.classList.remove('popup_is-opened')//убираем класс который отвечает за отображение модального окна

   // nameInput.value = ''; // очищаем поля ввода(если нужно)
    //jobInput.value = '';

    //меняем текст кнопки на сохранить если нужно
   // popup.querySelectorAll('.popup_ _button').forEach(button =>{
     // button.textContent = ''
    //})
      

// Обработчик добавления новой карточки(влияет на работу попапов)
function handleFormElementNewCardSubmit(evt) {
  evt.preventDefault();
}

// Функция отрытия попапа с картинкой
function openImagePopupCallback (buttonImage) {
  openPopup(popupImage);

  imageLink.src = buttonImage.src;
  imageAlt.textContent = buttonImage.alt;
  imageLink.setAttribute("alt", buttonImage.alt);
}
 
export { cardTemplate };