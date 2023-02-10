import { ourProductNavData } from '../data/ourProductNavData.js';
import { putElements } from '../pages/putElements.js';

function ourProdClick(parm, place) {
    let HTML = '';
    let idNum = 0;
    for (const item of ourProductNavData.tags) {
        const a = 'nmbr' + idNum;
        if (idNum === parm) {
            HTML += `<div id="${a}" class="btn ourPr invertOurPr">${item.name}</div>`;
        } else {
            HTML += `<div id="${a}" class="btn ourPr">${item.name}</div>`;
        }
        idNum++;
    }
    place.innerHTML = HTML;
    putElements(parm);
    for (let i = 0; i <= 5; i++) {
        const a = 'nmbr' + i;
        document.getElementById(a).addEventListener(`click`, () => {
            ourProdClick(i, place);
        });
    }
}

export { ourProdClick };
