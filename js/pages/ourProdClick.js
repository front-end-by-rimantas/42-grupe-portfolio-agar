import { ourProductNavData } from '../data/ourProductNavData.js';

function ourProdClick(parm, place) {
    let HTML = '';
    let idNum = 0;
    for (const item of ourProductNavData) {
        idNum++;
        if (idNum === parm) {
            HTML += `<div id="nmbr${idNum}" class="btn ourPr invertOurPr">${item.name}</div>`;
        } else {
            HTML += `<div id="nmbr${idNum}" class="btn ourPr">${item.name}</div>`;
        }
    }
    place.innerHTML = HTML;
}

export { ourProdClick };
