import "./style.css";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";

const links = [
  {
    id: "about",
    displayText: "About",
  },
  {
    id: "sponsors",
    displayText: "Sponsors",
  },
  {
    id: "faq",
    displayText: "FAQ",
  },
  {
    id: "footer",
    displayText: "Contact",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar-container'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  // const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div class={navbarClasses.join(" ")}>
      <a href="/" class="navbar-title">
        <img src={Logo} alt="" />
      </a>
      <div class="navbar-links">
        {/* <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
        <div className="nav-menu">
          {links.map((link, key) => (
            <a class="underline" href={`#${link.id}`} key={`nav${key}`}>
              {link.displayText}
            </a>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Navbar;