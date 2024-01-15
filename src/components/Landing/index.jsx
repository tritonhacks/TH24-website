import "./style.css";
import { useState, useEffect } from "react";
import React from 'react';

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

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Adjust the scroll position threshold as needed
            const scrollThreshold = 900;

            // Check if the scroll position is past the threshold
            if (window.scrollY > scrollThreshold && isVisible) {
                setIsVisible(false);
            } else if (window.scrollY <= scrollThreshold && !isVisible) {
                setIsVisible(true);
            }


        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    return (
        <section id="landing-wrapper">
            {/* Foreground - text, buttons, etc */}
            <div id="landing-fg">
                {isVisible && (
                    <h1 id="landing-title">TritonHacks</h1>
                )}
                {isVisible && (
                    <h2 id="landing-date">May 18th - 19th 2024</h2>
                )}
            </div>

            {/* Midground - static images */}
            <div id="landing-mg">
                <img src={mountains} alt="mountains" id="mountains" />
            </div>

            <div id="landing-bg">
                <img src={river} alt="river" id="river" />
                <div id="landing-text">

                </div>
                <div id="landing-btn-wrapper">
                    <a href="/" target="_blank" rel="noreferrer" class="landing-btn">Apply</a>
                </div>
                <div id="countdown-text">
                    <div id="timer">
                        <p id="days-num" class="num">
                            {days}
                        </p>
                        <p id="days-text" class="text">days</p>
                        <p id="hours-num" class="num">
                            {hours}
                        </p>
                        <p id="hours-text" class="text">hours</p>
                        <p id="minutes-num" class="num">
                            {minutes}
                        </p>
                        <p id="minutes-text" class="text">minutes</p>
                        <p id="seconds-num" class="num">
                            {seconds}
                        </p>
                        <p id="seconds-text" class="text">seconds</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;