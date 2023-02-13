import { ourProductNavData } from '../data/ourProductNavData.js';

function putElements(num) {
    let HTML = '';

    for (const item of ourProductNavData.tags[num].projects) {
        HTML += `<div class ="element">`;
        HTML += `<img class="ourPr-img" src="${ourProductNavData.path}${ourProductNavData.projects[item - 1].src}.jpg.webp" alt="Image">`;
        HTML += `<img class="ourPr-img overlay" src="${ourProductNavData.path}${ourProductNavData.projects[item - 1].srcZoom}.jpg" alt="Image">`;
        HTML += `<a href="#" class="overlay fa fa-plus ov-fa"></a>`;
        HTML += `<p class="overlay ov-txt">${ourProductNavData.projects[item - 1].srcTxt}</p>`;
        HTML += `</div>`;
    }
    document.getElementById('productBox').innerHTML = HTML;
}

export { putElements };
