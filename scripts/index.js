// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

// @todo: DOM узлы
function createCard(card, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;
    const deleteButton = cardElement.querySelector('.card__delete-button'); 
    deleteButton.addEventListener('click', () => deleteCard(cardElement));
    return cardElement;
  }
  
// @todo: Функция создания карточки
function renderCard(card) {
  const cardElement = createCard(card, deleteCard);
  cardList.append(cardElement);
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(renderCard);