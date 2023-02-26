import "./style.css";
import smoke from "../../assets/smoke-bottom.svg";
import alien from "../../assets/alien.svg";
import beam from "../../assets/beam.svg";
import cseucsd from "../../assets/cseucsd.png";

const Sponsors = () => {
  return (
    <section id="sponsors-wrapper">
      <img src={smoke} alt="smoke trail" id="smoke-bottom" />

      <div id="spaceship">
        <img src={alien} alt="alien" id="alien" />
        <img src={beam} alt="beam" id="beam" />
      </div>
      <h1 id="sponsors">Sponsors</h1>
      <p id="sponsor-us">
        Interested in sponsoring us? Email us at&nbsp;
        <span>
          <a id="email" href="mailto:tritonhacks@gmail.com">
            tritonhacks@gmail.com
          </a>
        </span>
        .
      </p>
      <div id="sponsor-images">
        <a href="https://cse.ucsd.edu/" target="_blank" rel="noreferrer">
          <img src={cseucsd} alt="UCSD CSE"></img>
        </a>
      </div>

    </section>
  );
};

export default Sponsors;