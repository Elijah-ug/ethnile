import "./styles/navigation.css";
// import "./styles/header.css";
import EthNile3 from "../assets/changed.png"
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { Link } from 'react-scroll';
import { useState } from "react"
const Navbar = () => {
  const [isActive, setIsActive] = useState(true)

  const handleIsActive = () => {
      setIsActive(!isActive)
  }

  const handleClickedLink = () => {
    setIsActive(!isActive)
  }
  return (
    <header className="navbar">
      <div className="navbar__logo"> <span className='img-logo'><img src={EthNile3} alt="" /></span></div>
      <nav className="navbar__links">
        <div className="bars" onClick={handleIsActive}>

            {isActive? (
          <span className="burger-icons"><TfiAlignJustify/></span> // X icon
        ) : (
          <span className="burger-icon"><TfiClose /></span> // Hamburger icon
        )}
        </div>

        <div className={!isActive ? "links" : "hidden"}>
<Link onClick={handleClickedLink} to="home" smooth={true} duration={500}>Home</Link>
<Link onClick={handleClickedLink} to="speakers" smooth={true} duration={500}>About</Link>
<Link onClick={handleClickedLink} to="speakers" smooth={true} duration={500}>Explore</Link>
<Link onClick={handleClickedLink} to="schedule" smooth={true} duration={500}>Speakers</Link>
<Link onClick={handleClickedLink} to="register" smooth={true} duration={500}>Contact Us</Link>

        {/* <a href="/home">Home</a>
        <a href="/Speakers">Speakers</a>
        <a href="#schedule">Schedule</a>
          <a href="#register">Register</a> */}
          </div>
        {/* <FadeInSection><a href="#home">Home</a></FadeInSection>
  <FadeInSection><a href="#speakers">Speakers</a></FadeInSection>
  <FadeInSection><a href="#schedule">Schedule</a></FadeInSection>
  <FadeInSection><a href="#register">Register</a></FadeInSection> */}
      </nav>
    </header>
  );
};

export default Navbar;
