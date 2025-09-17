import Square from "./Square";

export default function Board({ squares, onClick, winningLine = [] }) 
{
    //   console.log("Board render with squares:", squares, "winningLine:", winningLine);
    function renderSquare(i)
    {
        const isWinning =Array.isArray(winningLine) && winningLine.includes(i);
        
        return (
            <Square key={i} value={squares[i]} onClick={() => onClick(i)} highlight={isWinning} />

        )
    }
    
    return (
        <>
    <div className="board">
        {[0,1,2].map(row=> (
            <div key={row} className="board-row">
                 {[0,1,2].map(col => renderSquare(row * 3 +col))}   
            </div>
        ))}
    </div>
    </>
)
}