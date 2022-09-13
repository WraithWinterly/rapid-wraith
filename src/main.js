import "./input.css";

const viewMenuButton = document.getElementById("menu-collaspe-button");
const headerContainer = document.getElementsByClassName("js-header-mobile-link");
const headerCollaspeButton = document.getElementById("header-collaspe-button");

viewMenuButton.addEventListener("click", () => {
  const expanded = viewMenuButton.getAttribute("aria-expanded") === "true";
  viewMenuButton.innerHTML = expanded ? "Hide Menu" : "View Menu";
});

for (let i = 0; i < headerContainer.length; i++) {
  let aElm = headerContainer[i];

  aElm.addEventListener("click", () => {
    headerCollaspeButton.click();
  });
}
