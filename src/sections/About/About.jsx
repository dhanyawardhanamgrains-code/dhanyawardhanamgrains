import React from "react";
import "./About.css";
import AboutImg from "../../assets/about.png";
import { leadershipData, licenseData, makeUsDifferentData } from "../../data/about";

const About = () => {
  return (
    <>
      <div id="about" className="about-section-container">
        <div className="about-container">
          <div className="about-text-container">
            <h1>About Dhanyawardhanam</h1>
            <p>
              Founded in December 2024, we bring together tradition and modern
              technology to deliver premium rice varieties to domestic and
              global markets
            </p>
          </div>
          <div className="about-content-container">
            <div className="about-story-container">
              <div className="about-story-text-container">
                <h1>Our Story</h1>
                <p>
                  Dhanyawardhanam Grains Pvt Ltd was founded in December 2024 by
                  Mr. Mukund Laxman Rakshe and Mr. Kaustubh Mukund Rakshe,
                  bringing together over 4 years of expertise in rice trade and
                  processing in the Junnar region.
                  <br />
                  <br />
                  Located in the heart of Maharashtra's rice-growing region at
                  Lenyadri Road, Golegaon, Junnar 410502, we have established
                  ourselves as a quality-focused rice processing company with a
                  vision to deliver premium rice varieties both domestically and
                  internationally.
                  <br />
                  <br />
                  Our commitment to quality, combined with advanced parboiling
                  technology, ensures that we retain the nutritional value,
                  aroma, and taste that makes our rice varieties stand out in
                  the competitive market.
                </p>
              </div>
              <img className="about-story-img" src={AboutImg} alt="about" />
            </div>
            <div className="about-leadership-container">
              <h1>Leadership Team</h1>
              <div className="about-leadership-card-container">
                {leadershipData.map((leader) => {
                  return (
                    <div key={leader.id} className="leadership-card">
                      <div className="leadership-card-details">
                        <h1>{leader.name}</h1>
                        <div className="leadership-card-title">
                          <p>{leader.title}</p>
                        </div>
                        <div className="leadership-card-details-text">
                          <p>{leader.description}</p>
                          {leader.phone && (
                            <p>
                              <span className="leadership-card-title-span">
                                Phone:
                              </span>{" "}
                              &nbsp;
                              {leader.phone}
                            </p>
                          )}
                          {leader.email && (
                            <p>
                              <span className="leadership-card-title-span">
                                Email:
                              </span>{" "}
                              &nbsp;
                              {leader.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div 
              id="documentation"
              className="documentation-container">
              <h1>Legal Documentation & Certifications</h1>
              <div className="documentation-card-container">
                {licenseData.map((license) => {
                  return (
                    <div key={license.id} className="documentation-card">
                      <div className="documentation-card-details">
                        <div className="documentation-card-details-text">
                          <span>{license.title}</span>
                          <p>{license.fullform}</p>
                        </div>
                      </div>
                      <div className="documentation-card-details-id-container">
                        <p>{license.licenseNo}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="make-us-different-container">
              <h1>What Makes Us Different</h1>
              <div className="make-us-card-container">
                {makeUsDifferentData.map((tab) => {
                  return (
                    <div key={tab.id} className="make-us-card">
                      <img src={tab.image} alt="Green Badge" />
                      <div className="make-us-card-details">
                        <h1>{tab.title}</h1>
                        <p>{tab.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="about-quote-container">
              <div className="about-quote-text-container">
                <h1>Join Our Journey</h1>
                <p>
                  Experience the difference that quality processing and
                  traditional values make. Partner with us for premium rice
                  varieties that meet international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
