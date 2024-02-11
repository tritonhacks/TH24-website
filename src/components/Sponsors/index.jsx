import "./style.css";
import waterbottle from "../../assets/water_bottle.svg";
import cseucsd from "../../assets/logos/cseucsd.png";
import mtw from "../../assets/logos/mtw.png";
import create from "../../assets/logos/create.png";
import csfe from "../../assets/logos/csfe-logo.svg";
import sublime from "../../assets/logos/sublime.png";
import desmos from "../../assets/logos/desmos.png";
import amazon from "../../assets/logos/amazon.png";
import wolfram from "../../assets/logos/wolfram.png";
import React from 'react';

const Sponsors = () => {
  return (
    <section id="sponsors-wrapper">
      <img src={waterbottle} alt="waterbottle" id="bottle"></img>

      <div id="sponsor-images">
        <a href="https://csforeach.ucsd.edu/" target="_blank" rel="noreferrer">
          <img src={csfe} alt="CSforeach"></img>
        </a>
        <a href="https://cse.ucsd.edu/" target="_blank" rel="noreferrer">
          <img src={cseucsd} alt="UCSD CSE"></img>
        </a>
        <a href="https://create.ucsd.edu/" target="_blank" rel="noreferrer">
          <img src={create} alt="UCSD Create"></img>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <img src={mtw} alt="MTW"></img>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <img src={sublime} alt="Sublime"></img>
        </a>
        <a href="https://desmos.com" target="_blank" rel="noreferrer">
          <img src={desmos} alt="Desmos"></img>
        </a>
        <a href="https://amazon.com" target="_blank" rel="noreferrer">
          <img src={amazon} alt="Amazon"></img>
        </a>
        <a href="https://www.wolfram.com" target="_blank" rel="noreferrer">
          <img src={wolfram} alt="Wolfram"></img>
        </a>
      </div>

      <div class="rightText">
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

        <p id="dei">
          This program is supported in part by a co-sponsorship from the Office
          of the Vice Chancellor for Equity, Diversity, and Inclusion.  Any views or
          opinions expressed in this program are solely those of the speaker(s) and/or
          organizer(s) and do not necessarily represent those of the Office of the Vice
          Chancellor.
        </p>
      </div>

    </section>
  );
};

export default Sponsors;