import { ourProductNavData } from '../data/ourProductNavData.js';

function ourProdClick(parm, place) {
    let HTML = '';
    let idNum = 0;
    for (const item of ourProductNavData) {
        idNum++;
        const a = 'nmbr' + idNum;
        if (idNum === parm) {
            HTML += `<div id="${a}" class="btn ourPr invertOurPr">${item.name}</div>`;
        } else {
            HTML += `<div id="${a}" class="btn ourPr">${item.name}</div>`;
        }
    }
    place.innerHTML = HTML;
    for (let i = 1; i <= 6; i++) {
        const a = 'nmbr' + i;
        document.getElementById(a).addEventListener(`click`, () => {
            ourProdClick(i, place);
        });
    }
}

export { ourProdClick };
