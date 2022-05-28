import { HttpStoreClass } from '..services/HttpStore.js';
import { PokeList } from './BasicList.js';
export class Filter {
  started;
  constructor() {
    const api = new HttpStoreClass();
    const promises = [];
    this.started = 1;
    for (let i = this.started; i <= this.started + 10; i++) {
      promises.push(api.getPokemon(i));
    }
    Promise.all(promises).then((values) => {
      new PokeList(values, 'slot.pokedex');
    });
  }
}
