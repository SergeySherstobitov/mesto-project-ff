function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEsc);
  popup.addEventListener("mousedown", closeByOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEsc);
  popup.removeEventListener("mousedown", closeByOverlay);
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) closePopup(openedPopup);
  }
}

function closeByOverlay(evt) {
  const popup = evt.currentTarget;

  const isOverlayClick = evt.target === popup;
  const isCloseButtonClick = evt.target.classList.contains("popup__close");

  if (isOverlayClick || isCloseButtonClick) {
    closePopup(popup);
  }
}

export { openPopup, closePopup };
