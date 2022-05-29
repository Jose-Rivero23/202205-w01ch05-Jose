import { Component } from './Component.js';

export class PokeNav extends Component {
    template;
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        let template = `
            <section class="nav">
                <div class="button" role="button" data-name="previous">Anterior</div>
                <div class="button" role="button" data-name="next">Siguiente</div>
            </section>
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
