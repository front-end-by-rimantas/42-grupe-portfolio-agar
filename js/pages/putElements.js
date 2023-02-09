import { ourProductNavData } from '../data/ourProductNavData.js';

function putElements(num, colNmb) {
    let HTML = ['', '', ''];
    let j = 0;
    let k = 0;

    for (const item of ourProductNavData.tags[num - 1].projects) {
        k = j % colNmb;
        j++;
        HTML[k] += `<img class="ourPr-img" src="${ourProductNavData.path}${item}.jpg.webp" alt="Image">`;
    }
    document.getElementById('productBox-1').innerHTML = HTML[0];
    document.getElementById('productBox-2').innerHTML = HTML[1];
    document.getElementById('productBox-3').innerHTML = HTML[2];
}

export { putElements };
