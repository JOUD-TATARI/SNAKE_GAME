import { SNAKE_SPEED,
     update as updateSnake, 
     draw as drawSnake ,
     getSnakeHead,
     snakeInterSection,
    } 
    from "./snake.js";

 import {
    update as updateFood, 
    draw as drawFood,
    } from "./food.js";
    
import { outsideGrid } from "./grid.js";



let lastRenderTime=0;
let gameOver=false;
export const gameBoard=document.getElementById("game-board")

function main(currentTime)
{

if (gameOver)
{
    document.querySelector(".description").style.visibility="visible"
    document.querySelector(".description").style.opacity="1"  
    return;
}
window.requestAnimationFrame(main)
const secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
if (secondsSinceLastRender<1/SNAKE_SPEED) return;

console.log("hi")
lastRenderTime=currentTime;
update();
draw();
}
window.requestAnimationFrame(main)

function update()
{
  updateSnake()
  updateFood()
  checkDeath()
}
function draw()
{
    gameBoard.innerHTML="";
   drawSnake(gameBoard)
   drawFood(gameBoard)
}

function checkDeath()
{
    gameOver=outsideGrid(getSnakeHead()) || snakeInterSection();
}

document.querySelector(".OK").onclick=function ()
{
    // window.location="/";
     window.location.reload(true);
    document.querySelector(".description").style.visibility="hidden"
    document.querySelector(".description").style.opacity="0"
}
document.querySelector(".CANCEL").onclick=function ()
{
    close();
}
document.querySelector(".STOP").onclick=function ()
{
    stop();
}
