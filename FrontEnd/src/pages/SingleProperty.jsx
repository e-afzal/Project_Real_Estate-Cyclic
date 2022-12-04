import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/propertyTemplate.css";

// PACKAGE
import axios from "axios";

// ICON
import chevron from "../assets/images/icons/iconfinder_Chevron_Left_4781844.png";

// COMPONENTS
import Metatag from "../components/Metatag";
import Navbar from "./../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import PropertySwiper from "../components/PropertySwiper";

const SingleProperty = ({ match }) => {
  const [property, setProperty] = useState({});

  useEffect(() => {
    // Fetch Property Data based on ID
    const getDetails = async () => {
      const { data } = await axios.get(`/api/properties/${match.params.id}`);
      setProperty(data);
    };
    getDetails();
  }, [match]);

  // Extract details from fetched data
  const {
    _id,
    image,
    area,
    bathrooms,
    bedrooms,
    buildUp,
    category,
    completion,
    description,
    features,
    name,
    parking,
    price,
    refNo,
    agent,
  } = property;

  // Split the description, extract each paragraph and
  // assign to an index
  let descSplit;
  if (description) {
    descSplit = description.split("|");
  }

  return (
    <>
      <ScrollToTop />
      <Metatag title={`${name} | Wolfram Real Estate`} />

      <Navbar paddingTop="0" />

      <section id="gallery">
        <div
          className="chevron-box"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={chevron} alt="chevron-left" className="chevron--left" />
          <Link to="/search">BACK TO SEARCH PAGE</Link>
        </div>
        <div className="gallery-grid">
          <div className="brief">
            <h1>{name}</h1>
            <h2>{area}</h2>
            <div className="brief-grid">
              <div className="each-detail">
                <h4>Price:</h4>
                <p>AED {price && price.toLocaleString()}</p>
              </div>
              <div className="each-detail">
                <h4>Property Type:</h4>
                <p style={{ textTransform: "capitalize" }}>{category}</p>
              </div>
              <div className="each-detail">
                <h4>Reference Number:</h4>
                <p>GS-S-{refNo}</p>
              </div>
              <div className="each-detail">
                <h4>Completion Date:</h4>
                <p>{completion}</p>
              </div>
              <div className="each-detail">
                <h4>Bedrooms:</h4>
                <p>{bedrooms}</p>
              </div>
              <div className="each-detail">
                <h4>Bathrooms:</h4>
                <p>{bathrooms}</p>
              </div>
              <div className="each-detail">
                <h4>Built Up Area:</h4>
                <p>{buildUp && buildUp.toLocaleString()} sq ft.</p>
              </div>
              <div className="each-detail">
                <h4>Car Parking Space:</h4>
                <p>{parking}</p>
              </div>
            </div>
          </div>
          <div className="gallery" style={{ width: "100%" }}>
            {image && <PropertySwiper images={image} />}
          </div>
        </div>
      </section>

      <section id="details">
        <ul className="grid">
          <li className="property-details">
            <h1>Property Description</h1>
            {descSplit &&
              descSplit.map((each, index) => <p key={index}>{each}</p>)}
          </li>
          <li className="agent-details">
            <h3>Agent Details</h3>

            <img
              className="agent-img"
              src={agent && agent.image}
              alt={agent && agent.name}
            />

            <ul className="agent-info">
              <li>{agent && agent.name}</li>
              <li>
                <a href={`tel:${agent && agent.contact.trim()}`}>
                  {agent && agent.contact}
                </a>
              </li>
              <li>
                <a href={`mailto:${agent && agent.email}`}>
                  {agent && agent.email}
                </a>
              </li>
              <li>
                <Link to={`/agents/${agent && agent._id}`}>
                  View Agent Profile
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="features">
        <h3>Features & Amenities</h3>
        {features && features.map((each, index) => <p key={index}>{each}</p>)}
      </section>
    </>
  );
};

export default SingleProperty;
