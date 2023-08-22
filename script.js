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





let isMouseDown;
container.addEventListener("pointerdown", (event) => {
    isMouseDown = true;
    handleUserAction(event);
});

container.addEventListener("pointermove", (event) => {
    if (isMouseDown) {
      handleUserAction(event);
    }
});

container.addEventListener("pointerup", () => {
    isMouseDown = false;
});

const handleUserAction = (event) => {

    if (event.pointerType === "mouse") {
      handleMouseActions(event);
    } else if (event.pointerType === "touch") {
      handleTouchActions(event);
    }
  };
let lastCell;
const handleMouseActions = (event) => {
    // Return if the target cell is not a valid grid square.
    const targetCell = event.target;
    if (targetCell === null || !targetCell.classList.contains("box")) {
      return;
    }
  
    // if the lastCell is the same as the target just return and do nothing
    if (lastCell === event.target) return;
  
    lastCell = event.target;
    handlePenTool(targetCell);
};


const handlePenTool = (target) => {
    target.style.backgroundColor = colorValue;
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
