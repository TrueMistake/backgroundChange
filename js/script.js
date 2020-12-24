const body = document.querySelector('body');
const btn = document.querySelector('.change');
const text = document.querySelector('.text');

btn.addEventListener('click', () => {
    const rgb = `rgb(${randomInteger(0,255)},${randomInteger(0,255)},${randomInteger(0,255)})`;
    body.style.backgroundColor = rgb;
    text.innerText = rgb;
});

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
