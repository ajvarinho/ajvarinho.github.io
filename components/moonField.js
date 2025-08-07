export class MoonField extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const rows = parseInt(this.getAttribute('rows')) || 12;
    const cols = parseInt(this.getAttribute('cols')) || 5;

    this.shadowRoot.innerHTML = `
      <style>
        h1 {
          color: white;
        }

        em {
          text-shadow: .3rem 1px 2px steelblue, 0 0 1em blue, 0 0 0.2em blue;
          transition-duration: .5s;
        }

        em:hover {
          text-shadow: .5rem 5px 5px steelblue, 0 5px 1em white, 0 0 0.2em blue;
        }

        .main {
          display: flex;
          flex-wrap: wrap;
          background: linear-gradient(to bottom, #64b3f4, #00a1af);
          padding: 1rem;
        }

        .main > div {
          display: flex;
          flex-direction: column;
          margin: 0.2rem;
        }

        .moon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          box-shadow: 15px 5px 15px 0 #c2e5f4 inset;
          transform: perspective(4em) translateX(20deg);
          transition: transform 0.5s, box-shadow 0.3s;
          margin: 0.3rem;
          background: #e6f7ff;
          cursor: pointer;
        }

        .moon.move {
          transform: rotateY(-180deg);
        }

        .moon.clicked {
          animation: pulse 0.6s ease-in-out;
          box-shadow: 0 0 20px 5px white;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      </style>

      <h1>This is a <em>moon</em> field</h1>
      <div class="main">
        ${Array.from({ length: rows }).map(() => `
          <div>
            ${Array.from({ length: cols }).map(() => `<div class="moon"></div>`).join('')}
          </div>
        `).join('')}
      </div>
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

customElements.define('moon-field', MoonField);
