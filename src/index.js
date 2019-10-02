// Getting elements from DOM
const app = document.querySelector("#app");
const links = document.querySelectorAll("a");

// Defining various states
const appStates = {
  Home: "<h1>Home</h1>",
  About: "<h1>About</h1>",
  Blog: "<h1>Blog</h1>"
};

document.addEventListener(onDOMContentLoaded, () => {
  // Set some state
  console.log("Set state according to URL")
})

// Setting current State.
let currentState = appStates.Home; // Default state of the app!
app.innerHTML = currentState;

const changeState = () => {
  links.forEach(element => {
    // console.log(element.innerHTML); // .pathname
    //  history.pushState({page: 1}, "title 1");

    element.addEventListener("click", e => {
      window.history.pushState(
        { page: `${element.innerHTML}` },
        "title 1",
        `${element.innerHTML}`
      );
      let curPageName = element.innerHTML;
      app.innerHTML = appStates[curPageName];
      e.preventDefault();
    });
  });
};

changeState();
