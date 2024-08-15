import Context from './components/Context';
import Battle from './components/Battle';
import Conclusion from './components/Conclusion';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <Home />
      <Context />
      <Battle />
      <Conclusion />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
