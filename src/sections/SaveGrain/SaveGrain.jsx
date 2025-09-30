import React from "react";
import "./SaveGrain.css";
import {saveGrainData} from "../../data/saveGrain";

const SaveGrain = () => {
  return (
    <>
      <div className="save-grain-section-container">
        <div className="save-grain-container">
          <div className="save-grain-text-container">
            <h1>Save Grains - Packaging technology we use</h1>
          </div>
          <div className="save-grain-card-container">
            {saveGrainData.map((grain) => {
              return (
                <div key={grain.id} className="grain-card">
                  <div className="grain-card-details">
                    <img src={grain.icon} alt={`${grain.title} icon`} />
                    <div className="grain-card-details-text">
                      <h1>{grain.title}</h1>
                      <p>{grain.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveGrain;
