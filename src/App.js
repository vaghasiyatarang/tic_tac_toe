import Hero from './component/Hero';
import Navbar from './component/Navbar';
import About from './component/About';
import Support from './component/Support';
import AllInOne from './component/AllInOne';
import Pricing from './component/Pricing';
import Footer from './component/Footer';
import Game from './Game';
import SimpleGame from './SimpleGame';
import TailwindDemo from './Tailwind_demo';

function App() {
  return (
    <>
      {/* <TailwindDemo /> */}

      {/* <div className="flex flex-row">
        <div className='basis-2/4'>
          <SimpleGame />
        </div>
        <div className='basis-2/4'>
          <Game />
        </div>
      </div>  */}

      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}


export default App;
