import "./styles/navigation.css";
import EthNile3 from "../assets/changed.png"
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { useState } from "react";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const handleIsActive = () => {
      setIsActive(!isActive)

  }
  return (
    <header className="navbar">
      <div className="navbar__logo"> <span className='img-logo'><img src={EthNile3} alt="" /></span></div>
      <nav className="navbar__links">
        <div className="bars" onClick={handleIsActive}>

            {isActive ? (
          <span className="burger-icon"><TfiAlignJustify/></span> // X icon
        ) : (
          <span className="burger-icon"><TfiClose /></span> // Hamburger icon
        )}
        </div>

        <div className={!isActive? "links" : "hidden"}>
        <a href="#home">Home</a>
        <a href="#speakers">Speakers</a>
        <a href="#schedule">Schedule</a>
          <a href="#register">Register</a>
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
