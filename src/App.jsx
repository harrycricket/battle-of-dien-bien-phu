import { NextUIProvider } from '@nextui-org/react';
import Context from './components/Context';
import Battle from './components/Battle';
import Conclusion from './components/Conclusion';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Language from './components/Language';
import { Victory } from './components/Victory';
import Intro from './pages/Intro';
import { useEffect } from 'react';
import useSessionTransitionState from './hooks/useSessionTransitionState';
import useIntroLoadingState from './hooks/useIntroLoadingState';

function App() {
  const { isIntroLoading } = useIntroLoadingState();
  const { index, sliding, transiting, getIsBeginning, getIsEnd, onNextSession, onPrevSession } = useSessionTransitionState();
  const handleWheel = (event) => {
    event.preventDefault();
    // console.log("Wheeling...", isIntroLoading);
    // console.log(`getIsBeginning(${index}): `, getIsBeginning(index));
    // console.log(`getIsEnd(${index}): `, getIsEnd(index));
    // console.log(`transiting: ${transiting} - sliding: ${transiting}`);
    // console.log("Enable to prev: ", (!transiting && !sliding && event.deltaY < 0 && getIsBeginning(index)));
    // console.log("Enable to next: ", !transiting && !sliding && event.deltaY > 0 && getIsEnd(index));
    if (!isIntroLoading && !transiting && !sliding && event.deltaY < 0 && getIsBeginning(index)) {
      onPrevSession();
    }
    if (!isIntroLoading && !transiting && !sliding && event.deltaY > 0 && getIsEnd(index)) {
      onNextSession();
    }

  };

  useEffect(() => {
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [index, transiting, sliding, isIntroLoading]);

  return (
    <>
      <NextUIProvider>
        <Intro />
        <Navbar />
        <Language />
        <Home />
        <Context />
        <Battle />
        <Victory />
        <Hero />
        <Conclusion />
        {/* <Footer /> */}
      </NextUIProvider>
    </>
  );
}

export default App;
