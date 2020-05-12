import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  /* Steps to navigating SEER */
  const steps = [
    {
      step: 1,
      name: "Sign up",
      image: "images/dash.png",
    },
    {
      step: 2,
      name: "Search",
      image: "images/dash.png",
    },
    {
      step: 3,
      name: "Verified!",
      image: "images/dash.png",
    },
  ];

  /* Currently Selected Step (default: Step 1) */
  const [selected, setSelected] = useState(1);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <h2 className="title is-spaced">Welcome to SEER</h2>
            <p className="subtitle">
              When you need to verify a claim, we are your curated
              <br />
              Software Engineering Evidence Repository.
            </p>
            <Link to="/" className="button is-primary">
              Start Search
            </Link>
          </div>
          <div className="column">
            {/* Display the image for the selected step (0-based array) */}
            <img src={steps[selected - 1].image} alt="" />
          </div>
        </div>

        <hr />

        <div className="level">
          {steps.map((step) => {
            // Apply green background to selected step
            let color = step.step === selected ? "has-background-primary" : "";

            // Render step component
            return (
              <div
                key={step.step}
                className="level-item"
                onClick={() => setSelected(step.step)}
                style={{ cursor: "pointer" }}
              >
                <div className={`number ${color}`}>{step.step}</div>
                <h4 className="title is-4">{step.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
