import "./style.css";
// import acm from "../../assets/acm.png";

const Sponsors = () => {
  return (
    <section id="sponsors-wrapper">
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
        {/* <a href="https://www.deckard.com/">
          <img src={deckard} alt="Deckard Technologies"></img>
        </a> */}
      </div>
      
      <h1 id="partners">Partners</h1>
      <div id="partner-images">
        {/* <a href="https://acmucsd.com/">
          <img src={acm} alt="Association for Computing Machinery"></img>
        </a> */}
      </div>
    </section>
  );
};

export default Sponsors;