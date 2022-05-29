import { HttpStoreClass } from '../services/Http.store.class.js';
import { PokeList } from './PokeList.js';
export class Controller {
    startIndex;
    constructor() {
        const pokeApi = new HttpStoreClass();
        const promises = [];
        this.startIndex = 591;
        for (let i = this.startIndex; i <= this.startIndex + 9; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((values) => {
            new PokeList(values, 'slot.list');
        });
        console.log('hola');
    }

    manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }
    handlerButton(ev) {
        const target = ev.target.dataset.name;
        console.log('click', target);
    }
}
