import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () =>  {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, []);


  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          className="nav__logo"
          alt="netflix-logo"
        />

        <img
          src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg"
          className="nav__avatar"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
