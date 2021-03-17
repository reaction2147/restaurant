//this content is static. Dynamic content is pull from other pages into the CreateMain function
// Create navigation

function createNav(id) {
  const nav = document.createElement("nav");
  nav.setAttribute("id", id);
  const homeBtn = createBtn("home", "Home");
  const menuBtn = createBtn("menu", "Menu");
  const contactBtn = createBtn("contact", "Contact");
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
}

//Create buttons for navigation

function createBtn(id, text) {
  const button = document.createElement("button");
  button.setAttribute("id", id);
  const span = document.createElement("span");
  span.textContent = text;
  button.appendChild(span);
  button.classList.add("tab");
  return button;
}

//Create header

function createHeader(id, text) {
  const header = document.createElement("header");
  header.setAttribute("id", id);
  const title = document.createElement("h1");
  title.textContent = text;
  header.appendChild(title);
  return header;
}

// Create area from main content from tab buttons

function createMain(id) {
  const main = document.createElement("main");
  main.setAttribute("id", id);
  return main;
}

//Create the footer
function createFooter(id, text) {
  const footer = document.createElement('footer');
  footer.setAttribute("id", id);
  const footerText = document.createElement('h4');
  footerText.textContent = text;
  footer.appendChild(footerText);
  return footer;
}

//Create the page
function createPage() {
  // taget container
  const container = document.getElementById("container");
  //create title
  const title = createHeader("header", "This is some awesome Title");
  container.appendChild(title);
  //create nav
  const navBar = createNav("nav");
  container.appendChild(navBar);
  //create tab content
  const tabContent = createMain("tab-content");
  container.appendChild(tabContent);
  //create footer
  const footer = createFooter("footer", "Created by Nippon Arts");
  container.appendChild(footer);
}

export default createPage;

