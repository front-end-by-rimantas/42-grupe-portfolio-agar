// IMPORT

import { ourProductNavData } from '../data/ourProductNavData.js';

// EXECUTION

/* header: start */
/* header: end */

/* our project: start */
const ourProductListDOM = document.getElementById('our_product');
const itemOpDOM = ourProductListDOM.querySelectorAll('.ourPr');
console.log(itemOpDOM);
let HTML = '';
for (const item of ourProductNavData) {
    HTML += `<div class="btn ourPr">${item.name}</div>`;
}
ourProductListDOM.innerHTML = HTML;

/* our project: end */

/* footer: start */
/* footer: end */
