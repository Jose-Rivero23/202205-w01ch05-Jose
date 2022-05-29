import { HttpStoreClass } from '../services/Http.store.class.js';
import { Component } from './Component.js';
import { PokeNav } from './nav.js';
export class PokeDetails extends Component {
    pokemon;
    template;
    constructor(pokemon, selector) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
        new PokeNav('.poke-nav');
    }
    createTemplate() {
        let template = `
            <div class="pokemon-card__name">

                  
                  <div class="title"> <div class="title_id"><h3>${this.pokemon.id}</h3></div> <div class="title_name">
                  <h3>${this.pokemon.name}</h3>  </div></div> 
                    <a href="./details.html"> 
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png" alt="" /></a>
                </div>
               
                
            </li>
        `;
        return template;
    }
}
