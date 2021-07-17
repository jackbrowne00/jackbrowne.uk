import hero_image from '../../webpage_hero_image.jpg'
import './hero.css'

const Hero = () => {
    return ( 
        <div className="hero-container">
            <img className="hero-image" src={hero_image}></img>
            <h1 className="hero-h1">Title Here</h1>
            <h3 className="hero-h3">H3 lower level here</h3>
        </div>

     );
}
 
export default Hero;