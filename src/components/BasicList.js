import { Component } from './components.js';
import { Pokemon } from './pokemon.js';

export class PokeList extends Component {
  pokemons;
  template;
  constructor(pokemons, selector) {
    super();
    this.pokemons = pokemons;
    this.template = this.createTemplate();
    this.outRender(selector);
    pokemons.forEach((pokemon) => {
      new Pokemon(pokemon, 'slot.pokeItem');
    });
  }
  createTemplate() {
    let template = `
            <ul>
                <slot class="pokeItem"></slot>
            </ul>
        `;
    return template;
  }
}
