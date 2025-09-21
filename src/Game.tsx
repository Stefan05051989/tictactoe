import Board from "./Board.tsx";
import { useState } from "react";

export default function Game(){
    const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0); // keeps track of which state the user is currently viewing.
    const xIsNext = currentMove % 2 === 0;
    // render correcttly according to function / behaviour, switch const 3 & 4 results in wrong behaviour!!!!
    const currentSquares = history[currentMove]; // render from currently selected move instead of final.

    function handlePlay(nextSquares: string[]){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // back in time to continue from move clicked in history
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        //setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove: number){
        setCurrentMove(nextMove); // updates current move
        //setXIsNext(nextMove % 2 === 0); // change x to true if CM is even.
    }

    const moves = history.map((squares, move) => {
        let discription;
        if(move > 0){
            discription = 'Go to move #' + move;
        } else { 
            discription = 'Go to game start';
        }
        /* key = move -> uses index as key for unique id. */
        return(
            <li key={move}> 
                <button onClick={() => jumpTo(move)}> {discription}</button>
            </li>
        );
    });
    
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol> 
            </div>
        </div>
    );
}