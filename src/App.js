import './App.css';
import Contact from './components/Contact';
// import About from './components/About';
// import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
// import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home />
      <hr />
      <About/> */}
      {/* <Portfolio/> */}
      {/* <Services/> */}
      <Contact/>
    </div>
  );
}

export default App;
