function setBtnActive(id) {
  const activeBtn = document.querySelector(".tab.active");
  if (activeBtn) activeBtn.classList.remove("active");

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add("active");
}

function createSection() {
  const section = document.createElement("section");
  section.classList.add("contact-section");

  const contactInfo = document.createElement("p");
  contactInfo.classList.add("contact-info");
  contactInfo.textContent = "TEST";
  section.appendChild(contactInfo);
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
