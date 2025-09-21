export class Raze extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @font-face {
          font-family: "Eurostile-ext";
          src: url("./fonts/eurostile_ext.woff") format('woff');
        }

        img {
        width: 100%;}

        .raze-wrap {
          position: relative;
          display: grid;
          grid-template-rows: 60% 40%;
          grid-template-columns: 40% 60%;
          padding: 2rem 0;
        }

        .raze-wrap > div {
          border: 1px solid black;
        }

        .title-wrap {
          color: black;
          background: white;
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

        /*  dialog  */

        /* Reset dialog chrome */
        dialog {
          border: none;
          padding: 0;
          background: transparent;
          opacity: 0;
          transition:
            opacity 0.4s ease-out,
            overlay 0.4s ease-out allow-discrete,
            display 0.4s ease-out allow-discrete;
        }

        /* Open state for the dialog container */
        dialog[open] {
          opacity: 1;
        }

        @starting-style {
          dialog[open] {
            opacity: 0;
          }
        }

        /* Backdrop overlay */
        dialog::backdrop {
          background-color: rgba(0,0,0,0.4);
          backdrop-filter: blur(4px);
          transition:
            background-color 0.4s ease-out,
            overlay 0.4s ease-out allow-discrete,
            display 0.4s ease-out allow-discrete;
        }

        dialog[open]::backdrop {
          background-color: rgba(0,0,0,0.4);
        }

        @starting-style {
          dialog[open]::backdrop {
            background-color: rgba(0,0,0,0);
          }
        }

        /* Inner content box */
        .dialog-wrap {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          max-width: 90vw;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
          transform: scale(0.95);
          opacity: 0;
          transition:
            opacity 0.4s ease-out,
            transform 0.4s ease-out;
        }

        /* Animate content in */
        dialog[open] .dialog-wrap {
          transform: scale(1);
          opacity: 1;
        }

        @starting-style {
          dialog[open] .dialog-wrap {
            transform: scale(0.95);
            opacity: 0;
          }
        }

        /* === Carousel styles === */
        .carousel {
          position: relative;
          height: 50vh;
          width: 100%;
          aspect-ratio: 16 / 9;
          margin: auto;
          overflow: hidden;
          background-color: white;
        }

        .slides {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease-in-out;
        }

        .slide {
          width: 100%;
          flex: 0 0 100%;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        input[type="radio"] {
          display: none;
        }

        #slide1:checked ~ .slides { transform: translateX(0%); }
        #slide2:checked ~ .slides { transform: translateX(-100%); }
        #slide3:checked ~ .slides { transform: translateX(-200%); }

        .navigation {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          border: 1px solid black;
          padding: .5rem 1rem;
          border-radius: 8px;
          background: white;
        }

        .navigation label {
          width: 10px;
          height: 10px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
          opacity: 0.6;
        }

        .navigation label:hover {
          opacity: 1;
        }

        @media (max-width: 30rem) {
          .raze-wrap {
            display: flex;
            flex-direction: column;

          }
        }

        .desc-wrap > p {
          text-align: left;
        }
      </style>

      <section class="raze-wrap">
        <div class="title-wrap">
            <h3 class="title">RAZE</h3>

        </div>
        <div class="image-wrap">
          <div class="carousel" id="carousel">
            <input type="radio" name="slides" id="slide1" checked>
            <input type="radio" name="slides" id="slide2">
            <input type="radio" name="slides" id="slide3">

            <div class="slides">
              <div class="slide"><img src="./img/raze/raze_iphone3.png" alt="Raze screen 1"></div>
              <div class="slide"><img src="./img/raze/raze_home2.png" alt="Raze screen 2"></div>
              <div class="slide"><img src="./img/raze/raze_event.png" alt="Raze screen 3"></div>
            </div>

            <div class="navigation">
              <label for="slide1"></label>
              <label for="slide2"></label>
              <label for="slide3"></label>
            </div>
          </div>
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

      <!-- First zoom dialog -->
      <dialog id="zoomDialog">
        <div class="dialog-wrap">
          <img class="dialog-img" />
          <button id="close-zoom">X</button>
        </div>
      </dialog>

      <!-- Second full-size dialog -->
      <dialog id="fullDialog">
        <img class="full-dialog-img" />
      </dialog>
    `;

    // Swipe detection logic
    const slides = this.shadowRoot.querySelectorAll('input[name="slides"]');
    let current = 0;
    let startX = 0;
    const carousel = this.shadowRoot.getElementById('carousel');

    carousel.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', e => {
      let endX = e.changedTouches[0].clientX;
      let diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // swipe left
          current = (current + 1) % slides.length;
        } else {
          // swipe right
          current = (current - 1 + slides.length) % slides.length;
        }
        slides[current].checked = true;
      }
    });

     // Dialog logic
    const zoomDialog = this.shadowRoot.getElementById('zoomDialog');
    const fullDialog = this.shadowRoot.getElementById('fullDialog');
    const zoomImg = zoomDialog.querySelector('img');
    const fullImg = fullDialog.querySelector('img');

    carousel.querySelectorAll('.slide img').forEach(img => {
      img.addEventListener('click', () => {
        zoomImg.src = img.src;
        zoomDialog.showModal();
      });
    });

   this.shadowRoot.getElementById('close-zoom').addEventListener('click', ()=>{
      zoomDialog.close();
    })

    // zoomImg.addEventListener('click', () => {
    //   fullImg.src = zoomImg.src;
    //   fullDialog.showModal();
    // });

    // zoomDialog.addEventListener('click', e => {
    //   if (e.target === zoomDialog) zoomDialog.close();
    // });
    // fullDialog.addEventListener('click', e => {
    //   if (e.target === fullDialog || e.target === fullImg) fullDialog.close();
    // });
  }
}

customElements.define('raze-app', Raze);


            // <div class="tags-wrap">
            //   <div class="tag">ux/ui</div>
            //   <div class="tag">mobile app</div>
            //   <div class="tag">mozda jos nesto</div>
            // </div>