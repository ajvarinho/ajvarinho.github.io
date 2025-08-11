export class Raze extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    };

    connectedCallback() {

    this.shadowRoot.innerHTML = `
      <style>

        @font-face {
          font-family: "Eurostile-ext";
          src: url("./fonts/eurostile_ext.woff") format('woff');
        }

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
        color: black;
        background: linear-gradient(180deg, dimgrey, white);
        display: flex;
        flex-direction: column;
        }

        h3 {
        font-family: Eurostile-ext;
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

        .figure {
        margin: 0;
        }

        img {
        width: 100%;
        }

        @media (max-width: 30rem) {

        .raze-wrap {
          display: flex;
          flex-direction: column;
        }
  
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
            <figure class="figure">
              <img
                src="./img/raze/raze_iphone3.png"
                alt="Image of a smartphone with Raze app opened" />
              <figcaption>Raze app - your guide</figcaption>
            </figure>
        </div>
        <div class="desc-wrap">
            <p>here is the desc app element it is text and should be longer and break into multiple lines - raze is the app imagined for exploration, funy bizness an dmore more more</p>
        </div>
        <div class="styleguide-wrap">
            <p>The app's bold color pallete emphasizes the dynamics of the contrast. Through research and testing, it was discovered users tended to 
            engage more with content that was emphasized </p>
            <figure class="figure">
              <img
                src="./img/raze/raze_palette.png"
                alt="raze color palette - matrix with black, blue, yellow and grey-colored squares" />
              <figcaption>color palette</figcaption>
            </figure>
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