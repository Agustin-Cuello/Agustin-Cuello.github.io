
class MiComponente123 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>Silent Hill</p>
        `;
    }
}

customElements.define("team-AAA", MiComponente123);