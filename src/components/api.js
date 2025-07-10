const API_URL = "https://nomoreparties.co/v1/wff-cohort-41";
const token = "6ebf5ed5-3d41-418f-9e87-d9ea42a4528a";

// Универсальный метод запроса
const request = (url, options = {}) => {
  return fetch(url, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  );
};

// Получение данных пользователя
export function fetchUserProfile() {
  return request(`${API_URL}/users/me`);
}

// Загрузка карточек
export function fetchCards() {
  return request(`${API_URL}/cards`);
}

// Обновление профиля
export function updateUserProfile(name, about) {
  return request(`${API_URL}/users/me`, {
    method: "PATCH",
    body: JSON.stringify({ name, about }),
  });
}

// Добавление карточки
export function addNewCard(name, link) {
  return request(`${API_URL}/cards`, {
    method: "POST",
    body: JSON.stringify({ name, link }),
  });
}

// Удаление карточки
export function deleteCard(cardId) {
  return request(`${API_URL}/cards/${cardId}`, {
    method: "DELETE",
  });
}

// Лайк/дизлайк карточки
export function toggleLike(cardId, isLiked) {
  return request(`${API_URL}/cards/likes/${cardId}`, {
    method: isLiked ? "DELETE" : "PUT",
  });
}

// Обновление аватара
export function updateAvatar(avatarUrl) {
  return request(`${API_URL}/users/me/avatar`, {
    method: "PATCH",
    body: JSON.stringify({ avatar: avatarUrl }),
  });
}

export const getUserData = fetchUserProfile;
export const getCards = fetchCards;
export const editingProfileApi = updateUserProfile;
