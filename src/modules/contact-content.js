
function setBtnActive(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
}

function createSection() {
  const section = document.createElement("section");
  section.classList.add("contact-section");

  const contactInfo = document.createElement("h1");
  contactInfo.classList.add("contact-info");
  contactInfo.textContent = "Contact";
  section.appendChild(contactInfo);

  const tel = document.createElement("p");
  tel.classList.add("para-content");
  tel.textContent = "Tel - 94582 281941"
  section.appendChild(tel);

  const adressTitle = document.createElement('h1');
  adressTitle.classList.add('contact-info');
  adressTitle.textContent = "Address";
  section.appendChild(adressTitle);

  const address = document.createElement('p');
  address.classList.add("para-content");
  address.textContent = "Star Base Alpha";
  section.appendChild(address);
  return section;
}

function loadContact() {
  const contact = document.getElementById("tab-content");
  contact.classList.add("contact");
  contact.textContent = "";
  const contactSection = createSection();
  setBtnActive("contact");
  contact.appendChild(contactSection);
}

export default loadContact;
