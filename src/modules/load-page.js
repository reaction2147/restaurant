function createNav(id) {
    const nav = document.createElement("nav");
    nav.setAttribute("id", id);
    const homeBtn = createBtn("home", "home");
    nav.appendChild(homeBtn);
    return nav;
  }
  
  function createBtn(id, text) {
    const button = document.createElement("button");
    button.setAttribute("id", id);
    const span = document.createElement("span");
    span.textContent = text;
    button.appendChild(span);
    button.classList.add("tab");
    return button;
  }
  
  function createPage() {
    const container = document.getElementById("container");
    const navBar = createNav("nav");
    container.appendChild(navBar);
  }
  
  export default createPage;