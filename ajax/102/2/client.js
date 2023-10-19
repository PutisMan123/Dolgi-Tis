let div = document.querySelector('div');
let button = document.querySelector('button');

let pages = [
    './page1.html',
    './page2.html',
    './page3.html',
    './page4.html',
    './page5.html',
];

function makeScrollPage() {
    let count = 0;
    return function () {
        fetch(pages[count]).then(
            res => {
                return res.text()
            }
        ).then(
            text => {
                div.innerHTML = text;
            }
        )
        count++;
    }
}

let scrollPage = makeScrollPage();



for (let i = 0; i < pages.length; i++) {
    button.addEventListener('click', scrollPage)
}