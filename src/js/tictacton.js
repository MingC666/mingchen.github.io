
import React from 'react'
import { useState } from 'react'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const [ascending, setAscending] = useState(true)
    const xIsNext = currentMove % 2 === 0
    const currentBoard = history[currentMove]


    function handlePlay(nextBoard) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextBoard]

        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
    }

    const moves = history.map((board, move) => {
        let description = move ? 'Go to move #' + move : 'Go to starting of the game';

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    })

    if (!ascending) {
        moves.reverse();
    }

    return (
        <div className="game">
            <div className="game-content">
                <Board xIsNext={xIsNext} board={currentBoard} onPlay={handlePlay} />
            </div>


            <div className="game-info">
                <ol>
                    <button onClick={() => setAscending(!ascending)}>Reverse Moves</button>
                    {moves}
                </ol>
            </div>
        </div>
    );
}


function Board({ xIsNext, board, onPlay }) {
    const [lastMove, setLastMove] = useState("Someone makes move here")
    function handleClick(i) {
        let message = ` move on row [${Math.floor(i / 3)}] col [${i % 3}]`
        // checking if someone is win
        if ((checkingWinner(board) && checkingWinner(board).length === 3) || board[i]) {
            return;
        }
        const nextBoard = board.slice();
        if (xIsNext) {
            nextBoard[i] = 'X';
            setLastMove("X" + message);

        }
        else {
            nextBoard[i] = 'O';
            setLastMove("Y" + message);
        }
        // console.log(nextBoard[i])
        onPlay(nextBoard);
    }

    const winner = checkingWinner(board);
    let result = "  Start game  ";
    var message = lastMove
    if (winner) {
        result = "Winneer is " + (!xIsNext ? "X" : "O");
    }
    else {
        result = "Next player is " + (xIsNext ? "X" : "O");
    }


    const myBoard = []
    myBoard.push(<div className="displayBoard">{result}</div>)
    myBoard.push(<div className="displayBoard">{message}</div>)
    const className = "square"
    for (let i = 0; i < 9; ++i) {
        if (i % 3 === 0) {
            myBoard.push(<div className="board-row"></div>)
        }
        if (checkingWinner(board) && checkingWinner(board).includes(i))
            myBoard.push(<Square className={className + " winsquare"} value={board[i]} onBoardClick={() => handleClick(i)} />);
        else
            myBoard.push(<Square className={className} value={board[i]} onBoardClick={() => handleClick(i)} />)
    }

    return (
        <>
            {myBoard}
        </>
    )
}

function Square({ value, onBoardClick, className }) {
    return <button className={className} onClick={onBoardClick}>
        {value}
    </button>
}

function checkingWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 5, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    for (let i = 0; i < lines.length; ++i) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[b] === board[c] && board[c]) {

            return [a, b, c]
        }
    }
    return null;
}

