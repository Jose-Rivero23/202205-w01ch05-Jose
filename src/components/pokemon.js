import { PokemonModel } from '../interface/pokeComponents.js';
import { Component } from './components.js';

export class Pokemon extends Component {
  pokemon;
  template;
  constructor(pokemon, selector) {
    super();
    this.pokemon = new PokemonModel();
    this.template = this.createTemplate();
    this.addRender(selector);
  }
  createTemplate() {
    let template = `
            <li class="pokemon-card">
                <a href="details.html"><div class="pokemon-card__picture"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png" alt="" /></div>
                <div class="pokemon-card__name">

                    <h3>${this.pokemon.name}</h3>
                </div>
                </a>


            </li>
        `;
    return template;
  }
}
