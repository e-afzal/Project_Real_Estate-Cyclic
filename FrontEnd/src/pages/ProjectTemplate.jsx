import React, { useEffect, useState } from "react";

// STYLES
import "../styles/projectTemplate.css";

// PACKAGE
import axios from "axios";

// COMPONENTS
import Metatag from "../components/Metatag";
import Navbar from "./../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import ProjectSwiper from "../components/ProjectSwiper";

const ProjectTemplate = ({ match }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    // Fetch Project based on ID
    const fetchProject = async () => {
      const { data } = await axios.get(`/api/projects/${match.params.id}`);
      setProject(data);
    };
    fetchProject();
  }, [match]);

  // Extract details from fetched data
  const {
    amenities,
    bedrooms,
    carouselImg,
    deliveryDate,
    description,
    developer,
    name,
    planBooking,
    planComplete,
    planHandover,
    price,
    pricePerSqFt,
    status,
    units,
  } = project;

  // Split the description
  const splitDescription = description && description.split("|");

  return (
    <>
      <ScrollToTop />
      <Metatag title={`${name} | Wolfram Real Estate`} />
      <Navbar paddingTop={0} />
      <section id="carousel">
        {carouselImg && <ProjectSwiper images={carouselImg} />}
      </section>
      <section id="developer">
        <div className="info">
          <h6>By {developer}</h6>
          <h2>{name}</h2>
          <p>{price && price.startsWith("AED") ? `From ${price}` : price}</p>
        </div>
      </section>

      <section id="project-details">
        <div id="aboutProject" className="aboutProject">
          {/* <h3>Details</h3> */}
          <div className="about-grid">
            <div className="detail">
              <h5>Price from</h5>
              <p>{price}</p>
            </div>
            <div className="detail">
              <h5>Price Per Sq.Ft</h5>
              <p>{pricePerSqFt}</p>
            </div>
            <div className="detail">
              <h5>Status</h5>
              <p>{status}</p>
            </div>
            <div className="detail">
              <h5>Delivery Date</h5>
              <p>{deliveryDate}</p>
            </div>
            <div className="detail">
              <h5>Total Units</h5>
              <p>{units && units.toLocaleString()}</p>
            </div>
            <div className="detail">
              <h5>Bedrooms</h5>
              <p>{bedrooms}</p>
            </div>
          </div>
        </div>

        <div className="description">
          <h5>DESCRIPTION</h5>
          {splitDescription &&
            splitDescription.map((each, index) => <p key={index}>{each}</p>)}
        </div>

        <div className="amenities">
          <h5>AMENITIES</h5>
          <div className="amenities-flex">
            {amenities &&
              amenities.map((each, index) => <p key={index}>✔ {each}</p>)}
          </div>
        </div>

        {/* <div className="location">
          <h5>LOCATION</h5>
          <div className="map-box"></div>
        </div> */}

        <div id="payment-plan" className="payment-plan">
          <h5>Payment Plan</h5>
          <div className="payment-flex">
            <div className="booking">
              <h4>{planBooking}%</h4>
              <p>On booking</p>
            </div>
            <div className="handover">
              <h4>{planHandover}%</h4>
              <p>On handover</p>
            </div>
            <div className="progress">
              <h4>{planComplete}%</h4>
              <p>Construction complete</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectTemplate;
