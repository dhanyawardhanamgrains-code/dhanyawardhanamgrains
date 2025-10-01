import React from "react";
import "./Contact.css";
import { contactData } from "../../data/contact";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, phone, company, message);
  }

  return (
    <>
      <div id="contact" className="contact-section-container">
        <div className="contact-container">
          <div className="contact-text-container">
            <h1>Get In Touch</h1>
            <p>
              Ready to experience premium quality rice? <br /> Contact us for
              quotes, partnerships, or any questions about our products and
              services.
            </p>
          </div>
          <div className="contact-form-container">
            <div className="contact-details-container">
              <div className="contact-details-card-container">
                {contactData.map((contact) => {
                  return (
                    <div key={contact.id} className="contact-details-card-details">
                      <img src={contact.image} alt={`${contact.title} icon`} />
                      <div className="contact-details-card-details-text">
                        <h1>{contact.title}</h1>
                        <p>{contact.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="contact-timing-container">
                <div className="contact-timing-card-container">
                  <h1>Business Hours</h1>
                  <div className="timing-container">
                    <p>Monday-Friday</p>
                    <div className="timing-container-time">
                      <p>9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="timing-container">
                    <p>Saturday</p>
                    <div className="timing-container-time">
                      <p>9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="timing-container">
                    <p>Sunday</p>
                    <div className="timing-container-time">
                      <p>Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="contact-form-container-details">
                <div className="contact-form-details-container">
                  <div className="contact-form-details-input-container">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="contact-form-details-input-container">
                    <label>Email *</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="contact-form-details-container">
                  <div className="contact-form-details-input-container">
                    <label>Phone No.</label>
                    <input type="number" placeholder="Enter your phone no." />
                  </div>
                  <div className="contact-form-details-input-container">
                    <label>Company/Organization *</label>
                    <input type="text" placeholder="Enter company name" />
                  </div>
                </div>
                {/* <div className="contact-form-details-input-container">
                  <label>Inquiry Type</label>
                  <input type="dropdown" placeholder="Select Inquiry Type" />
                </div> */}
                <div className="contact-form-details-input-container">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell us about your requirements, quantity needed, delivery location, etc."
                  ></textarea>
                </div>
              </div>
              <button id="contact-form-button" type="submit">
                <p>Send Message</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
