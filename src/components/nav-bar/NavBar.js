import './navbar.css'
import hero_image from '../../webpage_hero_image.jpg'

const NavBar = () => {
    return (
        <div className="nav-container">
        <nav className='menu'>
        <input type='checkbox' id='responsive-menu'/><label></label>
        <li id='logo'><a>Jack Browne</a></li>
        <ul className='nav-buttons'>
            <li><a href='http://www.sugarize.co.uk'>Contact</a></li>
            <li><a class='dropdown-arrow' href='http://'>Projects</a>
            <ul class='sub-menus'>
                <li><a href='http://www.jackbrowne.uk/blackjack/'>Blackjack Game</a></li>
                <li><a href='http://'>GrowPro React</a></li>
                <li><a href='http://'>Recipe Generator</a></li>
            </ul>
            </li>
            <li><a href='http://'>About me</a></li>
            <li><a href='http://'>Home</a></li>
        </ul>
        </nav>
        </div>
     );
}
 
export default NavBar;