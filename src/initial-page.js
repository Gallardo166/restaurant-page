import Kuotie from "./kuotie.jpg";
import "./initial-page-style.css";
import clearPage from "./clear-page";

const loadHomePage = function() {
    const content = document.querySelector("#content");

    const createElements = function() {
        const homeContent = document.createElement("div");
        const leftSide = document.createElement("div");
        const leftTop = document.createElement("div");
        const title = document.createElement("h1");
        const description = document.createElement("p");
        const leftBottom = document.createElement("div");
        const orderButton = document.createElement("button");

        const rightSide = document.createElement("div");
        const image = new Image();
        image.src = Kuotie;

        const addClass = function() {
            homeContent.classList.add("home-content");
            leftSide.classList.add("left");
            leftTop.classList.add("left-top");
            title.classList.add("title");
            description.classList.add("description");
            leftBottom.classList.add("left-bottom");
            orderButton.classList.add("order-btn");

            rightSide.classList.add("right");
            image.classList.add("image");
        };

        const addText = function() {
            title.textContent = "Juragan Kuotie";
            description.textContent = "Premium homemade dumplings.";
            orderButton.textContent = "Order";
        }

        const appendChild = function() {
            content.appendChild(homeContent);
            homeContent.appendChild(leftSide);
            homeContent.appendChild(rightSide);

            leftSide.appendChild(leftTop);
            leftSide.appendChild(leftBottom);
            leftTop.appendChild(title);
            leftTop.appendChild(description);
            leftBottom.appendChild(orderButton);

            rightSide.appendChild(image); 
        };

        addClass();
        addText();
        appendChild();

    };

    clearPage();
    createElements();
};

export default loadHomePage;