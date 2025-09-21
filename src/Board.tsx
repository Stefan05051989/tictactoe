import Square  from "./Square";
import calculateWinner from "./CalculateWinner.tsx";

interface BoardProps {
  xIsNext: boolean,
  squares: string[],
  onPlay: (a: string[]) => void
  // OP: (name : type ) => void (method signature moet voldoen aan orignele methode)
}

export default function Board({xIsNext, squares, onPlay}: BoardProps){
  
    function handleClick(i: number) {
      if(calculateWinner(squares)|| squares[i]){ // handles click event for NOT overwriting first input (click twice to change X to O or vica versa)
        return;
      }
        const nextSquares = squares.slice(); // slice creates copy of squares array instead of modifying a new one.
        if(xIsNext){
            nextSquares[i] = "X";
        }else{
            nextSquares[i] = "O";
        }
        onPlay(nextSquares); // method call(XXX)
    }
    const winner = calculateWinner(squares);
    let status;
    if(winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (xIsNext ? 'X' : 'O')
    }

  return (
  <>
  
  <div className="status">{status}</div> 
    <div className='board-row'>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className='board-row'>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className='board-row'>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
  </>
  );
}
