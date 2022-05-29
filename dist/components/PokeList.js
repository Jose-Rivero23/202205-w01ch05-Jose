import { PokeNav } from '../components/nav.js';
import { Component } from './Component.js';
import { PokeCard } from './PokeCard.js';
export class PokeList extends Component {
    pokemons;
    template;
    constructor(pokemons, selector) {
        super();
        this.pokemons = pokemons;
        this.template = this.createTemplate();
        this.outRender(selector);
        pokemons.forEach((pokemon) => {
            new PokeCard(pokemon, 'slot.pokemon');
        });
        new PokeNav('.poke-nav');
    }
    createTemplate() {
        let template = `
            <ul class = "poke-list">
                <slot class="pokemon"></slot>
            </ul>
            
        `;
        return template;
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
