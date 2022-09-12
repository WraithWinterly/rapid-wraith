import "./input.css";

const viewMenuButton = document.getElementById("menu-collaspe-button");

viewMenuButton.addEventListener("click", () => {
  const expanded = viewMenuButton.getAttribute("aria-expanded") === "true";
  viewMenuButton.innerHTML = expanded ? "Hide Menu" : "View Menu";
});
