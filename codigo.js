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
makeGrid(16,16);

//Función de dibujo:
let mouseOn = false;
//container.addEventListener('mousedown', ()=> {mouseOn === false? mouseOn = true: mouseOn = false;});
container.addEventListener("mousedown", function() {
    mouseDown = true;
});
  
container.addEventListener("mouseup", function() {
    mouseDown = false;
});


let pixels = document.querySelectorAll('.box');
pixels.forEach(pixel=> pixel.addEventListener('mouseover', ()=> {
    if (mouseOn === true){
        pixel.setAttribute('style', 'background: grey;');
}}));

//Reset:
let reset = document.querySelector('#Clear');
reset.addEventListener('click', ()=>{
    pixels.forEach(pixel =>{
        pixel.setAttribute('style', 'background: white;');
    })
});
