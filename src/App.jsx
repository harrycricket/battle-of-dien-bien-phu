import Navbar from './components/Navbar';
import Context from './components/Context';
import Battle from './components/Battle';
import Conclusion from './components/Conclusion';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Intro from './pages/Intro';

function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <div className='mx-auto pt-20 px-20'>
        <Context />
        <Battle />
        <Conclusion />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
