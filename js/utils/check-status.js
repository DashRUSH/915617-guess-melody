/**
 * Функция проверки ответа сервера для fetch
 * @param {object} response - ответ сервера
 * @return {*} - ответ, если всё ок, иначе ошибку
 */
const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default checkStatus;
