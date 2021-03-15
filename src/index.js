function createPage() {
const container = document.getElementById('restaurant');
const nav = createNav('nav');
container.appendChild(nav);

}


function createNav(id) {
const nav = document.createElement('nav');
nav.setAttribute('id', id);

const homeBtn = createBtn('home', 'home');

nav.appendChild(homeBtn);

return nav;
}

function createBtn(text, id) {
const button = document.createElement('button');
button.setAttribute('id', id);
const span = document.createElement('span');
span.textContent = text;
button.appendChild('span');
button.classList.add('tab');
return button;

}

createPage();