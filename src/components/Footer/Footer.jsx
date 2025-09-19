import React from "react";
import "./Footer.css";
import { footerDetailsLinks } from "../../data/footer";

const Footer = () => {
  return (
    <>
      <div className="footer-component-container">
        <div className="footer-container">
          <div className="footer-details-container">
            <div className="footer-details-title-container">
              <img src="/logo.svg" alt="Dhanyawardhanam Grains Logo" />
              <div className="footer-details-title-text-container">
                <h1>Dhanyawardhanam</h1>
                <p>Grains</p>
              </div>
            </div>
            <div className="footer-details-content-container">
              {footerDetailsLinks.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="footer-details-content-links-container"
                  >
                    <h1>{data.title}</h1>
                    <div className="footer-details-content-links-container-links">
                      {data.links.map((link) => {
                        return <a key={link.id} href={link.href}>{link.title}</a>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footer-subdetails-container">
            <p>© 2024 Dhanyawardhanam Grains Pvt Ltd. All rights reserved.</p>
            <div className="footer-subdetails-container-links">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Quality Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
