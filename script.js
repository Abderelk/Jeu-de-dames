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
            const pionNoir = document.createElement("div")
            pionNoir.classList.add("pionNoir")
            cases.appendChild(pionNoir)
        }
        // création des pionsBlancs
        else if ((i + j) % 2 === 0 && i > 5) {
            const pionBlanc = document.createElement("div")
            pionBlanc.classList.add("pionBlanc")
            cases.appendChild(pionBlanc)
        }
        // Ajout de l'événement focus pour sélectionner le pion
        cases.addEventListener('focus', function () {
            const pionSelectionner = this.querySelector('.pionNoir, .pionBlanc');
            if (pionSelectionner) {
                selectedPiece = pionSelectionner;
                console.log('Pion sélectionné :', selectedPiece);
            }
        });
        // déplacement des pions
        cases.addEventListener('focus', function () {
            if (selectedPiece) {
                const currentPosition = selectedPiece.parentElement;
                if (this === currentPosition) {
                    // Si la case sélectionnée est la case actuelle du pion, ne rien faire
                    return;
                }
                const position = this.getBoundingClientRect();
                const currentPos = currentPosition.getBoundingClientRect();
                const rowDiff = Math.abs(position.top - currentPos.top);
                const colDiff = Math.abs(position.left - currentPos.left);

                // Vérifier si le déplacement est d'une case en diagonale
                if ((rowDiff < 100 && colDiff < 100)) {
                    this.appendChild(selectedPiece);
                    console.log('Déplacement réussi !');
                } else {
                    console.log('Déplacement invalide !');
                }
            }
        });
    }
}
