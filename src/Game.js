import React, { useState } from 'react'

const Game = () => {

    const [history, setHistory] = useState([{ squares: [...Array(9)].fill(null) }]);
    console.log('history', history)

    const [nextP, setNextP] = useState(true);

    const [stepNo, setStepNo] = useState(0);
    const [count, setCount] = useState(1);

    const handleClick = (i) => {
        const pastMoves = history.slice(0, stepNo + 1);
        console.log('pastMoves-----------', pastMoves)
        const current = [...pastMoves[stepNo].squares];
        console.log('current--------------', current)

        if (current[i] || win(current)) return;
        setCount(2)
        current[i] = nextP ? "x" : "0";
        setHistory([...pastMoves, { squares: current }]);
        setNextP(!nextP);
        setStepNo(pastMoves.length)
    };


    const undo = () => {
        const len = history.length - count;
        if (len !== -1) {
            setCount(count + 1)
            console.log('count', count)
            console.log('len', len)
            setStepNo(len);

            if (len % 2 === 0) {
                setNextP(true)
            }
            else {
                setNextP(false)
            }
        }

    }


    const status = () => {

        const winner = win(history[stepNo].squares);
        const status = winner ? `Winner : ${winner}` : " "
        return status;
    }

    const turn = () => {
        return `Next Player : ${nextP ? "x" : "0"}`
    }


    const win = (squares) => {
        console.log('squares', squares)
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a]
            }
        }
    }

    const renderSquare = (i) => {
        return (
            <button key={i} className='square' onClick={() => handleClick(i)} name=" ">{history[stepNo].squares[i]}</button>
            // <input name="" type="button" className='square' value={history[stepNo].squares[i]} onClick={() => handleClick(i)} />
        );
    };
    let num = 0;
    return (
        <div className='game'>
            <div className='board'>
                <div className='info'>
                    <p className='status'>{status()}</p>

                    <p className='turn'>{turn()}</p>
                </div>

                <div >
                    {[...Array(3)].map((e, i) => (
                        <div className="board-row" key={i}>
                            {[...Array(3)].map(() => {
                                num++;
                                return renderSquare(num - 1)
                            })}
                        </div>
                    ))}
                </div>

                <button onClick={undo} className="back-btn">back</button>
            </div>
        </div>
    )
}

export default Game