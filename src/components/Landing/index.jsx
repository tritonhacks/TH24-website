import "./style.css";
import { useState, useEffect } from "react";

import mountains from "../../assets/mountains.svg";
import river from "../../assets/river.svg";

const Landing = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // update countdown every second
        const countdownTimer = setInterval(() => {
            const hackathonStart = new Date("May 18, 2024 9:00:00").getTime();
            const now = new Date().getTime();

            // find the time between now and the count down date
            const timeLeft = hackathonStart - now;

            // calculations for days, hours, minutes, seconds
            var updatedDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var updatedHours = Math.floor(
                (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var updatedMinutes = Math.floor(
                (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
            );
            var updatedSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // if countdown is finished, just display 0s
            if (timeLeft < 0) {
                updatedDays = 0;
                updatedHours = 0;
                updatedMinutes = 0;
                updatedSeconds = 0;
            }

            setDays(updatedDays);
            setHours(updatedHours);
            setMinutes(updatedMinutes);
            setSeconds(updatedSeconds);
        }, 1000);

        return () => clearInterval(countdownTimer);
    }, []);

    return (
        <section id="landing-wrapper">
            {/* Foreground - text, buttons, etc */}
            <div id="landing-fg">
                <h1 id="landing-title">TritonHacks</h1>
                <div id="landing-btn-wrapper">
                    <a href="#" target="_blank" rel="noreferrer" class="landing-btn">Apply</a>
                </div>
                <div id="countdown-text">
                    <div id="timer">
                        <div class="timer-element">
                            <p id="days-num" class="num">
                                {days}
                            </p>
                            <p class="text">days</p>
                        </div>
                        <div class="timer-element">
                            <p id="hours-num" class="num">
                                {hours}
                            </p>
                            <p class="text">hours</p>
                        </div>
                        <div class="timer-element">
                            <p id="minutes-num" class="num">
                                {minutes}
                            </p>
                            <p class="text">minutes</p>
                        </div>
                        <div class="timer-element">
                            <p id="seconds-num" class="num">
                                {seconds}
                            </p>
                            <p class="text">seconds</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Midground - static images */}
            <div id="landing-mg">
                <img src={mountains} alt="mountains" id="mountains" />
            </div>

            <div id="landing-bg">
                <img src={river} alt="river" id="river" />
            </div>
        </section>
    );
};

export default Landing;