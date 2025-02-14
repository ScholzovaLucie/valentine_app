import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cyzbvqi",
        "template_5fxd1hr",
        form.current,
        "KI7bceeNiZsp0c9Kp"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("E-mail byl úspěšně odeslán!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleMouseEnter = () => {
    document.querySelector(".card").style.top = "-90px";
  };

  const handleMouseLeave = () => {
    document.querySelector(".card").style.top = "0";
  };

  return (
    <>
      <div className="container">
        <div
          className="valentines"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="envelope"></div>
          <div className="front"></div>
          <div className="card">
            <div className="text">
              Šťastný
              <br />
              valentýn
              <br />
              lásko!
            </div>
            <div className="heart"></div>
          </div>
          <div className="hearts">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
}

export default App;
