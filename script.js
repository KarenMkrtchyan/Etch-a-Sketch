const gridContaier = document.querySelector('.gridContainer');
let gridElement=document.createElement('div');
gridElement.classList.add('gridElement');

let x = 16;
let y= 16;

let gridDimension = 960/x;

gridElement.style.width = gridDimension;
gridElement.style.height = gridDimension;

for(let i = y;i>0;i--){
    for(let j=x; j>0; j--){
        gridContaier.appendChild(gridElement.cloneNode(true));
    }   
}

document.querySelectorAll('.gridElement').forEach(item => {
    item.addEventListener('mouseover', event=>{
        console.log("hovered");
        item.classList.add("hovered");
    })
})
