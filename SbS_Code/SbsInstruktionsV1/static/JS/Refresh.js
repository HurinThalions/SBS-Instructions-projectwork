let canvas;
let ctx;

function startAnleitung(){
    canvas = document.getElementById('canvas')
    loadImages();
    draw();
}

function loadImages(){
    backgroundImage.src = 'SVG/SVG_Hintergrund1.svg'
}

function draw(){
    ctx.drawImage(backgroundImage, 0, 0);
}