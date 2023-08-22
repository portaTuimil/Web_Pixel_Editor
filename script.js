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

container.addEventListener("mousedown", function(e) {
    mouseOn = true;
    e.target.setAttribute('style', `background: ${colorValue};`);
});
  
container.addEventListener("mouseup", function(e) {
    mouseOn = false;

});


/*
container.addEventListener('touchmove', ()=>{
    e.preventDefault();

    const changedTouch = e.changedTouches[0];
    const target = document.elementFromPoint(
      changedTouch.clientX,
      changedTouch.clientY
    );
    currentTouchedDiv = target.id;
  
    if (!target.closest('.pixel')) return;
    if (currentTouchedDiv !== prevTouchedDiv) {
      prevTouchedDiv = currentTouchedDiv;
      currentTouchedDiv.setAttribute('style', `background: ${colorValue};`);;
}});*/

const handleUserAction = (event) => {
    if (event.type === "pointerdown") {
      lastCell = null;
    }
    
    if (event.pointerType === "touch") {
      handleTouchActions(event);
    }
};

const handleTouchActions = (event) => {
    // Get the grid cell element based on the touch event's clientX and clientY
    // coordinates. If the element is not found or is not a grid cell, return
    // and do nothing.
    const targetCell = document.elementFromPoint(event.clientX, event.clientY);
    if (targetCell === null || !targetCell.classList.contains("grid-square")) {
      return;
    }
  
    targetCell.setAttribute('style', `background: ${colorValue};`);
};




window.addEventListener("mouseover", (e)=>{
    if (e.target.classList != "box"){
        mouseOn = false;
    }
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
gridSize.addEventListener('change', (event)=> {
    (function gridSizeGenerator(){
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
    })()
});

//Fill:
let fill = document.querySelector('#Fill');

fill.addEventListener('click', ()=> {
    document.querySelectorAll('.box').forEach(pixel =>{
        pixel.setAttribute('style', `background: ${colorValue};`);
        mouseOn = false});
});
