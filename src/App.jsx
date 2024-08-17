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

function App() {
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
	     <Victory/>
    </NextUIProvider>
    </>
  );
}

export default App;
