import { iPokemon } from '../interface/component.js';
import { Component } from './Component.js';

export class PokeDetails extends Component {
    template: string;
    constructor(public pokemon: iPokemon, selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        let template = `
            
            <div class="pokemon-card__name">

                  
                  <div class="title"> <div class="title_id"><h3>${this.pokemon.id}</h3></div> <div class="title_name">
                  <h3>${this.pokemon.name}</h3>  </div></div> 
                    <a href="./details.html"> 
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png" alt="" /></a>
                </div>
               
                
           
        `;

        return template;
    }
}
