/* eslint-disable no-unused-vars */
import { iPokemon } from '../interface/component.js';
import { Component } from './Component.js';

export class PokeCard extends Component {
    template: string;
    constructor(public pokemon: iPokemon, selector: string) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        let template = `
        
        
        `;

        return template;
    }
}
