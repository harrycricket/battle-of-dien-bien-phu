import Context from './components/Context';
import Battle from './components/Battle';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HeroList from './components/hero/HeroList';

function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <Home />
      <Context />
      <Battle />
      <Conclusion />
      <HeroList />
      <Footer />
    </>
  );
}

export default App;
