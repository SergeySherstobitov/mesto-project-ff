function showInputError(formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
}

function isValid(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    // Установка кастомного сообщения
    if (inputElement.validity.valueMissing) {
      inputElement.setCustomValidity("Это поле обязательно для заполнения");
    } else if (inputElement.validity.typeMismatch) {
      inputElement.setCustomValidity("Введите URL");
    } else {
      inputElement.setCustomValidity("");
    }

    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    inputElement.setCustomValidity("");
    hideInputError(formElement, inputElement, config);
  }
}

// Деактивация кнопки
function disableSubmitButton(buttonElement, config) {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}

// Активация кнопки
function enableSubmitButton(buttonElement, config) {
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.disabled = false;
}

function toggleButtonState(inputList, buttonElement, config) {
  const isFormValid = inputList.every((input) => input.validity.valid);
  isFormValid
    ? enableSubmitButton(buttonElement, config)
    : disableSubmitButton(buttonElement, config);
}

function setEventListeners(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });

  toggleButtonState(inputList, buttonElement, config);
}

export function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
}

export function clearValidation(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, config);
  });

  disableSubmitButton(buttonElement, config); // Переиспользуем функцию
}
