function setBtnActive(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

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
  title.textContent = "TEST";
  section.appendChild(title);

  return section;
}

export default loadMenu;
