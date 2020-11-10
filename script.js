"use strict"

// JavaScript der styrer burgermenu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav_links');

// Lyt efter click på burgermenu
burger.addEventListener("click", () => {
    // Vis/skjul menu
    nav.classList.toggle("nav_active");
    // Tilføjer/fjerner "animation" på burgermenu
    burger.classList.toggle("toggle");
});

document.querySelector("#logo").addEventListener("click", logoClick);

function logoClick() {
    location.href = "index.html";
}
