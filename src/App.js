import './App.css';
import NavBar from './components/nav-bar/NavBar'
import './components/nav-bar/navbar.css'
import Hero from './components/hero/hero'
import TextBlock from './components/TextBlock/TextBlock'
import {
  BrowseRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Hero/>
      <TextBlock/>




      <Router>
        <div className="nav-container">
          <nav className='menu'>
            <li id='logo'>
            <Link to="/">Jack Browne</Link>
            </li>
            <ul className='nav-buttons'>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li class='dropdown-arrow'>
                  <Link to="/projects">Projects</Link>
                </li>


                <ul class='sub-menus'>
                  <li>
                    <Link to="/blackjack">Blackjack</Link>
                  </li>
                  <li>
                    <Link to="/growpro">GrowPro React</Link>
                  </li>
                  <li>
                    <Link to="/recipegenerator">Recipe Generator</Link>
                  </li>
                </ul>


                <li>
                  <Link to="/">About me</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
            </ul>
          </nav>
        </div>
      </Router>





    </div>
  );
}

export default App;
