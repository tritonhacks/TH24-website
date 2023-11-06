import "./style.css";
import waterbottle from "../../assets/water_bottle.svg";
import cseucsd from "../../assets/logos/cseucsd.png";
import codeorg from "../../assets/logos/codeorg.png";
import create from "../../assets/logos/create.png";
import csfe from "../../assets/logos/csfe-logo.svg";
import cstasd from "../../assets/logos/csta.png";
import netapp from "../../assets/logos/netapp.png";

const Sponsors = () => {
  return (
    <section id="sponsors-wrapper">
      <img src={waterbottle} alt="waterbottle" id="bottle"></img>

      <div id="sponsorText">
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
      </div>

      <div id="sponsor-images">
        <a href="https://csforeach.ucsd.edu/" target="_blank" rel="noreferrer">
          <img src={csfe} alt="CSforeach"></img>
        </a>
        <a href="https://cse.ucsd.edu/" target="_blank" rel="noreferrer">
          <img src={cseucsd} alt="UCSD CSE"></img>
        </a>
        <a href="https://sandiego.csteachers.org/page/about-us" target="_blank" rel="noreferrer">
          <img src={cstasd} alt="CSTA San Diego"></img>
        </a>
        <a href="https://www.netapp.com/" target="_blank" rel="noreferrer">
          <img src={netapp} alt="NetApp"></img>
        </a>
        <a href="https://code.org/" target="_blank" rel="noreferrer">
          <img src={codeorg} alt="Code.org"></img>
        </a>
        <a href="https://create.ucsd.edu/" target="_blank" rel="noreferrer">
          <img src={create} alt="UCSD Create"></img>
        </a>
      </div>

    </section>
  );
};

export default Sponsors;