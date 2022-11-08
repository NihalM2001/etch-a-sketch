let container = document.getElementById('container');

let userEntry = parseInt(prompt("enter a side of the grid"));
let gridSize = userEntry * userEntry;
let grid;

createGrid(userEntry,gridSize);

function createGrid(userEntry,gridSize) 
{
    container.style.gridTemplateColumns = `repeat(${userEntry}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userEntry}, 1fr)`;

    for (let i = 0; i < gridSize; i++) 
    {
        grid = document.createElement('div');
        grid.classList.add('grid');
        container.append(grid);
    }
    
}


