import "./style.css";
import satellite1 from "../../assets/satellite1.svg";
import satellite2 from "../../assets/satellite2.svg";
import asteroid1 from "../../assets/asteroid1.svg";
import asteroid2 from "../../assets/asteroid2.svg";
import asteroid3 from "../../assets/asteroid3.svg";
import asteroid4 from "../../assets/asteroid4.svg";

const FAQ = () => {
    return (
        <section id="faq">
            <h1 id="faq-title">Searching for Answers?</h1>
            <img src={satellite1} alt="satellite" id="satellite1" />
            <img src={satellite2} alt="satellite" id="satellite2" />
            <div id="questions">
                <div className="question">
                    <img src={asteroid1} alt="asteroid" id="asteroid1" />
                    <p>What is a hackathon?</p>
                </div>
                <p className="answer">
                    It’s basically a sprint for programmers! Our hackathon is targeted for
                    high school students but typically a group of people interested in
                    programming come together to create a project in a sprint-like event!
                </p>
                <div className="question">
                    <img src={asteroid2} alt="asteroid" id="asteroid2" />
                    <p>What if I don’t know anything about coding?</p>
                </div>
                <p className="answer">
                    No worries! Our hackathon is designed for high school students of all
                    experience levels! We have starter kits for everyone, no matter how
                    much experience you have had!
                </p>
                <div className="question">
                    <img src={asteroid3} alt="asteroid" id="asteroid3" />
                    <p>Do I work individually or with a team?</p>
                </div>
                <p className="answer">
                    Either! We strongly recommend working in a team as hackathons are
                    designed to be completed in groups and the work can be distributed
                    for a more collaborative atmosphere! We have a <b>4 person max!</b>
                </p>
                <div id="find-team">
                    <div className="question">
                        <img src={asteroid4} alt="asteroid" id="asteroid4" />
                        <p>How do I find a team?</p>
                    </div>
                    <p className="answer">
                        During registration we ask if you already have a team, if you do,
                        great! If not we will form teams with students who are also interested
                        in working in teams.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
