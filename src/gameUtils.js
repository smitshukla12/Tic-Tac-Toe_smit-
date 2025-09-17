export function calculateWinner(squares)
{
const lines= [
    [0,1,2],[3,4,5],[6,7,8], //horizontal
    [0,3,6],[1,4,7],[2,5,8], //vertical
    [0,4,8],[2,4,6]   //cross

];

for(let i= 0; i<lines.length;i++)
{
    const[a,b,c]= lines[i]
   
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c])
    {
        console.log(` Winner found: ${squares[a]} on line [${a}, ${b}, ${c}]`);
        // abc measn [0,1,2] and squares[a] means x or o
        return{winner:squares[a],lines:lines[i]};
    }
}
return null;
}