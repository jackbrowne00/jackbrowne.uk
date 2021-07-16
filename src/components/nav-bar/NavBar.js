import './navbar.css'

const NavBar = () => {
    return (

        <nav className='menu'>
        <input type='checkbox' id='responsive-menu'/><label></label>
        <li id='logo'><a>Jack Browne</a></li>
        <ul className='nav-buttons'>
            <li><a href='http://'>Contact</a></li>
            <li><a class='dropdown-arrow' href='http://'>Projects</a>
            <ul class='sub-menus'>
                <li><a href='http://www.jackbrowne.uk/blackjack/'>Blackjack Game</a></li>
                <li><a href='http://'>GrowPro React Page</a></li>
                <li><a href='http://'>Recipe Generator</a></li>
            </ul>
            </li>
            <li><a href='http://'>About me</a></li>
            <li><a href='http://'>Home</a></li>
        </ul>
        </nav>

     );
}
 
export default NavBar;