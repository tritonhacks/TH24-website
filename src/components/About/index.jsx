import "./style.css";

const About = () => {
    return (
        <section id="about-wrapper">
            <div id="about-content">
                <h1 id="about">Get ready to blast off!</h1>
                <div>
                    <p id="about-paragraph">
                        TritonHacks is a two-day high school level hackathon aimed at 
                        providing greater access to CS education, specifically for 
                        disadvantaged local communities lacking their own resources to 
                        prepare students for careers in STEM fields.
                    </p>
                    <p id="learn-more">
                        Learn more about our other events&nbsp;
                        <a href="https://csforeach.ucsd.edu/">here</a>
                        &nbsp;
                        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.5607 13.0607C32.1464 12.4749 32.1464 11.5251 31.5607 10.9393L22.0147 1.3934C21.4289 0.807611 20.4792 0.807611 19.8934 1.3934C19.3076 1.97919 19.3076 2.92893 19.8934 3.51472L28.3787 12L19.8934 20.4853C19.3076 21.0711 19.3076 22.0208 19.8934 22.6066C20.4792 23.1924 21.4289 23.1924 22.0147 22.6066L31.5607 13.0607ZM0.5 13.5H30.5V10.5H0.5V13.5Z" fill="#8662B2" />
                        </svg>
                    </p>
                </div>
            </div>

        </section>
    );
};

export default About;
