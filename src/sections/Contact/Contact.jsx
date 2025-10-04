import React, { useState } from "react";
import "./Contact.css";
import { contactData } from "../../data/contact";

const Contact = () => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_PUBLIC_ACCESS_KEY;
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    message: "",
  });

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateMessage = (message) => {
    const wordCount = message.trim().split(/\s+/).filter(word => word.length > 0).length;
    return wordCount <= 100;
  };

  const getWordCount = (message) => {
    return message.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  // Check if all required fields are valid
  const isFormValid = () => {
    const hasRequiredFields = formData.fullName.trim() && 
                             formData.email.trim() && 
                             formData.company.trim() && 
                             formData.message.trim();
    
    const hasValidEmail = !formData.email || validateEmail(formData.email);
    const hasValidPhone = !formData.phone || validatePhone(formData.phone);
    const hasValidMessage = !formData.message || validateMessage(formData.message);
    
    return hasRequiredFields && hasValidEmail && hasValidPhone && hasValidMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }

    // Validate email
    if (name === "email" && value) {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: "Please enter a valid email address" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }

    // Validate phone
    if (name === "phone" && value) {
      if (!validatePhone(value)) {
        setErrors({ ...errors, phone: "Phone number must contain exactly 10 digits" });
      } else {
        setErrors({ ...errors, phone: "" });
      }
    }

    // Validate message
    if (name === "message" && value) {
      if (!validateMessage(value)) {
        setErrors({ ...errors, message: "Message must not exceed 100 words" });
      } else {
        setErrors({ ...errors, message: "" });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const newErrors = {};
    
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Phone number must contain exactly 10 digits";
    }
    
    if (formData.message && !validateMessage(formData.message)) {
      newErrors.message = "Message must not exceed 100 words";
    }
    
    // If there are validation errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setResult("Please fix the errors below ❌");
      return;
    }
    
    setResult("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      }),
    });

    const data = await response.json();
    if (data.success) {
      console.log(data);
      setResult("Message sent successfully ✅");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setErrors({ email: "", phone: "", message: "" });
    } else {
      console.log(data);
      setResult("Something went wrong ❌");
    }
  };

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
                    <div
                      key={contact.id}
                      className="contact-details-card-details"
                    >
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
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-form-details-input-container">
                    <label>Email *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p style={{ color: "red", fontSize: "14px", margin: "5px 0 0 0" }}>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="contact-form-details-container">
                  <div className="contact-form-details-input-container">
                    <label>Phone No.</label>
                    <input
                      name="phone"
                      type="number"
                      placeholder="Enter your phone no."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p style={{ color: "red", fontSize: "14px", margin: "5px 0 0 0" }}>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="contact-form-details-input-container">
                    <label>Company/Organization *</label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Enter company name"
                      value={formData.company}
                      onChange={handleChange}
                    />
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
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5px" }}>
                    <div>
                      {errors.message && (
                        <p style={{ color: "red", fontSize: "14px", margin: "0" }}>
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <p style={{ 
                      fontSize: "12px", 
                      color: getWordCount(formData.message) > 100 ? "red" : "#666",
                      margin: "0"
                    }}>
                      {getWordCount(formData.message)}/100 words
                    </p>
                  </div>
                </div>
              </div>
              <button 
                id="contact-form-button" 
                type="submit"
                disabled={!isFormValid()}
                style={{
                  opacity: isFormValid() ? 1 : 0.6,
                  cursor: isFormValid() ? 'pointer' : 'not-allowed',
                  backgroundColor: isFormValid() ? '' : '#ccc'
                }}
              >
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
