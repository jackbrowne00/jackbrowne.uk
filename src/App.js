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
      <Router>
        <div className="navContainer">
          <nav className='menu'>
            <li id='logo'>
            <Link to="/">Jack Browne</Link>
            </li>
            <ul className='navButtons'>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/projects"><a className='dropdownArrow'>Projects</a></Link>
                </li>

                <ul className='subMenus'>
                  <li>
                    <Link to="/blackjack"><a>Blackjack</a></Link>
                  </li>
                  <li>
                    <Link to="/growpro"><a>GrowPro React</a></Link>
                  </li>
                  <li>
                    <Link to="/recipegenerator"><a>Recipe Generator</a></Link>
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

        <Route path="/blackjack">
        </Route>

      </Switch>

      </Router>

    </div>
  );
}

export default App;
