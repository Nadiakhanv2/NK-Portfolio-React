import './App.css';
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
      <Services/>
    </div>
  );
}

export default App;
