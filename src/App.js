import './App.css';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'
import './components/nav-bar/navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
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
                  <Link to="/about">About me</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
            </ul>
          </nav>
        </div>

      <Switch>

        <Route path="/contact">
          <Contact/>
        </Route>

        <Route path="/projects">
          <Projects/>
        </Route>

        <Route path="/about">
          <AboutMe/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>

      </Router>

    </div>
  );
}

export default App;
