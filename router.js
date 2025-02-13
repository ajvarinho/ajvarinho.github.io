console.log('alo transitions');

const about = `
        <div class="content-card">
            <p>Resume</p>
            <img src="../public/img/me.png" alt="" class="content-card__img">
        </div>

        <div class="content-card">

            <p>hello, my name is Nikola and I'm</p>
            <p>
                web designer, creative coder and developer<br/>
                based in Berlin
            </p>

            <p>
                I love creating functional solutions with unconventional design <br/>
                experimenting with motion graphics and
            </p>
            <p>interactions</p>

            <p>
                My MA degree in philosophy and art history, together with experience in web development <br/>
                resulted in interest for deeper creative exploration of web and computational aesthetics.
            </p>
            <p>
                My designs are inspired by renaissance paintings, post-modern deconstruction, <br/>
                early graffitti, album art and fonts, as well as the aesthetics of<br/>
                pre-2001 Internet era. <br/>
                I like to call it digital situationism.
            </p>
        </div>`;

const work = `
        <div class="template__main">


            <div class="content-wrap archivo-test">
                <p id="template__desc" class="content-title archivo-test">{{}}</p>
                <div id="template__grid-wrap" class="template__grid-wrap">

                </div>
            </div>
        </div>
        `

const aboutBtn = document.getElementById('about');
const workBtn = document.getElementById('work');
const contactBtn = document.getElementById('contact');
const contentWrapper = document.getElementById('content-wrapper');

aboutBtn.addEventListener('click', ()=>{
    contentWrapper.innerHTML = about;
});

workBtn.addEventListener('click', ()=>{
    contentWrapper.innerHTML = work;
});

contactBtn.addEventListener('click', ()=>{
    contentWrapper.innerHTML = contact;
});

// document.addEventListener("click", (e) => {
//     const { target } = e;
//     console.log('clicked on', target)
//     if (!target.matches("nav a")) {
//         return;
//     }
//     e.preventDefault();
//     route();
// });

// const routes = {
//     404: {
//         template: "/templates/404.html",
//         title: "404",
//         description: "Page not found",
//     },
//     "/": {
//         template: "/templates/index.html",
//         title: "Home",
//         description: "This is the home page",
//     },
//     "/about": {
//         template: "/templates/about.html",
//         title: "About",
//         description: "This is the about page",
//     },
//     "/work": {
//         template: "/templates/work.html",
//         title: "Work",
//         description: "Projects",
//         //
//     },
//     "/contact": {
//         template: "/templates/contact.html",
//         title: "Contact",
//         description: "Contact",
//         //
//     },
//     "/work/webdev": {
//         template: "/templates/work-template.html",
//         title: "webdev",
//         description: "This is the portfolio page",
//     },


//     "/work/design": {
//         template: "/templates/work-template.html",
//         title: "design",
//         description: "This is the portfolio page",
//     },

    
//     "/work/texts": {
//         template: "/templates/work-template.html",
//         title: "texts",
//         description: "This is the portfolio page",
//     },

//     "/work/drawings": {
//         template: "/templates/work-template.html",
//         title: "drawings",
//         description: "This is the portfolio page",
//     },

//     "/work/experiments": {
//         template: "/templates/work-template.html",
//         title: "experiments",
//         description: "EXP",
//     },
// };

// const JSONRoute = '../data.json';

// async function getData() {
//     const url = JSONRoute;
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       return json;
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
  
// const route = (event) => {
//     event = event || window.event; // get window.event if event argument not provided
//     event.preventDefault();
//     // window.history.pushState(state, unused, target link);
//     window.history.pushState({}, "", event.target.href);
//     locationHandler();
// };



// function createProjectElement(object){

//     let title = document.createElement('p');
//     title.setAttribute('class', 'project-title');
//     title.innerHTML = object.title;
//     //
//     let desc = document.createElement('p');
//     desc.setAttribute('class', 'project-desc');
//     desc.innerHTML = object.description;
//     //
//     let link = document.createElement('a');
//     link.setAttribute('class', 'project-link');
//     link.innerHTML = object.link;
//     link.href = object.link;
//     //
//     let screenshotWrap = document.createElement('div');
//     screenshotWrap.setAttribute('class', 'screenshot-wrap')
//     //
//     let projectCard = document.createElement('div');
//     projectCard.setAttribute('class', 'grid-item');

//     console.log(object.screenshots, typeof object.screenshots)
//     object.screenshots.forEach(element => {
//         let screenShot = new Image();
//         screenShot.alt = element.title;
//         screenShot.src = element.url;
//         screenshotWrap.appendChild(screenShot);
//     })

//     projectCard.appendChild(title);
//     projectCard.appendChild(desc);
//     projectCard.appendChild(link);
//     projectCard.appendChild(screenshotWrap);

//     if(projectWrapper !== null){
//         projectWrapper.appendChild(projectCard);
//     }
// }

// let projectWrapper;

// const locationHandler = async () => {
//     //bilo const
//     let location = window.location.pathname; // get the url path

//     // if the path length is 0, set it to primary page route
//     if (location.length == 0) {
//         location = "/";
//     }
//     // get the route object from the urlRoutes object
//     //bilo const 
//     let route = routes[location] || routes["404"];

//     // get the html from the template
//     const html = await fetch(route.template).then((response) => response.text());

//     //tu npr get the data from api

//     let activeRoute = route.title;

//     if(location.length !== 0){
//         console.log(location, typeof location, location.length)
//         document.getElementById("content").innerHTML = html;

//     // animate  transition    
//     // setTimeout(() => {
//     //     contentWrap = document.querySelector('.content-wrap');
//     //     contentWrap.classList.add('changeContent')
//     //     }, 200);

//         //
//         let currentRoute = location;

//         if(currentRoute.length > 10) {
//             document.querySelector('.title-wrap').style.animation = 'none';
//             document.querySelector('.nav-main').style.animation = 'none';
//         }

//         let data = await getData();

//         let activeData = data[activeRoute];

//         console.log(activeData)

//         setTimeout(()=>{
//             projectWrapper = document.getElementById('template__grid-wrap');
//             if(activeData !== undefined){
//                 activeData.list.forEach(element => {
//                     createProjectElement(element);
//                 })
//             }
//         }, 100)

//         setTimeout(() => {
//             document.getElementById('template__title').innerHTML = currentRoute;
//         }, 100);

//         setTimeout(() => {
//             document.getElementById('template__desc').innerHTML = activeData.description;
//         }, 100);
//     }

//     //animate transition pt.2 

//     // setTimeout(() => {
//     //     //document.getElementById("content").classList.remove('changeContent')
//     //     contentWrap.classList.remove('changeContent')
//     //   }, 500);

//     document.getElementById("content").setAttribute('title', route.title);
//     // set the title of the document to the title of the route
//     document.title = route.title;
//     // set the description of the document to the description of the route
//     document
//         .querySelector('meta[name="description"]')
//         .setAttribute("content", route.description);
// };


// // add an event listener to the window that watches for url changes
// window.onpopstate = locationHandler;
// // call the urlLocationHandler function to handle the initial url
// window.route = route;
// // call the urlLocationHandler function to handle the initial url
// locationHandler();
