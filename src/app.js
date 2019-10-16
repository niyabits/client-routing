/**
 * A simple client side router implementation with Vanilla JavaScript
 *
 * @version 2.0.0
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
// @TODO: Set up backend so that every URL is directed to index and checked for a URL or 404

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
const homeView = `<h1>Home</h1>`;
const aboutView = `<h1>About</h1>`;
const contactView = `<h1>Contact</h1>`;
const blogView = `<h1>Blog</h1>`;

// Default view
app.innerHTML = homeView;

// Making our new Route objects
const home = new Route('home', '/', homeView, 'nav #home');
const about = new Route('about', '/about', aboutView, 'nav #about');
const contact = new Route('contact', '/contact', contactView, 'nav #contact');
const blog = new Route('blog', '/blog', blogView, 'nav #blog');

let curLocation = window.location.pathname;
// console.log(curLocation);
// console.log(routeArray);

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
  console.log(route);
  onRouteClick(route.query, route.view, route.name, route.url);
});
