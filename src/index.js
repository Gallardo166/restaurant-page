import loadHomePage from "./initial-page";
import loadMenuPage from "./menu-page";
import loadContactPage from "./contact-page";

const header = (function() {
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const contactButton = document.querySelector("#contact");

    const init = function() {
        loadHomePage();
        addEvents();
    }

    const addEvents = function() {
        homeButton.addEventListener("click", loadHomePage);
        menuButton.addEventListener("click", loadMenuPage);
        contactButton.addEventListener("click", loadContactPage);
    }

    init();
})();