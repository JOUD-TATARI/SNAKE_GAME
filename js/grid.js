const GRID_SIZE=21;
export function randomGridPosition()
{
     
 let f={x:Math.floor(Math.random() * GRID_SIZE+1) , 
    y: Math.floor(Math.random() * GRID_SIZE+1)} 
 return f;  
    
}
export function outsideGrid(position)
{
    return( position.x<1 || position.x>GRID_SIZE || position.y<1 || position.y>GRID_SIZE)
}