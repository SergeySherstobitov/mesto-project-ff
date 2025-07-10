//Проверяем, что шаблон существует в DOM
const cardTemplate = document.querySelector("#card-template");
if (!cardTemplate) {
  console.error("Ошибка: #card-template не найден в DOM!");
}

function createCard(
  card,
  toggleLikeCallback,
  openImagePopupCallback,
  currentUserId,
  openDeletePopupCallback // новый аргумент
) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeCount = cardElement.querySelector(".card__like-count");

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  likeCount.textContent = card.likes?.length ?? 0;

  // Кнопка удаления
  if (card.owner && card.owner._id === currentUserId) {
    deleteButton.style.display = "block";
    deleteButton.addEventListener("click", () => {
      openDeletePopupCallback(card._id, cardElement);
    });
  } else {
    deleteButton.style.display = "none";
  }

  if (card.likes.some((like) => like._id === currentUserId)) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeButton.addEventListener("click", () => {
    const isLiked = likeButton.classList.contains(
      "card__like-button_is-active"
    );
    toggleLikeCallback(card._id, isLiked)
      .then((updatedCard) => {
        likeCount.textContent = updatedCard.likes.length;
        likeButton.classList.toggle("card__like-button_is-active", !isLiked);
      })
      .catch((err) => {
        console.error("Ошибка лайка:", err);
      });
  });

  cardImage.addEventListener("click", () => openImagePopupCallback(card));

  return cardElement;
}

export { createCard };
