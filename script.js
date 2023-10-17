"use strict"
document.addEventListener("DOMContentLoaded", function () {
    const plateau = document.querySelector(".container");
    const size = 10;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cases = document.createElement("div");
            cases.classList.add((i + j) % 2 === 0 ? "marron" : "marronClair");

            if ((i + j) % 2 === 0 && i < 4) {
                const pieceNoire = document.createElement("div");
                pieceNoire.classList.add("pionNoir");
                cases.appendChild(pieceNoire);
            }

            if ((i + j) % 2 === 0 && i > 5) {
                const pieceBlanche = document.createElement("div");
                pieceBlanche.classList.add("pionBlanc");
                cases.appendChild(pieceBlanche);
            }

            plateau.appendChild(cases);
        }
    }
});