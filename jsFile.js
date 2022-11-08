let container = document.getElementById('container');

let userEntry = parseInt(prompt("Enter a side of the grid (1 to 100 is preffered)"));
let gridSize = userEntry * userEntry;

checkGridSize();

function checkGridSize()
{
    if(userEntry<1 || userEntry>100 || userEntry===null || typeof(userEntry)===String)
    {
        alert("Enter size between 1 and 100 only");
        window.location.reload();
    }
    else
    {
        createGrid(userEntry,gridSize);    
    }
}


function createGrid(userEntry,gridSize) 
{
    container.style.gridTemplateColumns = `repeat(${userEntry}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userEntry}, 1fr)`;

    for (let i = 0; i < gridSize; i++) 
    {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        container.append(grid);
        grid.addEventListener('mouseover',function(e){ e.target.style.backgroundColor='black' })
    }
}


let reset=document.querySelector('#reset');
reset.addEventListener('click',function(){ window.location.reload(); });


