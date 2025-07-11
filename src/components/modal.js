function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEsc);
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) closePopup(openedPopup);
  }
}

function closeByOverlay(evt) {
  const popup = evt.target.closest(".popup");
  if (!popup) return;

  const isOverlayClick = evt.target === popup;
  const isCloseButtonClick = evt.target.classList.contains("popup__close");

  if (isOverlayClick || isCloseButtonClick) {
    closePopup(popup);
  }
}

// Глобальный обработчик
document.addEventListener("mousedown", closeByOverlay);

export { openPopup, closePopup };
