"use strict";

const plateau = document.querySelector(".container");
let selectedPiece = null;

// création des cases du plateau
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        // création des cases
        const cases = document.createElement(((i + j) % 2 == 0 ? "button" : "div"))
        plateau.appendChild(cases)
        cases.classList.add((i + j) % 2 == 0 ? "marron" : "marronClair")
        // création des pionsNoir
        if ((i + j) % 2 === 0 && i < 4) {
            const pion = document.createElement("div")
            pion.classList.add("pionNoir")
            cases.appendChild(pion)
        }
        // création des pionsBlancs
        else if ((i + j) % 2 === 0 && i > 5) {
            const pion = document.createElement("div")
            pion.classList.add("pionBlanc")
            cases.appendChild(pion)
        }

        // Ajout de l'événement focus pour sélectionner le pion
        cases.addEventListener('focus', function () {
            const pion = this.querySelector('.pionNoir, .pionBlanc');
            if (pion) {
                selectedPiece = pion;
                console.log('Pion sélectionné :', selectedPiece);
            }
        });
        // déplacement des pions
        cases.addEventListener('click', function () {
            if (this.tagName === "BUTTON" && selectedPiece) {
                this.appendChild(selectedPiece);
            }
        });
    }
}