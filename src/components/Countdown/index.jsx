import "./style.css";
import { useState, useEffect } from "react";
import smoke from "../../assets/smoke-top.svg";
import rocket from "../../assets/rocket.svg";


const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // update countdown every second
    const countdownTimer = setInterval(() => {
      const hackathonStart = new Date("May 20, 2023 9:00:00").getTime();
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
    <section id="countdown-wrapper">
      <img src={rocket} alt="rocket" id="rocket" />
      <div id="countdown-text">
        <p class="countdown" id="tminus">T-Minus</p>
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
        <p class="countdown" id="until">until hacking starts!</p>
      </div>
      <img src={smoke} alt="smoke trail" id="smoke" />

    </section>
  );
};

export default Countdown;
