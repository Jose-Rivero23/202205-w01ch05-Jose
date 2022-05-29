import { Component } from './Component.js';
export class PokeCard extends Component {
    pokemon;
    template;
    constructor(pokemon, selector) {
        super();
        this.pokemon = pokemon;
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let template = `
            <li class="pokemon-card">
            <div class="pokemon-card__name">

                  
                  <div class="title"> <div class="title_id"><h3>${this.pokemon.id}</h3></div> <div class="title_name">
                  <h3>${this.pokemon.name}</h3>  </div></div> 
                    <a href="./details.html"> 
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png" alt="" /></a>
                </div>
               
                
            </li>
        `;
        return template;
    }
}
