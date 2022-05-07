const grid = document.querySelector('.grid');
const size = document.querySelector('.grid-size');

let gridLength;

size.addEventListener('change', changeGrid);
function changeGrid() {
    const count = grid.getElementsByTagName('div').length;
    

    for (let i=0; i<count; i++ ) {
        const div = document.querySelector('.square');
        grid.removeChild(div);
    }

    gridLength = parseInt(size.value);
    for (let i=0; i<gridLength**2; i++ ) {
        const content = document.createElement('div');
        content.classList.add('square');
        content.style.height = `${320/gridLength-2}px`;
        content.style.width = `${320/gridLength-2}px`;
        grid.appendChild(content);
    }
    const hit = document.querySelectorAll('.square');
    hit.forEach(hit => hit.addEventListener('mouseover', colorSquare));

}





const hit = document.querySelectorAll('.square');
hit.forEach(hit => hit.addEventListener('mouseover', colorSquare));

function colorSquare() {
    this.style.backgroundColor = 'black';
}
