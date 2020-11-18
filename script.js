"use strict"

// JavaScript der lytter efter om der bliver scrollet på siden
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 400;

    // Tilføjer/fjerner class'en der ændrer farve på menuen
    header.classList.toggle('scrolling_active', windowPosition);
})

// JavaScript der styrer burgermenu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav_links');

// Lyt efter click på burgermenu
burger.addEventListener("click", () => {
    // Vis/skjul menu
    nav.classList.toggle("nav_active");
    // Tilføjer/fjerner "animation" på burgermenu
    burger.classList.toggle("toggle");
    document.querySelector("header").classList.add("scrolling_active");
});

document.querySelector("#logo").addEventListener("click", () => {
    location.href = "index.html";
});
