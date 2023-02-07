// IMPORT

import { ourProductNavData } from '../data/ourProductNavData.js';
import { ourProdClick } from '../pages/ourProdClick.js';

// EXECUTION

/* header: start */
/* header: end */

/* our project: start */
const ourProductListDOM = document.getElementById('our_product');
let HTML = '';
let idNum = 0;
ourProdClick(1, ourProductListDOM);
const num3 = document.getElementById('nmbr3');
console.log(num3);
num3.addEventListener('click', ourProdClick(3, ourProductListDOM));
// document.getElementById('.nmbr3').onclick = ourProdClick(3, ourProductListDOM);

/* our project: end */

/* footer: start */
/* footer: end */
