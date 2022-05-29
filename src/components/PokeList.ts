/* eslint-disable no-unused-vars */
import { PokeNav } from '../../dist/components/nav.js';
import { iPokemon } from '../interface/component.js';
import { Component } from './Component.js';
import { PokeCard } from './PokeCard.js';

export class PokeList extends Component {
    template: string;
    constructor(public pokemons: Array<iPokemon>, selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
        pokemons.forEach((pokemon) => {
            new PokeCard(pokemon, 'slot.item');
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
}
