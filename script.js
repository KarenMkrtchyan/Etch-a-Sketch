const gridContaier = document.querySelector('.gridContainer');
const gridElement=document.createElement('div');
gridElement.classList.add('gridElement');
gridElement.style.backgroundColor='rgba()'
const slider = document.querySelector('.slider');

let gridSize=400;
let isRainbow = false;
let isErasor = false;
let isShadeing = false;

const erase = document.querySelector('#erase');
const erasor = document.querySelector('#erasor');
const rainbow = document.querySelector('#rainbow');
const grayscale = document.querySelector('#grayscale');
const increaseGrid = document.querySelector('#increaseGrid');
const decreaseGrid = document.querySelector('#decreaseGrid');
const shadeing = document.querySelector("#shadeing");



function generateGrid(){
    //resetting the grid with new values
    gridContaier.textContent='';
    console.log("slider update")
    gridDimension = gridSize/slider.value; 
    gridContaier.style.width = `${gridSize}px`;   
    gridContaier.style.height = `${gridSize}px`; 
    gridElement.style.width = `${gridDimension}px`;
    gridElement.style.height = `${gridDimension}px`;
     for(let i = slider.value;i>0;i--){
        for(let j=slider.value; j>0; j--){
            gridContaier.appendChild(gridElement.cloneNode(true));
        }
    }
    document.querySelectorAll('.gridElement').forEach(item => {
    item.addEventListener('mouseover', event=>{
        console.log("hovered");
        if(!isRainbow && !isErasor)item.style.backgroundColor="black";
        else if (isErasor) item.style.backgroundColor="white";
        else item.style.backgroundColor=randomColor();
    })
    })     
}

slider.addEventListener('click', generateGrid);
erase.addEventListener('click', generateGrid);
rainbow.addEventListener('click', () =>{
    isRainbow=true;
    isErasor=false;
    isShadeing=false;
    // generateGrid();
});
grayscale.addEventListener('click', () =>{
    isRainbow=false;
    isErasor=false;
    isShadeing=false;
    // generateGrid();
});
erasor.addEventListener('click', () =>{
    isErasor=true;
    // generateGrid();
});
increaseGrid.addEventListener('click', () =>{
    gridSize+=20;
    generateGrid();
});
decreaseGrid.addEventListener('click', () =>{
    gridSize-=20;
    generateGrid();
});
shadeing.addEventListener('click', ()=>{
    isShadeing=true;
})


function randomColor(){
    let r =Math.floor(Math.random()*255);
    let g =Math.floor(Math.random()*255);
    let b =Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}

function shade(gridElement){
    let currentShade=gridElement.style.color;
}

generateGrid();

