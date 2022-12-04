import React, { useState } from "react";

// STYLES
import "../styles/contact.css";
import "react-toastify/dist/ReactToastify.css";

// PACKAGE
import { ToastContainer, toast } from "react-toastify";

// COMPONENTS
import Navbar from "../components/Navbar";
import Metatag from "../components/Metatag";
import ScrollToTop from "../components/ScrollToTop";

const Contact = ({ history }) => {
  const [option, setOption] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // HANDLER
  const formHandler = (e) => {
    e.preventDefault();
    if (!option || !name || !email || !number || !message) {
      setErrorMessage("Please ensure all the above fields are complete");
      toast.error("Please ensure all the above fields are complete", {
        progressStyle: { backgroundColor: "tomato" },
      });
    } else {
      toast.success("Message delivered successfully", {
        progressStyle: { backgroundColor: "limegreen" },
      });
    }
  };

  return (
    <>
      <ScrollToTop />
      <Metatag title="Contact us | Wolfram Real Estate" />

      <ToastContainer
        style={{ fontSize: "13px", textAlign: "center", lineHeight: 1.5 }}
        theme="dark"
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar paddingTop={0} />
      <section id="contact">
        <div className="contact-grid">
          <div className="contact-details">
            <h3>Connect with us</h3>
            <p>
              We invite you to provide us with feedback or contact a specific
              department with any queries you might have.
            </p>

            <div className="address">
              <p>Wolfram Realty</p>
              <p>Level 6, Jumeirah Emirates Towers,</p>
              <p>Sheikh Zayed Road, DIFC</p>
              <p>Dubai, United Arab Emirates</p>
            </div>

            <div className="email">
              <a href="mailto:info@wolframrealty.com">info@wolframrealty.com</a>
            </div>

            <div className="phone">
              <a href="tel:+97143198181">+971 4 319 8181</a>
            </div>
          </div>
          <div className="contact-form">
            <h3>Have questions?</h3>
            <form onSubmit={formHandler}>
              <select
                name="option"
                id="option"
                onChange={(e) => setOption(e.target.value)}
              >
                <option selected disabled>
                  I'd like to:
                </option>
                <option value="rentProperty">Rent a property</option>
                <option value="purchaseProperty">Purchase a property</option>
                <option value="listProperty">List/Sell a property</option>
                <option value="adsAndSponsorship">
                  Discuss about advertising and/or sponsorship
                </option>
                <option value="generalFeedback">Give a general feedback</option>
              </select>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value.trim())}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value.trim())}
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your contact number"
                onChange={(e) => setNumber(e.target.value.trim())}
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                onChange={(e) => setMessage(e.target.value.trim())}
              ></textarea>
              <button type="submit">SEND ENQUIRY</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
