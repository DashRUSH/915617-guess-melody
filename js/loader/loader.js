import {APP_ID, SERVER_URL} from '../data/game-data';
import adaptServerData from '../data/data-adapter';
import checkStatus from '../utils/check-status';
import toJSON from '../utils/to-json';

export default class Loader {
  static async loadData() {
    const response = await fetch(`${SERVER_URL}/questions`);
    const responseChecked = await checkStatus(response);
    const responseToJSON = await toJSON(responseChecked);
    return adaptServerData(responseToJSON);
  }

  static async loadResults(id = APP_ID) {
    const response = await fetch(`${SERVER_URL}/stats/:${id}`);
    const responseChecked = await checkStatus(response);
    return toJSON(responseChecked);
  }

  static async saveResults(data, id = APP_ID) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    const response = await fetch(`${SERVER_URL}/stats/:${id}`, requestSettings);
    return checkStatus(response);
  }
}
