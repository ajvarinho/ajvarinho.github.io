export class threeD extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    };

    connectedCallback() {

    this.shadowRoot.innerHTML = `
      <style>
        .room {
            position: relative;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 15px;
            perspective-origin: 50% calc(50% - 2em);
            overflow: hidden;
            /**/
            width: 100vw;
        }

        .scene {
            position: relative;
            transform-style: preserve-3d;
        }


        .wall {
            position: absolute;
            background-color: #9a9ad6;
            width: 20em;
            height: 20em;
            background-image: repeating-radial-gradient( circle at 0 0, transparent 0, #e1e7ed .1em ), repeating-linear-gradient( #03076055, #030760 );
        }

        .front {
            top: -15em;
            left: -10em;
            transform: translateZ(-2em);
        }

        .left {
            top: -15em;
            left: -20em;
            transform: rotateY(-90deg);
            /**/
            display: flex;
            align-content: center;
            flex-direction: column;
            text-align: center;
        }

        .right {
            top: -15em;
            left: 0;
            transform: rotateY(90deg);
            background: pink;
        }

        .floor {
            top: 2em;
            z-index: 0;
            transform:
            translate(-50%, -50%)
            rotateX(90deg)
            translateZ(-3em);
        }

        .ceiling {
            top:0;
            left:0;
            transform:
            translate(-50%, -50%)
            rotateX(90deg)
            translateZ(15em);
        }

        .txt {
            writing-mode: vertical-rl;
        }
      </style>

        <div class="room">
            <div class="scene">
                <div class="front wall">

                </div>
                <div class="left wall">
                    <p class="txt">webdev</p>
                    <p class="txt">webdev</p>
                    <p class="txt">webdev</p>
                    <p class="txt">webdev</p>
                    <p class="txt">webdev</p>
                </div>
                <div class="right wall">

                </div>
                <div class="floor wall">

                </div>
                <div class="ceiling wall">

                </div>
            </div>
        </div> 
    `;

    //fn tu
  }
}

customElements.define('three-d', threeD);