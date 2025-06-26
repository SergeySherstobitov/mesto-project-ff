/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   toggleLikeCallback: () => (/* binding */ toggleLikeCallback)\n/* harmony export */ });\nfunction createCard(card, deleteCard, toggleLikeCallback, openImagePopupCallback) {\n  var cardTemplate = document.querySelector(\"#card-template\").content;\n  var cardElement = cardTemplate.querySelector(\".card\").cloneNode(true);\n  var cardImage = cardElement.querySelector(\".card__image\");\n  var cardTitle = cardElement.querySelector(\".card__title\");\n  var deleteButton = cardElement.querySelector(\".card__delete-button\");\n  var likeButton = cardElement.querySelector(\".card__like-button\");\n  cardImage.src = card.link;\n  cardImage.alt = card.alt;\n  cardTitle.textContent = card.name;\n  deleteButton.addEventListener(\"click\", function () {\n    return deleteCard(cardElement);\n  });\n  likeButton.addEventListener(\"click\", function () {\n    return toggleLikeCallback(likeButton);\n  });\n  cardImage.addEventListener(\"click\", function () {\n    return openImagePopupCallback(card);\n  });\n  return cardElement;\n}\nfunction deleteCard(cardElement) {\n  cardElement.remove();\n}\n\n// Функция лайка\nfunction toggleLikeCallback(likeButton) {\n  likeButton.classList.toggle(\"card__like-button_is-active\");\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\",\n  alt: \"Изображение гор Архыза с белым снегом у подножия и зеленой травой на вершинах\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\",\n  alt: \"Изображение незамерзшей извилистой реки посреди припорошенного снегом леса\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\",\n  alt: \"Изображение серых девятиэтажек одного из спальных районов г. Иваново\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\",\n  alt: \"Изображение камчатской равнины с мелкой травяной порослью на переднем плане и полузаснеженной горой на заднем\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\",\n  alt: \"Изображение прямой железной дороги посреди зеленого леса\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\",\n  alt: \"Изображение скалистого берега темного цвета на фоне замерзшего озера Байкал\"\n}];\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeByEsc: () => (/* binding */ closeByEsc),\n/* harmony export */   closeClickByOverlay: () => (/* binding */ closeClickByOverlay),\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\n// Функция открытия попапов\nfunction openPopup(popup) {\n  popup.classList.add(\"popup_is-opened\");\n  document.addEventListener(\"keydown\", closeByEsc);\n  popup.addEventListener(\"click\", closeClickByOverlay);\n}\n\n// Функция закрытия попапов\nfunction closePopup(popup) {\n  popup.classList.remove(\"popup_is-opened\");\n  document.removeEventListener(\"keydown\", closeByEsc);\n  popup.removeEventListener(\"click\", closeClickByOverlay);\n}\n\n// Обработчик закрытия по Escape\nfunction closeByEsc(event) {\n  if (event.key === \"Escape\") {\n    var activePopup = document.querySelector(\".popup_is-opened\");\n    if (activePopup) {\n      closePopup(activePopup);\n    }\n  }\n}\n// Обработчик закрытия по клику на оверлей или кнопку закрытия\nfunction closeClickByOverlay(event) {\n  var activePopup = event.target.closest(\".popup_is-opened\");\n  if (event.target === activePopup || event.target.classList.contains(\"popup__close\")) {\n    closePopup(activePopup);\n  }\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cards.js */ \"./src/components/cards.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal.js */ \"./src/components/modal.js\");\n\n\n\n\n\n// DOM узлы\nvar cardInput = document.querySelector(\".popup__input_type_card-name\");\nvar urlInput = document.querySelector(\".popup__input_type_url\");\nvar formElementNewCard = document.querySelector(\".popup__form[name=new-place]\");\nvar popupAddNewCard = document.querySelector(\".popup_type_new-card\");\nvar popupEditProfile = document.querySelector(\".popup_type_edit\");\nvar popupFullImage = document.querySelector(\".popup_type_image\");\nvar buttonOpenPopupAddNewCard = document.querySelector(\".profile__add-button\");\nvar cardList = document.querySelector(\".places__list\");\nvar popupImage = document.querySelector(\".popup_type_image\");\nvar photoPopupImage = popupImage.querySelector(\".popup__image\");\nvar captionPopupImage = popupImage.querySelector(\".popup__caption\");\nvar buttonEditProfile = document.querySelector(\".profile__edit-button\");\nvar formElementEdit = document.querySelector(\".popup__form[name=edit-profile]\");\nvar nameInput = document.querySelector(\".popup__input_type_name\");\nvar jobInput = document.querySelector(\".popup__input_type_description\");\nvar profileTitle = document.querySelector(\".profile__title\");\nvar profileDescription = document.querySelector(\".profile__description\");\npopupEditProfile.addEventListener(\"click\", _components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeClickByOverlay);\npopupAddNewCard.addEventListener(\"click\", _components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeClickByOverlay);\npopupFullImage.addEventListener(\"click\", _components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closeClickByOverlay);\nfunction renderCard(card) {\n  var cardElement = (0,_components_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(card, _components_card_js__WEBPACK_IMPORTED_MODULE_1__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_1__.toggleLikeCallback, openImagePopupCallback);\n  cardList.prepend(cardElement);\n}\nbuttonOpenPopupAddNewCard.addEventListener(\"click\", function () {\n  cardInput.value = \"\";\n  urlInput.value = \"\";\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupAddNewCard);\n});\nbuttonEditProfile.addEventListener(\"click\", function () {\n  nameInput.value = profileTitle.textContent;\n  jobInput.value = profileDescription.textContent;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupEditProfile);\n});\nformElementEdit.addEventListener(\"submit\", handleFormEditProfileSubmit);\nfunction handleFormEditProfileSubmit(evt) {\n  evt.preventDefault();\n  profileTitle.textContent = nameInput.value;\n  profileDescription.textContent = jobInput.value;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupEditProfile);\n}\nformElementNewCard.addEventListener(\"submit\", handleFormElementNewCardSubmit);\nfunction handleFormElementNewCardSubmit(evt) {\n  evt.preventDefault();\n  var newCard = {\n    name: cardInput.value,\n    link: urlInput.value,\n    alt: cardInput.value\n  };\n  renderCard(newCard); // Добавление в начало\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupAddNewCard); // Закрытие попапа\n  evt.target.reset(); // Очистка формы\n}\nfunction openImagePopupCallback(card) {\n  photoPopupImage.src = card.link;\n  photoPopupImage.alt = card.alt;\n  captionPopupImage.textContent = card.name;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupImage);\n}\n_components_cards_js__WEBPACK_IMPORTED_MODULE_2__.initialCards.forEach(renderCard);\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;