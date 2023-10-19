let div = document.querySelector('div');
let buttons = document.querySelectorAll('button');

let pages = [
    './page1.html',
    './page2.html',
    './page3.html'
];

for (let i = 0; i < pages.length; i++) {
    buttons[i].addEventListener('click', () => {
        fetch(pages[i]).then(
            res => {
                return res.text()
            }
        ).then(
            text => {
                div.innerHTML = text;
            }
        )
    })
}