import { NextUIProvider } from '@nextui-org/react';
import Context from './components/Context';
import Battle from './components/Battle';
import Conclusion from './components/Conclusion';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Language from './components/Language';
import { Victory } from './components/Victory';
import { useEffect } from 'react';
import useSessionTransitionState from './hooks/useSessionTransitionState';

function App() {
  const { index, getIsBeginning, getIsEnd } = useSessionTransitionState();
  const handleWheel = (event) => {
    console.log("event.deltaY: ", event.deltaY);
    console.log("index: ", index);
    console.log("getIsEnd(index): ", getIsEnd(index));
    console.log("------------------------------------");
    if (event.deltaY > 0 && !getIsEnd(index)) {
      event.preventDefault();
    } else if (event.deltaY < 0 && !getIsBeginning(index)) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [index]);

  return (
    <>
      <NextUIProvider>
        {/* <Intro /> */}
        <Navbar />
        <Language />
        <Home />
        <Context />
        <Battle />
        <Hero />
        <Conclusion />
        <Footer />
        <Victory />
      </NextUIProvider>
    </>
  );
}

export default App;
