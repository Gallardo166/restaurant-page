import Kuotie from "./kuotie.jpg";
import "./initial-page-style.css";

const loadHomePage = function() {
    let content = document.querySelector("#content");

    const createElements = function() {
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
            content.appendChild(leftSide);
            content.appendChild(rightSide);

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

    createElements();
};

export default loadHomePage;