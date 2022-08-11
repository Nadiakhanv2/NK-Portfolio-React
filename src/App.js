import './App.css';
import Contact from './components/Contact';
import About from './components/About';
import logo from "./logo.png";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Pallets from './components/Pallets';


function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar logo={logo} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            {/* <Route exact path="/pallets">
              <Pallets />
            </Route> */}
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
