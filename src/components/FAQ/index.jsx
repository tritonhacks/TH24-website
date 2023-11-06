import "./style.css";
import compass from "../../assets/compass.svg";


const FAQ = () => {
    return (
        <section id="faq">
            <h1 id="faq-title">Looking for Answers?</h1>
            <img src={compass} alt="compass" id="compass" />
            <div id="questions">
                <div className="question">
                    <p>What is a hackathon?</p>
                </div>
                <p className="answer" id="hackAnswer">
                    It’s basically a sprint for programmers! Our hackathon is targeted for
                    high school students but typically a group of people interested in
                    programming come together to create a project in a sprint-like event!
                </p>
                <div className="question">
                    <p>What if I don’t know anything about coding?</p>
                </div>
                <p className="answer">
                    No worries! Our hackathon is designed for high school students of all
                    experience levels! We have starter kits for everyone, no matter how
                    much experience you have had!
                </p>
                <div className="question">
                    <p>Do I work individually or with a team?</p>
                </div>
                <p className="answer">
                    Either! We strongly recommend working in a team as hackathons are
                    designed to be completed in groups and the work can be distributed
                    for a more collaborative atmosphere! We have a <b>4 person max!</b>
                </p>
                <div id="find-team">
                    <div className="question">
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
