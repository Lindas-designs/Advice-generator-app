"use strict";
// //fetching a random advice from API

const adviceText = document.querySelector(".advice-text");
const adviceNo = document.querySelector(".advice-number");
const diceButton = document.querySelector(".dice-button");

diceButton.addEventListener("click", function (e) {
  e.preventDefault();
  //fetching a random advice from API
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceTextAPI = data.slip.advice;
      const adviceNoAPI = data.slip.id;
      // Display the advice text and ID in your HTML
      adviceText.innerText = `"${adviceTextAPI}"`;

      adviceNo.innerText = `Advice #${adviceNoAPI}`;
    })
    .catch((error) => console.error(error));
});
