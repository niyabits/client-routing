/**
 * A simple client side router implementation with Vanilla JavaScript
 *
 * @version 3.0.0
 * @author yashguptaz
 * @license MIT
 *
 */

// An Array with objects which contain data about routes
const routeArray = [];

// Get the main app div
const app = document.querySelector('#app');

// Made a Route class
class Route {
  constructor(name, url, view, query) {
    this.name = name;
    this.url = url;
    this.view = view;
    this.query = query;
    routeArray.push(this);
  }
}

// Getting our views from HTML
// These views are stored with the help of <template> tag
const homeView = document.querySelector('#home-view').innerHTML;
const aboutView = document.querySelector('#about-view').innerHTML;
const contactView = document.querySelector('#contact-view').innerHTML;
const blogView = document.querySelector('#blog-view').innerHTML;

// Instantiating new Route objects
const home = new Route('home', '/', homeView, 'nav #home');
const about = new Route('about', '/about', aboutView, 'nav #about');
const contact = new Route('contact', '/contact', contactView, 'nav #contact');
const blog = new Route('blog', '/blog', blogView, 'nav #blog');

// Get the current location
let curLocation = window.location.pathname;

// Initiate the first route
history.pushState({ page: "home" }, 'home', '/');

routeArray.every(route => {
  // Check if the current URL matches the URL of any of our routes
  if (route.url === curLocation) {
    // Set our view
    app.innerHTML = route.view
    return false;
  } else {
    // Display a 404
    app.innerHTML = '<h2>Error 404: This page does not exist :/</h2>'
    return true;
  }
})

// Initialize an onClick function to switch our state on Click
const onRouteClick = (query, view, name, url) => {
  const element = document.querySelector(query);

  element.addEventListener('click', e => {
    app.innerHTML = view;

    routeState = { page: name };
    history.pushState(routeState, name, url);
    e.preventDefault();
  });
};

// Called the above function for every route
routeArray.forEach(route => {
  onRouteClick(route.query, route.view, route.name, route.url);
});

// Added onpopstate event so that our back and forward buttons work properly
window.onpopstate = function (e) {
  routeArray.every(route => {
    if (route.name === e.state.page) {
      app.innerHTML = route.view
      return false;
    } else {
      app.innerHTML = '<h2>Error 404: This page does not exist :/</h2>'
      return true;
    }
  })
};

