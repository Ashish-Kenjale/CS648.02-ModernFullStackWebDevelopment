"use strict";

var nameComponent = React.createElement("div", {
  id: "out"
}, React.createElement("h2", {
  id: "name_comp"
}, "Ashish Kenjale"));
var pictureComponent = React.createElement("div", {
  id: "picture_out"
}, React.createElement("img", {
  id: "picture_comp",
  src: "./image.jpg"
}));
var introComponent = React.createElement("div", {
  id: "intro_out"
}, React.createElement("p", {
  id: "intro_comp"
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
var buttonComponent = React.createElement("div", {
  id: "button_out"
}, React.createElement("a", {
  href: "https://github.com/Ashish-Kenjale"
}, React.createElement("button", {
  id: "button_comp"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));