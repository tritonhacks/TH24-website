import "./style.css";
import accent from "../../assets/black_accent.svg";
import logo from "../../assets/logo.svg";
import discord from "../../assets/discord.svg";
import mail from "../../assets/mail.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";


const Landing = () => {
    return (
        <section id="landing-wrapper">
            <div id="content">
                <img src={logo} alt="CSforeach logo" id="logo" />
                <h1 id="title">TritonHacks 2023 is coming soon!</h1>
                <p id="dates">Dates: May 21-22</p>
            </div>
            <img src={accent} alt="accent" id="accent" />
            <a href="https://tally.so/r/3EqeJB" target="_blank" rel="noreferrer" id="signup">Sign up!</a>
            <div id="socials">
                {/* <a target="_blank" href="/" rel="noreferrer">
                    <img src={discord} alt="Discord" id="discord" />
                </a> */}
                <a target="_blank" href="https://www.instagram.com/ucsdtritonhacks/" rel="noreferrer">
                    <img src={instagram} alt="Instagram" id="instagram" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/csforeach/" rel="noreferrer">
                    <img src={linkedin} alt="LinkedIn" id="linkedin" />
                </a>
                <a target="_blank" href="mailto:tritonhacks@gmail.com" rel="noreferrer">
                    <img src={mail} alt="Mail" id="mail" />
                </a>
            </div>
            <p id="footer">© 2022 by csforeach</p>
        </section>
    );
};

export default Landing;