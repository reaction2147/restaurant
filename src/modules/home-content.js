//Create the body and text for Home page 
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
    "Do you like your spurgles to be full of spegles. Do you like to spend less speckles....then come on down to Alpha Centuri Cafe. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  section.appendChild(sectionPara);
  return section;
}
// Remove current active button and set to new
function setBtnActive(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
}

// Pull functions from this page into 1 function to save on space and keep it tidy
function loadHome() {
  const content = document.getElementById("tab-content");
  content.classList.add("grid-layout");
  content.textContent = "";
  const aboutSection = createSection();
  setBtnActive("home");
  content.appendChild(aboutSection);
}
// Export the function above to call on the index.js
export default loadHome;
