import { openPopup } from "./modal.js";
import { toggleLike } from "./api.js";

//Проверяем, что шаблон существует в DOM
const cardTemplate = document.querySelector("#card-template");
if (!cardTemplate) {
  console.error("Ошибка: #card-template не найден в DOM!");
}
function createCard(
  card,
  toggleLikeCallback,
  openImagePopupCallback,
  currentUserId
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeCount = cardElement.querySelector(".card__like-count");

  // Заполняем данные
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  likeCount.textContent = card.likes?.length ?? 0;

  // Показываем кнопку удаления, если владелец совпадает с currentUserId
  if (card.owner && card.owner._id === currentUserId) {
    deleteButton.style.display = "block";
    deleteButton.addEventListener("click", () => {
      openDeletePopup(card._id, cardElement);
    });
  } else {
    deleteButton.style.display = "none";
  }

  // Отметка лайка, если лайк уже есть
  if (card.likes.some((like) => like._id === currentUserId)) {
    likeButton.classList.add("card__like-button_is-active");
  }

  // Обработчик лайка
  likeButton.addEventListener("click", () => {
    console.log("Клик лайка для карточки:", card._id);
    const isLiked = likeButton.classList.contains(
      "card__like-button_is-active"
    );
    toggleLikeCallback(card._id, isLiked)
      .then((updatedCard) => {
        console.log("Ответ от сервера по лайку:", updatedCard);
        likeCount.textContent = updatedCard.likes.length;
        likeButton.classList.toggle("card__like-button_is-active", !isLiked);
      })
      .catch((err) => {
        console.error("Ошибка лайка:", err);
      });
  });

  // Обработчик открытия popup с изображением
  cardImage.addEventListener("click", () => openImagePopupCallback(card));

  return cardElement;
}

let currentCardId = null;
let currentCardElement = null;
export function openDeletePopup(cardId, cardElement) {
  if (!cardElement) {
    console.error("❌ Ошибка: переданный элемент карточки равен null!");
    return;
  }

  window.currentCardId = cardId;
  window.currentCardElement = cardElement; // Используем глобальные переменные

  const deletePopup = document.getElementById("delete-popup");
  openPopup(deletePopup);
}

export { createCard };
