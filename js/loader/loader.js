import {SERVER_URL} from '../data/game-data';
import adaptServerData from '../data/data-adapter';
import checkStatus from '../utils/check-status';
import toJSON from '../utils/to-json';

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}`)
      .then(checkStatus)
      .then(toJSON)
      .then(adaptServerData);
  }
}
