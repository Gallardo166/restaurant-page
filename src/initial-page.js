import Kuotie from "./kuotie.jpg";
import "./initial-page-style.css";
import loadMenuPage from "./menu-page";
import clearPage from "./clear-page";

const loadHomePage = function() {
    const content = document.querySelector("#content");

    const createElements = function() {
        const homeContent = document.createElement("div");
        const image = new Image();
        image.src = Kuotie;
        const title = document.createElement("h1");
        const description = document.createElement("p");
        const orderButton = document.createElement("button");

        const addClass = function() {
            homeContent.classList.add("home-content");
            image.classList.add("image");
            title.classList.add("title");
            description.classList.add("description");
            orderButton.classList.add("order-btn");
            document.querySelector("#home").classList.add("underlined");
            document.querySelector("#menu").classList.remove("underlined");
            document.querySelector("#contact").classList.remove("underlined");
        };

        const addText = function() {
            title.textContent = "Juragan Kuotie";
            description.textContent = "Premium homemade dumplings.";
            orderButton.textContent = "Order";
        }

        const appendChild = function() {
            content.appendChild(homeContent);
            homeContent.appendChild(image);
            homeContent.appendChild(title);
            homeContent.appendChild(description);
            homeContent.appendChild(orderButton);
        };

        const addEvent = function() {
            orderButton.addEventListener("click", loadMenuPage);
        }

        addEvent();
        addClass();
        addText();
        appendChild();

    };

    clearPage();
    createElements();
};

export default loadHomePage;