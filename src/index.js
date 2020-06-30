// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

(function(window, document) {
  const menu = document.getElementById("menu"),
    aboutItem = document.getElementById("about"),
    solutionsItem = document.getElementById("solutions"),
    pricingItem = document.getElementById("pricing"),
    contactItem = document.getElementById("contact"),
    blogItem = document.getElementById("post"),
    ctaItem = document.querySelector(".cta"),
    WINDOW_CHANGE_EVENT = ("onorientationchange" in window) ? "orientationchange" : "resize";

  function toggleMenu() {
    menu.classList.toggle("open");

    aboutItem.classList.toggle("it");
    solutionsItem.classList.toggle("it");
    pricingItem.classList.toggle("it");
    contactItem.classList.toggle("it");
    blogItem.classList.toggle("it");
    ctaItem.classList.toggle("it");

    document.getElementById("toggle").classList.toggle("x");
  }

  function closeMenu() {
    if (menu.classList.contains("open")) {
      toggleMenu();
    }
  }

  document.getElementById("toggle").addEventListener("click", function(e) {
    toggleMenu();
    e.preventDefault();
  });

  window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(window, window.document);
