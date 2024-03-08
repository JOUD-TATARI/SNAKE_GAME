let  inputDirection={x:0 , y:0};
let  lastInputDirection={x:0, y:0};

let Left=document.querySelector(".LEFT")
let Right=document.querySelector(".RIGHT")
let Up=document.querySelector(".UP")
let Down=document.querySelector(".DOWN")

window.addEventListener("keydown", (e)=>{
    switch (e.key) {
        case "ArrowUp":
            if(lastInputDirection.y!==0) break;
            inputDirection={x:0 , y:-1}
            break;
        case "ArrowDown":
            if(lastInputDirection.y!==0) break;
            inputDirection={x:0 , y:1}
            break;
        case "ArrowLeft":
           if(lastInputDirection.x!==0) break;
            inputDirection={x:-1 , y:0}
            break;
        case "ArrowRight":
            if(lastInputDirection.x!==0) break;
            inputDirection={x:1 , y:0}
            break; 
    }
})
Up.onclick=function(event)
{
    if(lastInputDirection.y!==0) 
    {
        event.preventDefault()
    }
    else
    {
        inputDirection={x:0 , y:-1}
    }
}


Down.onclick=function(event)
{
    if(lastInputDirection.y!==0) 
    {
        event.preventDefault()
    }
    else
    {
        inputDirection={x:0 , y:1}
    }
}

Left.onclick=function(event)
{
    if(lastInputDirection.x!==0) 
    {
        event.preventDefault()
    }
    else
    {
        inputDirection={x:-1 , y:0}
    }
}


Right.onclick=function(event)
{
    if(lastInputDirection.x!==0) 
    {
        event.preventDefault()
    }
    else
    {
        inputDirection={x:1 , y:0}
    }
}

export function getInputDirection()
{
    lastInputDirection=inputDirection
    return inputDirection;
}