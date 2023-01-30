//Grid generator (generates the first grid):
const container = document.querySelector('.container');

function makeGrid(columns, rows){

    for (let i = 0; i < (columns * rows); i++){

        const div = document.createElement('div')
        container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');


    }
}
makeGrid(24,24);

//Modes and Mouse State Checker:
let mouseOn = false;

container.addEventListener("mousedown", function() {
    mouseOn = true;
});
  
container.addEventListener("mouseup", function() {
    mouseOn = false;
});

let pixels = document.querySelectorAll('.box');
        pixels.forEach(pixel=> pixel.addEventListener('mouseover', ()=> {
            if (mouseOn === true){
            pixel.setAttribute('style', `background: ${colorValue};`);
}}));

let color = document.querySelector('#Color')
let colorValue = color.value;
color.addEventListener('input', ()=>{
    colorValue = color.value;
})

//Reset:
let reset = document.querySelector('#Clear');
reset.addEventListener('click', ()=>{
    document.querySelectorAll('.box').forEach(pixel =>{
        pixel.setAttribute(`style`, `background-color: #ffffff;`);
        mouseOn = false;
    })
});

//Don't drag!!!!
container.addEventListener('mousedown', e => {
    e.preventDefault();
});

//Grid Size (slider update):

let GridSizeValueOutput = document.querySelector('#GridSizeValueOutput')
let gridSize = document.querySelector('#GridSize')
GridSizeValueOutput.textContent = 24

//Number updater of the slider
gridSize.addEventListener('input', (event)=> {
    GridValue = event.target.value
    GridSizeValueOutput.textContent = GridValue
});

//New grid generator:
gridSize.addEventListener('mouseup', (event)=> {
    GridValue = event.target.value
    GridSizeValueOutput.textContent = GridValue;
    makeGrid(GridValue, GridValue);
    
    //Escritor
    let pixels = document.querySelectorAll('.box');
        pixels.forEach(pixel=> pixel.addEventListener('mouseover', ()=> {
            if (mouseOn === true){
            pixel.setAttribute('style', `background-color: ${colorValue};`);
    }}));
    
    //Reset:
    pixels.forEach(pixel =>{
        pixel.setAttribute('style', 'background: white;');
        mouseOn = false});
});

//Fill:
let fill = document.querySelector('#Fill');

fill.addEventListener('click', ()=> {
    document.querySelectorAll('.box').forEach(pixel =>{
        pixel.setAttribute('style', `background: ${colorValue};`);
        mouseOn = false});
});
