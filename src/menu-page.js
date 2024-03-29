import "./menu-style.css";
import clearPage from "./clear-page";
import kuotiePanggang from "./kuotie-panggang.jpeg";
import kuotieRebus from "./kuotie-rebus.jpeg";

const loadMenuPage = function() {
    const content = document.querySelector("#content");

    const createElements = function() {
        const menuContent = document.createElement("div");
        const container = document.createElement("div");

        const createItem = function(name, description, price, source) {
            const itemContainer = document.createElement("div");
            const itemImage = new Image();
            itemImage.src = source;
            const itemInformation = document.createElement("div");
            const itemTitle = document.createElement("h1");
            const itemDescription = document.createElement("p");
            const itemPrice = document.createElement("p");

            const addClass = function() {
                menuContent.classList.add("menu-content");
                container.classList.add("menu-container");
                itemContainer.classList.add("item-container");
                itemImage.classList.add("item-image");
                itemInformation.classList.add("item-information");
                itemTitle.classList.add("item-title");
                itemDescription.classList.add("item-description");
                itemPrice.classList.add("item-price");

                document.querySelector("#menu").classList.add("underlined");
                document.querySelector("#home").classList.remove("underlined");
                document.querySelector("#contact").classList.remove("underlined");
            };

            const addText = function() {
                itemTitle.textContent = name;
                itemDescription.textContent = description;
                itemPrice.textContent = price;
            }

            const appendChild = function() {
                content.appendChild(menuContent);
                menuContent.appendChild(container);
                container.appendChild(itemContainer);
                itemContainer.appendChild(itemImage);
                itemContainer.appendChild(itemTitle);
                itemContainer.appendChild(itemInformation);
                itemInformation.appendChild(itemDescription);
                itemInformation.appendChild(itemPrice);
            };
        
        addClass();
        addText();
        appendChild();
        };

    createItem("Roasted Kuotie", "Five pieces of pork-filled crispy goodness.", "Rp 40k", kuotiePanggang);
    createItem("Steamed Kuotie", "Five pieces of pork-filled delicate goodness.", "Rp 36k", kuotieRebus)
    };

    clearPage();
    createElements();
};

export default loadMenuPage;