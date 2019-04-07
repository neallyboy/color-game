var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

//Mode buttons event listeners
function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");    
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

//Squares event listeners
function setupSquares(){
    //Squares event listeners
    for(var i = 0; i < squares.length; i++){
        //Add click listeners to squares
        squares[i].addEventListener("click", function(){
            //Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //Compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    //Pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //Change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
    reset();
})

function changeColors(color){
    //Loop through all squares
    for(var i = 0; i < squares.length; i++){
        //Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //Make an array
    var arr = [];
    //Repeat num times
    for(var i = 0; i < num; i++){
        //Get random color and push into arr
        arr.push(randomColor());
    }
    //Return array
    return arr;
}

function randomColor(){
    //Pick "Red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //Pick "Green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //Pick "Blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}