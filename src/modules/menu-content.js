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
  const menu = createMenu(
   'https://starwarsblog.starwars.com/wp-content/uploads/2018/07/ackbar-ice-cream-tall.jpg',
    'Alien Fast Food',
    '20 Specels',
    'Alien Fast Food')
  content.appendChild(menu);
}

function createMenu(src, text, price, alt) {
  const section = document.createElement("section");
  section.classList.add("section");

  const title = document.createElement("h1");
  title.classList.add("title-section");
  title.textContent = "MENU";
  section.appendChild(title);

  const img = document.createElement("image");
  
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);

  const description = document.createElement("div");
  description.classList.add("description");

  const foodName = document.createElement("h3");
  foodName.textContent = text;

  const foodPrice = document.createElement("h2");
  foodPrice.textContent = price;

  description.appendChild(foodName);
  description.appendChild(foodPrice);

  section.appendChild(img);
  section.appendChild(description);
  
  
  return section;
}

export default loadMenu;
