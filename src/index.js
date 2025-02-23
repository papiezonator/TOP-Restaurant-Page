import "./styles.css";
import { contentCreator } from "./home.js";
import { menuCreator } from "./menu.js";
import { createContact } from "./contact.js";

window.addEventListener("load", () => {
    contentCreator();
}) 

/* HOMEPAGE */

const homeButton = document.querySelector("#homeButton");

homeButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    contentCreator();
})

/* MENU SECTION */

const menuButton = document.querySelector("#menuButton");

menuButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    menuCreator();
})

/* CONTACT SECTION */

const contactButton = document.querySelector("#contactButton");

contactButton.addEventListener("click", () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    createContact();
})
