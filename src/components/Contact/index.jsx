import "./style.css";
import terrain from "../../assets/terrain.svg";
import rover from "../../assets/rover.svg";
import facebook from "../../assets/fb.svg";
import instagram from "../../assets/insta.svg";
// import discord from "../../assets/discord.svg";
import csfe from "../../assets/csfe.svg";
import mail from "../../assets/mail.svg";

const Contact = () => {
    return (
        <section id="footer">
            <img id="terrain" src={terrain} alt="terrain" />
            <img id="rover" src={rover} alt="rover" />
            <div id="content">
                <h1>Let's Make Contact!</h1>

                <div id="cols">
                    <div class="col">
                        <p>Questions?</p>
                        <p>Contact Our Team</p>
                        <div id="mail">
                            <img className="footer-icon" src={mail} alt="email" />
                            <a href="mailto:tritonhacks@gmail.com" target="_blank" rel="noreferrer" className="icon">tritonhacks@gmail.com</a>
                        </div>
                    </div>
                    <div class="col">
                        <p>Interested in TritonHacks?</p>
                        <p>Follow us on social media!</p>
                        <div id="icon-box">
                            <a
                                href="https://www.facebook.com/triton.hacks"
                                target="_blank"
                                rel="noreferrer"
                                className="icon"
                            >
                                <img className="footer-icon" src={facebook} alt="facebook" />
                            </a>
                            <a
                                href="https://www.instagram.com/ucsdtritonhacks/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon"
                            >
                                <img className="footer-icon" src={instagram} alt="instagram" />
                            </a>
                            {/* <a
                                href="https://discord.com"
                                target="_blank"
                                rel="noreferrer"
                                className="icon"
                            >
                                <img className="footer-icon" src={discord} alt="discord" />
                            </a> */}
                            <a
                                href="https://csforeach.ucsd.edu/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon"
                            >
                                <img className="footer-icon" src={csfe} alt="cs foreach" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
