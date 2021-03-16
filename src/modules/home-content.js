function createSection() {
  const section = document.createElement("section");
  section.classList.add("section");

  const title = document.createElement("h1");
  title.classList.add("title-section");
  title.textContent = "About";
  section.appendChild(title);

  const sectionPara = document.createElement("p");
  sectionPara.classList.add("para-section");
  sectionPara.textContent =
    "This is some text about how awsome this restaurant is. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  section.appendChild(sectionPara);
  return section;
}

function setBtnActive(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
}

function loadHome() {
  const content = document.getElementById("tab-content");
  content.classList.add("grid-layout");
  content.textContent = "";
  const aboutSection = createSection();
  setBtnActive("home");
  content.appendChild(aboutSection);
}

export default loadHome;
