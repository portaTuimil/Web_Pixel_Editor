//Grid generator:
const container = document.querySelector('.container');

function makeGrid(columns, rows){

    for (let i = 0; i < (columns * rows); i++){

        const div = document.createElement('div')
        container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')


    }
}
makeGrid(24,24);

//Función de dibujo:
let mouseOn = false;

container.addEventListener("mousedown", function() {
    mouseOn = true;
});
  
container.addEventListener("mouseup", function() {
    mouseOn = false;
});

let mode = 'normal';
let color = 'rgb(1,1,1)'

let pixels = document.querySelectorAll('.box');
pixels.forEach(pixel=> pixel.addEventListener('mouseover', ()=> {
    if (mouseOn === true){
        pixel.setAttribute('style', `background: ${color};`);
}}));

//Reset:
let reset = document.querySelector('#Clear');
reset.addEventListener('click', ()=>{
    pixels.forEach(pixel =>{
        pixel.setAttribute('style', 'background: white;');
        mouseOn = false;
    })
});
