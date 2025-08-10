export class Raze extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    };

    connectedCallback() {
    const rows = parseInt(this.getAttribute('rows')) || 12;
    const cols = parseInt(this.getAttribute('cols')) || 5;

    this.shadowRoot.innerHTML = `
      <style>
        .raze-wrap {
        position: relative;
        display: grid;
        grid-template-rows: 60% 40%;
        grid-template-columns: 40% 60%;
        }

        .raze-wrap > div {
        border: 1px solid black;
        }

        .title-wrap {
        height: 60vh;
        color: black;
        background-color: gray;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        }

        h3 {
        text-align: center;
        }

        .tags-wrap {
        display: flex;
        justify-content: space-evenly;
        }

        .tag {
        padding: .5rem 1rem;
        border: 1px solid;
        border-radius: 6px;
        }

        .image-wrap {
        background-color: blue;
        }
      </style>

      <section class="raze-wrap">
        <div class="title-wrap">
            <h3 class="title">RAZE</h3>
            <div class="tags-wrap">
            <div class="tag">ux/ui</div>
            <div class="tag">mobile app</div>
            <div class="tag">mozda jos nesto</div>
            </div>
        </div>
        <div class="image-wrap">
            here is the image
        </div>
        <div class="desc-wrap">
            <p>here is the desc app element it is text and should be longer and break into multiple lines - raze is the app imagined for exploration, funy bizness an dmore more more</p>
        </div>
        <div class="styleguide-wrap">
            here hben wir styleguide wrapp
        </div>

      </section>
    `;

    const moons = this.shadowRoot.querySelectorAll('.moon');
    moons.forEach((moon) => {
      moon.addEventListener('mouseover', () => {
        moon.classList.toggle('move');
      });
      moon.addEventListener('click', () => {
        moon.classList.add('clicked');
        setTimeout(() => moon.classList.remove('clicked'), 600);
      });
    });
  }
}

customElements.define('raze-app', Raze);