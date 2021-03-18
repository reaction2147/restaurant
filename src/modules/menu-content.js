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

  const title = document.createElement("h1");
  title.classList.add("title-section");
  title.textContent = "MENU";
  content.appendChild(title);
  const foods = createMenu(
    "./images/alien.jpg",
    "Alien Fast Food",
    "20 Specels",
    "Alien Fast Food"
  );
  content.appendChild(foods);
}

function createMenu(src, text, price, alt) {
  const food = document.createElement("div");
  food.classList.add("food");
  const img = document.createElement("img");

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

  food.appendChild(img);
  food.appendChild(description);

  return food;
}

export default loadMenu;
