import "./style.css";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";

const links = [
  // {
  //   id: "about",
  //   displayText: "About",
  // },
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


  return (
    <div class={navbarClasses.join(" ")}>
      <a href="/" class="navbar-title">
        <img src={Logo} alt="" />
      </a>
      <div class="navbar-links">
        <div className="nav-menu">
          {links.map((link, key) => (
            <a class="underline" href={`#${link.id}`} key={`nav${key}`}>
              {link.displayText}
            </a>
          ))}
          <a class="underline" href="https://bit.ly/TritonHacksApplication" target="_blank" rel="noreferrer">Apply</a>


        </div>
      </div>

    </div>
  );
};

export default Navbar;