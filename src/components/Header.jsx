import { useState } from "react";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = ({ appPage }) => {
  const [navOpen, setNavOpen] = useState(false);
const handleContactClick = (e) => {
  e.preventDefault();
  if (window.location.pathname === "/") {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#contact";
  }
};
 

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div
        className={`max-w-screen-2xl w-full mx-auto px-4 flex  items-center ${
          appPage === "Projects"
            ? "justify-between"
            : "justify-between  md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]"
        } `}
      >
        <h1>
          <Link to="/" className="logo">
            <img
              src="/images/logo.png"
              width={80}
              height={80}
              alt="Tomas Ortega"
            />
          </Link>
        </h1>
        {appPage === "Home" && (
          <>
            <div className="relative md:justify-self-center">
              <button
                className="menu-btn md:hidden"
                onClick={() => setNavOpen((prev) => !prev)}
              >
                <span className="material-symbols-rounded">
                  {navOpen ? "close" : "menu"}
                </span>
              </button>

              <Navbar navOpen={navOpen} />
            </div>
            <a
              href="#contact"
              className="btn btn-secondary max-md:hidden md:justify-self-end hover:bg-purple-300 active:bg-purple-400"
            >
              Contact
            </a>
          </>
        )}
        {appPage === "Projects" && (
          <Link
            to="/#contact"
            className="btn btn-secondary 
            
            md:justify-self-end hover:bg-purple-300 active:bg-purple-400"
          >
            Contact
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
