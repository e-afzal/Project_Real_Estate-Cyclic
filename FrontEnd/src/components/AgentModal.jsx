import React, { useState } from "react";

// STYLES
import "../styles/modal.css";

// PACKAGE
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

// Modal found on the 'SingleAgent' page when clicking on 'Contact' Agent
const AgentModal = ({ name }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section>
      <button
        className="btn"
        onClick={() => setShowModal(true)}
        style={{ outline: "none" }}
      >
        Contact {name}
      </button>

      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="Modal"
        overlayClassName="Overlay"
        style={{ content: { backgroundColor: "#f7f7f7" } }}
        closeTimeoutMS={400}
      >
        <div className="icon">
          <span className="close-icon" onClick={() => setShowModal(false)}>
            X
          </span>
        </div>

        <div className="contact-agent">
          <h3>CONTACT {name && name.toUpperCase()}</h3>
          <p>Kindly provide your details below</p>
          <hr />
        </div>

        <div className="modal-form-grid">
          <div className="modal-form">
            <form>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter message"
              ></textarea>
            </form>
          </div>
        </div>

        <button className="btn modal-btn" onClick={() => setShowModal(false)}>
          Submit Enquiry
        </button>
      </ReactModal>
    </section>
  );
};

export default AgentModal;
