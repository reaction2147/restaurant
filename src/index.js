import createPage from "./modules/load-page";
import loadHome from "./modules/home-content";
import loadMenu from "./modules/menu-content";
import loadContact from "./modules/contact-content";

init();

function init() {
  createPage();
  loadNav();
  loadContact();
  loadHome();
}

function loadNav() {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");
  homeBtn.addEventListener("click", loadHome);
  menuBtn.addEventListener("click", loadMenu);
  contactBtn.addEventListener("click", loadContact);
}
