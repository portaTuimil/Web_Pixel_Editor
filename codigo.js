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

//Modes and Mouse State Checker:
let mouseOn = false;

container.addEventListener("mousedown", function() {
    mouseOn = true;
});
  
container.addEventListener("mouseup", function() {
    mouseOn = false;
});


let mode = 'normal';
let color = 'rgb(1,1,1)'

//Reset:
let reset = document.querySelector('#Clear');
reset.addEventListener('click', ()=>{
    pixels.forEach(pixel =>{
        pixel.setAttribute('style', 'background: white;');
        mouseOn = false;
    })
});

//Don't drag!!!!
container.addEventListener('mousedown', e => {
    e.preventDefault();
    if(e.button === 0) enableMouseDown();
});

//Grid Size

let GridSizeValueOutput =24;
GridSizeValueOutput = document.querySelector('#GridSizeValueOutput')
let gridSize = 24;
gridSize = document.querySelector('#GridSize')

let GridValue = 24;
gridSize.addEventListener('input', (event)=> {
    GridValue = event.target.value
    GridSizeValueOutput.textContent = GridValue
    makeGrid(GridValue, GridValue);
    
    //Escritor
    let pixels = document.querySelectorAll('.box');
        pixels.forEach(pixel=> pixel.addEventListener('mouseover', ()=> {
            if (mouseOn === true){
            pixel.setAttribute('style', `background: ${color};`);
}}));
})
