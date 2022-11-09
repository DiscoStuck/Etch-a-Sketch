/* Default grid */
let squareNumberInitial = 16
let mode = "normal"


/* Random Color */
function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}


/* Add divs */
const grid = document.querySelector(".grid")

const addDivs = function(squareNumber){
    let totalSquares = squareNumber ** 2
    for (let i = 0; i < totalSquares; i++){
        let squarePercentage = 100 / squareNumber
        let squareSize = 600 / squareNumber
        let square = document.createElement("div")
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px` 
        square.classList.add("square")
    
        grid.appendChild(square)
}
}

addDivs (squareNumberInitial)


/* Slider value */
const rangeValue = document.querySelector(".rangeValue")
const squareRange = document.querySelector(".squareRange")

rangeValue.textContent = squareRange.value

squareRange.addEventListener("change", function(){
    rangeValue.textContent = squareRange.value
})


/* Hover color change */

let square = document.querySelectorAll(".square")
let activatePainting = function(){square.forEach(sqr => {
    sqr.addEventListener("mouseover", function(e){
        if(mode == "normal"){
            e.target.style.backgroundColor = "black"
            e.target.style.opacity = 1
        }
        else if (mode == "randomColor"){
            e.target.style.backgroundColor = randomHsl()
            e.target.style.opacity = 1
        }
    })
})
}

activatePainting();


/* Button add divs */
const setGrid = document.querySelector(".setGrid")

setGrid.addEventListener("click", function(){
    const divs = document.querySelectorAll(".square")
    divs.forEach(div => div.remove())
    addDivs(squareRange.value);
    square = document.querySelectorAll(".square")
    activatePainting();
})

/* Mode buttons */
const modeButtons = document.querySelectorAll(".modeButton") 

console.log(modeButtons)


modeButtons.forEach(button => {
    console.log()
    button.addEventListener('click', function(e){
        mode = e.target.id
    })

});