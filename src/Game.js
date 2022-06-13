import React, { useState } from 'react'

const Game = () => {

    const [history, setHistory] = useState([{ squares: [...Array(9)].fill(null) }]);
    // const [history, setHistory] = useState([{ squares: [null,null,null,null,null,null,null,null,null]}]);

    //  both history state is work

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
            <button key={i} className='transition ease-in-out delay-100 hover:-translate-1 hover:scale-110 h-12 w-12 text-rose-600 border-2 border-black text-2xl font-semibold cursor-pointer shadow-lg shadow-cyan-900/50' onClick={() => handleClick(i)} name=" "><span className="text-white">.</span>{history[stepNo].squares[i]}<span className="text-white">.</span></button>
        //     <input
        //         name=""
        //         type="button"
        //         className='h-12 w-12 bg-green-200 border-2 border-rose-600 text-2xl font-semibold cursor-pointer'
        //         value={history[stepNo].squares[i]}
        //         onClick={() => handleClick(i)} />
        );
    };
    let num = 0;
    return (
            <div className=''>
                <div className='text-center font-semibold'>
                    <p className=''>{status()}</p>

                    <p className=''>{turn()}</p>
                </div>

                <div className='table my-10 mx-auto'>
                    {[...Array(3)].map((e, i) => (
                        <div className="" key={i}>
                            {[...Array(3)].map(() => {
                                num++;
                                return renderSquare(num - 1)
                            })}
                        </div>
                    ))}
                <div className="text-center bg-black text-white border-t-8  "> <button className="py-1 px-2 w-full bg-rose-500 " onClick={undo} >Undo</button></div>
                </div>

                <br /><br /><hr /><br /><br />

            </div>
    )
}

export default Game