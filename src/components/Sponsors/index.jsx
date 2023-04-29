import "./style.css";
import smoke from "../../assets/smoke-bottom.svg";
import alien from "../../assets/alien.svg";
import beam from "../../assets/beam.svg";
import cseucsd from "../../assets/logos/cseucsd.png";
import codeorg from "../../assets/logos/codeorg.svg";
import create from "../../assets/logos/create.svg";
import csfe from "../../assets/logos/csfe-logo.svg";
import cstasd from "../../assets/logos/csta.svg";
import familia from "../../assets/logos/familia.svg";
import googlecloud from "../../assets/logos/google-cloud.png";
import netapp from "../../assets/logos/netapp.svg";
import trace3 from "../../assets/logos/trace3.svg";
import ucsdidea from "../../assets/logos/ucsd-idea.svg";


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
        <a href="https://csforeach.ucsd.edu/" target="_blank" rel="noreferrer">
          <img src={csfe} alt="CSforeach"></img>
        </a>
        <a href="https://cse.ucsd.edu/" target="_blank" rel="noreferrer">
          <img src={cseucsd} alt="UCSD CSE"></img>
        </a>
        <a href="https://cloud.google.com/" target="_blank" rel="noreferrer">
          <img src={googlecloud} alt="Google Cloud"></img>
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
          <img src={familia} alt="UCSD CSE"></img>
          <img src={trace3} alt="UCSD CSE"></img>
        <a href="https://jacobsschool.ucsd.edu/idea" target="_blank" rel="noreferrer">
          <img src={ucsdidea} alt="UCSD Idea Center"></img>
        </a>
      </div>

    </section>
  );
};

export default Sponsors;