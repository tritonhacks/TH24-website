import "./style.css";
import Logo from "../../assets/logo.svg";

const links = [
  {
    id: "about",
    displayText: "About",
  },
  {
    id: "prizes",
    displayText: "Prizes",
  },
  {
    id: "sponsors",
    displayText: "Sponsors",
  },
  {
    id: "footer",
    displayText: "Contact",
  },
];

const Navbar = () => {
  return (
    <div class="navbar-container">
      <a href="/" class="navbar-title">
        <img src={Logo} alt="" />
      </a>
      <div class="navbar-links">
        {links.map((link, key) => (
          <a class="underline" href={`#${link.id}`} key={`nav${key}`}>
            {link.displayText}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;