// import './App.css';
import { useEffect, useState } from 'react'
// import css from './Game.module.css';

function SimpleGame() {

  const [btn1, setBtn1] = useState(" ")
  const [btn2, setBtn2] = useState(" ")
  const [btn3, setBtn3] = useState(" ")

  const [btn4, setBtn4] = useState(" ")
  const [btn5, setBtn5] = useState(" ")
  const [btn6, setBtn6] = useState(" ")

  const [btn7, setBtn7] = useState(" ")
  const [btn8, setBtn8] = useState(" ")
  const [btn9, setBtn9] = useState(" ")

  const [value, setValue] = useState(false)
  const [only, setOnly] = useState({
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  })

  const Button1 = () => {
    if (only.one === 1) {
      if (value === true) {
        setBtn1("x")
      } else {
        setBtn1("0")
      }
      setValue(!value)
      setOnly({ ...only, one: 11 })
    }
  }

  const Button2 = () => {
    if (only.two === 2) {
      if (value === true) {
        setBtn2("x")
      } else {
        setBtn2("0")
      }
      setValue(!value)
      setOnly({ ...only, two: 22 })
    }
  }


  const Button3 = () => {
    if (only.three === 3) {
      if (value === true) {
        setBtn3("x")
      } else {
        setBtn3("0")
      }
      setValue(!value)
      setOnly({ ...only, three: 33 })
    }
  }
  const Button4 = () => {
    if (only.four === 4) {
      if (value === true) {
        setBtn4("x")
      } else {
        setBtn4("0")
      }
      setValue(!value)
      setOnly({ ...only, four: 44 })
    }
  }
  const Button5 = () => {
    if (only.five === 5) {
      if (value === true) {
        setBtn5("x")
      } else {
        setBtn5("0")
      }
      setValue(!value)
      setOnly({ ...only, five: 55 })
    }
  }
  const Button6 = () => {
    if (only.six === 6) {
      if (value === true) {
        setBtn6("x")
      } else {
        setBtn6("0")
      }
      setValue(!value)
      setOnly({ ...only, six: 66 })
    }
  }
  const Button7 = () => {
    if (only.seven === 7) {
      if (value === true) {
        setBtn7("x")
      } else {
        setBtn7("0")
      }
      setValue(!value)
      setOnly({ ...only, seven: 77 })
    }
  }
  const Button8 = () => {
    if (only.eight === 8) {
      if (value === true) {
        setBtn8("x")
      } else {
        setBtn8("0")
      }
      setValue(!value)
      setOnly({ ...only, eight: 88 })
    }
  }
  const Button9 = () => {
    if (only.nine === 9) {
      if (value === true) {
        setBtn9("x")
      } else {
        setBtn9("0")
      }
      setValue(!value)
      setOnly({ ...only, nine: 99 })
    }
  }

  useEffect(() => {

    win();

  })

  const win = (() => {
    if (
      (btn1 === "x" && btn2 === "x" && btn3 === "x") ||
      (btn4 === "x" && btn5 === "x" && btn6 === "x") ||
      (btn7 === "x" && btn8 === "x" && btn9 === "x") ||
      (btn1 === "x" && btn4 === "x" && btn7 === "x") ||
      (btn2 === "x" && btn5 === "x" && btn8 === "x") ||
      (btn3 === "x" && btn6 === "x" && btn9 === "x") ||
      (btn1 === "x" && btn5 === "x" && btn9 === "x") ||
      (btn3 === "x" && btn5 === "x" && btn7 === "x")
    ) {
      alert("Player  X  is win")
      restart();
    } else if (
      (btn1 === "0" && btn2 === "0" && btn3 === "0") ||
      (btn4 === "0" && btn5 === "0" && btn6 === "0") ||
      (btn7 === "0" && btn8 === "0" && btn9 === "0") ||
      (btn1 === "0" && btn4 === "0" && btn7 === "0") ||
      (btn2 === "0" && btn5 === "0" && btn8 === "0") ||
      (btn3 === "0" && btn6 === "0" && btn9 === "0") ||
      (btn1 === "0" && btn5 === "0" && btn9 === "0") ||
      (btn3 === "0" && btn5 === "0" && btn7 === "0")
    ) {
      alert("Player  0  is win")
      restart();
    }
  })

  const restart = () => {
    setBtn1(" ")
    setBtn2(" ")
    setBtn3(" ")
    setBtn4(" ")
    setBtn5(" ")
    setBtn6(" ")
    setBtn7(" ")
    setBtn8(" ")
    setBtn9(" ")

    setValue(false)

    setOnly({
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9
    })
  }


  return (
    <>

      <div className=' table'>

      </div>

      <div className='table p-1 bg-cyan-900 my-10 mx-auto shadow-lg shadow-cyan-900/50'>
        <input className="bg-cyan-100 border-4 border-cyan-900 h-12 w-12 font-semibold rounded-tl-lg " type="button" value={btn1} onClick={Button1} />{" "}
        <input className="bg-cyan-100 border-4 border-cyan-900 h-12 w-12 font-semibold" type="button" value={btn2} onClick={Button2} />{" "}
        <input className="bg-cyan-100 border-4 border-cyan-900 h-12 w-12 font-semibold rounded-tr-lg " type="button" value={btn3} onClick={Button3} /><br />

        <input className="bg-cyan-100 border-4 border-cyan-900 h-12 w-12 font-semibold" type="button" value={btn4} onClick={Button4} />{" "}
        <input className="bg-cyan-100 border-4 border-cyan-900 h-12 w-12 font-semibold" type="button" value={btn5} onClick={Button5} />{" "}
        <input className="bg-cyan-100 border-4 border-cyan-900 h-12 w-12 font-semibold" type="button" value={btn6} onClick={Button6} /><br />

        <input className="bg-cyan-100 border-4 border-cyan-900 h-12 w-12 font-semibold rounded-bl-lg " type="button" value={btn7} onClick={Button7} />{" "}
        <input className="bg-cyan-100 border-4 border-cyan-900 h-12 w-12 font-semibold" type="button" value={btn8} onClick={Button8} />{" "}
        <input className="bg-cyan-100 border-4 border-cyan-900 h-12 w-12 font-semibold rounded-br-lg " type="button" value={btn9} onClick={Button9} /><br />

        <div className='text-center'>
          <button onClick={restart} className='my-2 px-3 py-0.5 ring-2 bg-sky-100 ring-sky-900 ring-offset-4 ring-offset-sky-100 text-sky-900 animate-pulse rounded-full'>Restart</button>
        </div>
      </div>


      <br /><br /><hr /><br /><br />


    </>
  );
}


export default SimpleGame;
