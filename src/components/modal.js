
// Функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEsc);
  popup.addEventListener('click', closeByClick);

} 

// Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEsc);
  popup.removeEventListener('click', closeByClick);

}

// Обработчик закрытия по Escape
function closeByEsc(event) {
if (event.key === 'Escape') {
  const activePopup = document.querySelector('.popup_is-opened');
  if (activePopup) {
    closePopup(activePopup);
  } 
}
}

// Обработчик закрытия по клику на оверлей или кнопку закрытия
function closeByClick(event) {
const activePopup = event.target.closest('.popup_is-opened');
if (event.target === activePopup || event.target.classList.contains('popup__close')) {
  closePopup(activePopup);
}
}

export { openPopup, closePopup, closeByClick };