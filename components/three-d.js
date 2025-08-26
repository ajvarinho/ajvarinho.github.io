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
            filter: url(#feTurbulence-basic);
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


        <svg viewBox="0 0 0 0">
            <filter id='feTurbulence-basic' x='0%' y='0%' width='100%' height='100%'>
                <feTurbulence id="turbulence_el" baseFrequency="0.05" />
                <feDiffuseLighting in='noise' lighting-color='#d4ff3bff' surfaceScale='2'>
                    <feDistantLight azimuth='45' elevation='60' />
                </feDiffuseLighting>
            </filter>
        </svg>

        <div class="room">
            <div class="scene">
                <div class="front wall">

                </div>
                <div class="left wall">
                </div>
                <div class="right wall">

                </div>
                <div class="floor wall">

                </div>
                <div class="ceiling wall">

                </div>
            </div>
        </div> 
        <div class="input">

            <div class="">
                <label for="bFControl-x">base frequency x</label>
                <input type="range" min="0.001" max="1" value="0.05" step="0.001" id="bFControl-x"/> 
                <span id="value-x">0.05</span>
            </div>

            <div class="">
                <label for="bFControl-y">base frequency y</label>
                <input type="range" min="0.001" max="1" value="0.05" step="0.001" id="bFControl-y"/> 
                <span id="value-y">0.05</span>
            </div>

            <div class="">
                <label><input type="radio" class="radio" name="type" value="fractalNoise" />fractalNoise</label>
                <label><input type="radio" class="radio" name="type" value="turbulence" checked/> turbulence</label>
            </div>

            <div class="">
                <label for="numOct">numOctaves</label>
                <input type="range" min="1" max="10" value="1" step="1" id="numOct"/>
                <span id="oct-value">1</span>
            </div>

            <div class="">
                <label for="numOct">seed</label>
                <input type="range" min="1" max="10" value="1" step="1" id="seed"/>
                <span id="seed-value">1</span>
            </div>

            <div class="">
                <label for="color">color</label>
                <input type="color" id="color" value=""/>
                <span id="color-value">rgba(0, 0, 0, 1)</span>
            </div>
            <div class="">
                <label for="surfaceScale">surface scale</label>
                <input type="range" min="1" max="20" value="1" step="1" id="surface-range"/>
                <span id="surface-range-value">1</span>
            </div>
            <div class="">
                <label for="azimuth">azimuth</label>
                <input type="range" min="1" max="90" value="1" step="1" id="azimuth"/>
                <span id="azimuth-value">1</span>
            </div>
            <div class="">
                <label for="elevation">elevation</label>
                <input type="range" min="1" max="100" value="1" step="1" id="elevation"/>
                <span id="elevation-value">1</span>
            </div>
        </div>
    `;

    //fn tu
    const feTurbulence_basic = this.shadowRoot.getElementById('feTurbulence-basic');
    const turbulence_el = this.shadowRoot.getElementById('turbulence_el');


    const bFControlX = this.shadowRoot.getElementById("bFControl-x");
    const bFControlY = this.shadowRoot.getElementById("bFControl-y");
    const effect = this.shadowRoot.getElementById('turbulence_el');
    const valX = this.shadowRoot.querySelector("#value-x");
    const valY = this.shadowRoot.querySelector("#value-y");

    bFControlX.addEventListener("change", updatebFSVG);
    bFControlX.addEventListener("input", updatebFSVG);

    bFControlY.addEventListener("change", updatebFSVG);
    bFControlY.addEventListener("input", updatebFSVG);

    //BASE FREQUENCY

    function updatebFSVG() {
        let vX = bFControlX.value;
        let vY = bFControlY.value	
        valX.innerText = vX;
        valY.innerText = vY;
        effect.setAttribute("baseFrequency", `${vX}, ${vY}`);
    };

    // NOISE 
    var radios = this.shadowRoot.querySelectorAll(".radio");
        
    for (var i = 0, length = radios.length; i < length; i++){
        radios[i].addEventListener('change', updateSVG);
    }
        
    function updateSVG() {
        effect.setAttribute("type", this.value);
    }

    //NUMBER OF OCTAVES

    
    var numOct = this.shadowRoot.getElementById("numOct"),

        val = this.shadowRoot.querySelector("#oct-value");

        numOct.addEventListener("change", updatenumOct);
        numOct.addEventListener("input", updatenumOct);

        function updatenumOct() {
            let v = numOct.value;
            val.innerText = v;
            effect.setAttribute("numOctaves", v);
    }


    //SEED


    var seedVal = this.shadowRoot.getElementById("seed"),

        val = this.shadowRoot.querySelector("#seed-value");

        seedVal.addEventListener("change", updateseedVal);
        seedVal.addEventListener("input", updateseedVal);

        function updateseedVal() {
            let v = seedVal.value;
            val.innerText = v;
            effect.setAttribute("seed", v);
    }


    //LIGHT



        const lightSrc = this.shadowRoot.querySelector('feDiffuseLighting');
        const lightType = this.shadowRoot.querySelector('feDistantLight');

        const surfaceRange = this.shadowRoot.getElementById('surface-range');
        const colorPicker = this.shadowRoot.getElementById('color');
        const azimuth = this.shadowRoot.getElementById('azimuth');
        const elevation = this.shadowRoot.getElementById('elevation');

        let colorVal = this.shadowRoot.querySelector("#color-value");
        let surfaceRangeVal = this.shadowRoot.getElementById('surface-range-value');
        let azimuthVal = this.shadowRoot.getElementById('azimuth-value');
        let elevationVal = this.shadowRoot.getElementById('elevation-value');

        colorPicker.addEventListener("change", changeColor);
        colorPicker.addEventListener("input", changeColor);

        surfaceRange.addEventListener("change", changeSurfaceRange);
        surfaceRange.addEventListener("input", changeSurfaceRange);

        azimuth.addEventListener("change", changeAzimuth);
        azimuth.addEventListener("input", changeAzimuth);

        elevation.addEventListener("change", changeElevation);
        elevation.addEventListener("input", changeElevation);

        function changeColor() {
            let v = colorPicker.value;
            colorVal.innerText = v;
            lightSrc.setAttribute("lighting-color", v);
        }

        function changeSurfaceRange() {
            let rangeVal = surfaceRange.value;
            surfaceRangeVal.innerText = rangeVal;
            lightSrc.setAttribute("surfaceScale", rangeVal);
        }

        function changeAzimuth() {
            let azmValue = azimuth.value;
            azimuthVal.innerText = azmValue;
            lightType.setAttribute('azimuth', azmValue);
        }

        function changeElevation() {
            let elvValue = elevation.value;
            elevationVal.innerText = elvValue;
            lightType.setAttribute('elevation', elvValue);
        }


    //
  }
}

customElements.define('three-d', threeD);