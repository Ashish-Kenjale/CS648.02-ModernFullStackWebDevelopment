
const nameComponent = (
<div id ="out">
        <h2 id = "name_comp">Ashish Kenjale</h2>
</div>
);

const pictureComponent = (
    <div id = "picture_out">
        <img id = "picture_comp" src = "./image.jpg"/>
    </div>
);

const introComponent = (
    <div id= "intro_out">
        <p id = "intro_comp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
            
);

const buttonComponent = (
    <div id= "button_out">
        <a href="https://github.com/Ashish-Kenjale"><button id= "button_comp">VIEW MY GITHUB REPO</button></a>
    </div>

);

ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));