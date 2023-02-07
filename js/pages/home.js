// IMPORT

import { ourProductNavData } from '../data/ourProductNavData.js';

// EXECUTION

/* header: start */
/* header: end */

/* our project: start */
const ourProductListDOM = document.getElementById('our_product');
let HTML = '';
let idNum = 0;
for (const item of ourProductNavData) {
    idNum++;
    if (item.name === 'All') {
        HTML += `<div id="nmbr${idNum}" class="btn ourPr invertOurPr">${item.name}</div>`;
    } else {
        HTML += `<div id="nmbr${idNum}" class="btn ourPr">${item.name}</div>`;
    }
}
ourProductListDOM.innerHTML = HTML;
const ourProductionNavListDOM = ourProductListDOM.querySelectorAll('.ourPr');
console.log(ourProductionNavListDOM);
const ourProductNavDOM = document.getElementById('nmbr3');
ourProductNavDOM.addEventListener('click', klikas(3));

function klikas(parametras) {
    let HTML = '';
    let idNum = 0;
    for (const item of ourProductNavData) {
        idNum++;
        if (idNum === parametras) {
            HTML += `<div id="nmbr${idNum}" class="btn ourPr invertOurPr">${item.name}</div>`;
        } else {
            HTML += `<div id="nmbr${idNum}" class="btn ourPr">${item.name}</div>`;
        }
    }
    ourProductListDOM.innerHTML = HTML;
}

/* our project: end */

/* footer: start */
/* footer: end */
