import React, { useEffect, handleShow, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`Nav ${show && "nav_black"}`}>
      <img
        className="Nav_logo"
        src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
        alt="Netflix Logo"
      />
      <img
        className="Nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
