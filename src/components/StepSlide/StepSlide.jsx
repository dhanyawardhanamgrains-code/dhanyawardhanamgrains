import React from "react";
import "./StepSlide.css";

const StepSlide = ({ data }) => {
  return (
    <article className="step-slide-container">
      <div className="step-slide-image-wrapper">
        <img 
          src={data.img} 
          alt={`Step ${data.id}: ${data.title}`}
          loading="lazy"
        />
        <button 
          className="step-slide-button"
          aria-label={`Step ${data.id}`}
          type="button"
        >
          <p>{`Step ${data.id}`}</p>
        </button>
      </div>
      <div className="step-slide-text-container">
        <div className="step-slide-content-container">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className="step-slide-details-container">
          <div className="step-slide-details-item-primary">
            <p>{data.detailsPrimary}</p>
          </div>
          {data.detailsSecondary && data.detailsSecondary !== "" && (
            <div className="step-slide-details-item-secondary">
              <p>{data.detailsSecondary}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default StepSlide;
