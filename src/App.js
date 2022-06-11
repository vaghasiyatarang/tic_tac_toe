import Game from './Game';
import SimpleGame from './SimpleGame';
import TailwindDemo from './Tailwind_demo';

function App() {
  return (
    <>
      <TailwindDemo />
      <div className="flex flex-row">
        <div className='basis-2/4'>
          <SimpleGame />
        </div>
        <div className='basis-2/4'>
          <Game />
        </div>
      </div>
    </>
  );
}


export default App;
