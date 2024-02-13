import Phone from "./phone.svg";
import Instagram from "./instagram.svg";
import Home from "./home-city.svg";
import clearPage from "./clear-page";

import "./contact-page-style.css";

const loadContactPage = function() {
    const content = document.querySelector("#content");

    const createElements = function() {
        const contactContent = document.createElement("div");
        const phoneIcon = new Image();
        const instagramIcon = new Image();
        const homeIcon = new Image();

        phoneIcon.src = Phone; 
        instagramIcon.src = Instagram;
        homeIcon.src = Home;

        const telephoneNumber = document.createElement("p");
        const instagramAccount = document.createElement("p");
        const address = document.createElement("p");
 
        const telephoneContainer = document.createElement("div");
        const instagramContainer = document.createElement("div");
        const addressContainer = document.createElement("div");
 
        const addClass = function() {
            contactContent.classList.add("contact-content");
            telephoneContainer.classList.add("contact-container");
            instagramContainer.classList.add("contact-container");
            addressContainer.classList.add("contact-container");

            phoneIcon.classList.add("icon");
            instagramIcon.classList.add("icon");
            homeIcon.classList.add("icon");
        };
       
        const addText = function() {
            telephoneNumber.textContent = "000000000";
            instagramAccount.textContent = "@juragan_kuotie";
            address.textContent = "North Jakarta, Indonesia";
        };

        const appendChild = function() {
            content.appendChild(contactContent);
            contactContent.appendChild(telephoneContainer);
            contactContent.appendChild(instagramContainer);
            contactContent.appendChild(addressContainer);
            telephoneContainer.appendChild(phoneIcon);
            telephoneContainer.appendChild(telephoneNumber);
            instagramContainer.appendChild(instagramIcon);
            instagramContainer.appendChild(instagramAccount);
            addressContainer.appendChild(homeIcon);
            addressContainer.appendChild(address);
        };

       addClass();
       addText();
       appendChild();
    };

    clearPage();
    createElements();
};

export default loadContactPage;