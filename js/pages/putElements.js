import { ourProductNavData } from '../data/ourProductNavData.js';

function putElements(num) {
    let HTML = ['', '', ''];
    let colNmb = 3;
    let j = 0;
    let k = 0;
    console.log('===========');
    for (const item of ourProductNavData.tags[num - 1].projects) {
        k = j % colNmb;
        j++;
        console.log(k, j, item);
        HTML[k] += `<img class="ourPr-img" src="${ourProductNavData.path}${item}.jpg.webp" alt="Image">`;
    }
    // const view = document.defaultView;
    // console.log(view.innerWidth, view.innerHeight);
    // console.log(HTML);
    document.getElementById('productBox-1').innerHTML = HTML[0];
    document.getElementById('productBox-2').innerHTML = HTML[1];
    document.getElementById('productBox-3').innerHTML = HTML[2];
}

export { putElements };
