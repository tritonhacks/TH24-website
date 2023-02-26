import "./style.css";
import saturn from "../../assets/saturn.png";
import astronaut from "../../assets/astronaut.svg";

const Landing = () => {
    return (
        <section id="landing-wrapper">
            {/* Foreground - text, buttons, etc */}
            <div id="landing-fg">
                <h1 id="landing-title">TritonHacks</h1>
                <p id="date">May 20th - May 21st</p>
                <div id="landing-btn-wrapper">
                    <a href="https://tally.so/r/3EqeJB" target="_blank" rel="noreferrer" class="landing-btn">APPLY NOW</a>
                </div>
            </div>

            {/* Midground - static images */}
            <div id="landing-mg">
                <img src={saturn} alt="saturn" id="saturn" />
                <img src={astronaut} alt="astronaut" id="astronaut" />
            </div>

            <div id="landing-bg">
            </div>
        </section>
    );
};

export default Landing;