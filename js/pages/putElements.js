import { ourProductNavData } from '../data/ourProductNavData.js';

function putElements(num) {
    let HTML = '';

    for (const item of ourProductNavData.tags[num - 1].projects) {
        HTML += `<img class="ourPr-img" src="${ourProductNavData.path}${item}.jpg.webp" alt="Image">`;
    }
    document.getElementById('productBox').innerHTML = HTML;
}

export { putElements };
