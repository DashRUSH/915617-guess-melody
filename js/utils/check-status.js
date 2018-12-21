/**
 * Функция проверки ответа сервера для fetch
 * @param {object} response - ответ сервера
 * @return {*} - ответ, если всё ок, иначе ошибку
 */
const STATUS_OK_MIN = 200;
const STATUS_OK_MAX = 300;
const checkStatus = (response) => {
  if (response.status >= STATUS_OK_MIN && response.status < STATUS_OK_MAX) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default checkStatus;
