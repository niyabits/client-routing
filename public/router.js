/**
 * A simple client side router implementation with Vanilla JavaScript
 *
 * @version 3.0.0
 * @author yashguptaz
 * @license MIT
 *
 */

/*
Things to accomplish -
1. Check the URL.
  - Render the right view if available.
  - Give a 404 if the view is not available.
  - Set up backend so that every URL is directed to the 
  main index file and that file can check for a 404 or route.
2. Change State on Click
  - Get the DOM <a> Element/Create the link element 
  - Change the state and URL on Click
  
3. Create new routes.
  - Views with template tags in HTML
  - Create or Get Element from the DOM
*/

// Instantiate an array to store the information of all the routes
const routeArray = [];

// Get the main app div
const app = document.querySelector('#app');

// Defining the structure of our routes
class Route {
  constructor(name, url, view, query) {
    this.name = name;
    this.url = url;
    this.view = view;
    this.query = query;
    routeArray.push(this);
  }
}

// These can be later be assigned using Template Tags in HTML
// https://www.w3schools.com/tags/tag_template.asp
const homeView = document.querySelector('#home-view').innerHTML;
const aboutView = document.querySelector('#about-view').innerHTML;
const contactView = document.querySelector('#contact-view').innerHTML;
const blogView = document.querySelector('#blog-view').innerHTML;

// Making our new Route objects
const home = new Route('home', '/', homeView, 'nav #home');
const about = new Route('about', '/about', aboutView, 'nav #about');
const contact = new Route('contact', '/contact', contactView, 'nav #contact');
const blog = new Route('blog', '/blog', blogView, 'nav #blog');

let curLocation = window.location.pathname;

// Check if the current URL matches any decared URLindex
// Else give a 404
routeArray.every(route => {
  if (route.url === curLocation) {
    app.innerHTML = route.view
    return false;
  } else {
    app.innerHTML = '<h2>Error 404: This page does not exist :/</h2>'
    return true;
  }
})

// Initialize an onClick function to switch state.
const onRouteClick = (query, view, name, url) => {
  const element = document.querySelector(query);

  element.addEventListener('click', e => {
    app.innerHTML = view;

    routeState = { page: name };
    history.pushState(routeState, name, url);
    e.preventDefault();
  });
};

routeArray.forEach(route => {
  onRouteClick(route.query, route.view, route.name, route.url);
});
