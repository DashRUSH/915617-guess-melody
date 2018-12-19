import {APP_ID, SERVER_URL} from '../data/game-data';
import adaptServerData from '../data/data-adapter';
import checkStatus from '../utils/check-status';
import toJSON from '../utils/to-json';

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`)
      .then(checkStatus)
      .then(toJSON)
      .then(adaptServerData);
  }

  static loadResults(id = APP_ID) {
    return fetch(`${SERVER_URL}/stats/:${id}`).then(checkStatus).then(toJSON);
  }

  static saveResults(data, id = APP_ID) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/:${id}`, requestSettings).then(checkStatus);
  }
}
