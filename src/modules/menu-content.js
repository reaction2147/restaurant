function setBtnActive(id) {
    // remove active state from button
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

    // add active state to button
  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
}

function loadMenu() {
  setBtnActive("menu");
  const content = document.getElementById("tab-content");
  content.classList.add("grid-layout");
  content.textContent = "";
  const menu = createMenu();
  content.appendChild(menu);
}

function createMenu() {
  const section = document.createElement("section");
  section.classList.add("section");

  const title = document.createElement("h1");
  title.classList.add("title-section");
  title.textContent = "MENU";
  section.appendChild(title);

  return section;
}

export default loadMenu;
