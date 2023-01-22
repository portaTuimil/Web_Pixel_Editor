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