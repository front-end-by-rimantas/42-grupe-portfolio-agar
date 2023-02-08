import { ourProductNavData } from '../data/ourProductNavData.js';

function putElements(num) {
    let HTML = ['', '', ''];
    let colNmb = 0;
    let j = 0;
    let k = 0;

    let width = document.defaultView.innerWidth;
    console.log('===========');
    console.log(width);
    if (width > 1200) {
        colNmb = 3;
    } else if (width > 768) {
        colNmb = 2;
    } else {
        colNmb = 1;
    }
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
