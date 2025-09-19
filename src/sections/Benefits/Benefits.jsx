import React from "react";
import "./Benefits.css";
import { benefitsData } from "../../data/benefits";

const Benefits = () => {
  return (
    <>
      <div id="benefits" className="benefits-section-container">
        <div className="benefits-container">
          <div className="benefits-text-container">
            <h1>Health & Nutritional Benefits</h1>
            <p>
              Discover why parboiled rice is the superior choice for
              health-conscious consumers
            </p>
          </div>
          <div className="benefits-card-container">
            {benefitsData.map((benefit) => {
              return (
                <div key={benefit.id} className="benefits-card">
                  <div className="benefits-card-details">
                    <img src={benefit.icon} alt={`${benefit.title} icon`} />
                    <div className="benefits-card-details-text">
                      <h1>{benefit.title}</h1>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="benefits-quote-container">
            <div className="benefits-quote-text-container">
              <h1>Why Choose Parboiled Rice?</h1>
              <p>
                With superior nutrition retention, better health benefits, and
                enhanced cooking properties, our parboiled rice represents the
                perfect balance of tradition and modern processing technology.
              </p>
            </div>
            <button id="benefits-button">
              <p>Get Your Supply</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
