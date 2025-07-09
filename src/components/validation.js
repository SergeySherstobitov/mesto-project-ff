export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Функция для отображения ошибки
function showInputError(formElement, inputElement, errorMessage, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
}

// Функция для скрытия ошибки
function hideInputError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
}

// Функция проверки поля ввода на ошибки
function isValid(formElement, inputElement, settings) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
}

// Функция для включения кнопки
function toggleButtonState(inputList, buttonElement, settings) {
  const isFormValid = inputList.every((input) => input.validity.valid);
  if (isFormValid) {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  } else {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  }
}

// Функция для добавления слушателей событий на форму
function setEventListeners(formElement, settings) {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });

  toggleButtonState(inputList, buttonElement, settings);
}

// Функция для включения валидации
export function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
}

// Функция очистки ошибок валидации
export function clearValidation(formElement, settings) {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, settings);
  });
  buttonElement.classList.add(settings.inactiveButtonClass);
  buttonElement.disabled = true;
}