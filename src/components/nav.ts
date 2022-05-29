import { Component } from './Component.js';

export class PokeNav extends Component {
    template: string;
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        let template = `
            <section class="nav">
                <div class="button" role="button" data-name="previous">Anterior</div>
                <div class="button"  role="button" data-name="next">Siguiente</div>
            </section>
        `;

        return template;
    }
    private manageComponent() {
        document
            .querySelectorAll('.button')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }
    private handlerButton(ev: Event) {
        const target = (<HTMLElement>ev.target).dataset.id as string;
        console.log('click', target);
    }
}
