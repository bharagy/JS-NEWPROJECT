
function big(img) {
    document.querySelector('.big').src=img;
}

function path(color) {
    var path = document.querySelector('.path');
    path.style.background = color;
}

function bg(background) {
    var bg = document.querySelector('.container');
    bg.style.background = background;
}

function changeText(newText){
    document.querySelector('#display').textContent = newText;
}
