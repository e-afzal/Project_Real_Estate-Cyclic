import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/agent.css";

// PACKAGE
import axios from "axios";

// IMPORTS
import Metatag from "../components/Metatag";
import Navbar from "./../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import AgentModal from "../components/AgentModal";

const AgentTemplate = ({ match }) => {
  const [agentDetails, setAgentDetails] = useState({});

  useEffect(() => {
    // Fetch Single Agent Data
    const fetchDetails = async () => {
      const { data } = await axios.get(`/api/agents/${match.params.id}`);
      setAgentDetails(data);
    };
    fetchDetails();
  }, [match]);

  // Extract details from 'agentDetails'
  const {
    experience,
    image,
    language,
    listings,
    name,
    position,
    qualification,
  } = agentDetails;

  // Retrieve agent's first name and use in 'AgentModal' component
  const splitName = name && name.split(" ")[0];

  return (
    <>
      <Metatag title={`${name} | Wolfram Real Estate Agent`} />
      <ScrollToTop />
      <Navbar paddingTop={0} />
      <section id="agent">
        <div className="agent-grid">
          <div className="agent-snapshot">
            <img src={image} alt="Wolfram Agent-Aidan Glauert" />
            <div className="single-detail">
              <h3>Qualification(s)</h3>
              <h4>{qualification}</h4>
            </div>
            <div className="single-detail">
              <h3>Spoken Languages</h3>
              <h4>{language}</h4>
            </div>
            <div className="single-detail">
              <h3>Real Estate Experience</h3>
              <h4>{experience} years</h4>
            </div>
          </div>

          <div className="agent-details">
            <h1>{name}</h1>
            <h2>{position}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              illum doloremque architecto vel, ex, non labore ipsam omnis iusto
              quia officiis dignissimos earum deserunt optio? Laborum repellat,
              unde corrupti repellendus dicta ullam vitae blanditiis nam, quae,
              eligendi reiciendis. Tenetur odio velit unde eaque iste quae in
              autem rem quas laboriosam eius, commodi et blanditiis accusantium
              eveniet impedit, nobis a mollitia dicta hic, nesciunt dolore fuga.
              Fuga assumenda magnam temporibus explicabo reiciendis velit earum
              doloremque dignissimos. Quas est aspernatur fugiat porro delectus
              nulla. Ab odit reprehenderit labore nihil numquam consequatur
              ipsa, eos dicta molestiae accusamus porro quidem expedita
              aspernatur officia illum.
            </p>

            {listings && listings.length > 0 ? (
              <AgentModal name={splitName} />
            ) : null}

            {listings && listings.length > 0 && (
              <div className="agent-listings">
                <h2>Property Listings by {splitName}</h2>
                <table className="listing-table">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Area</th>
                      <th>Type</th>
                      <th>Size</th>
                      <th>Bedrooms</th>
                      <th>Price</th>
                      <th>View Property</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listings &&
                      listings.map((each, index) => {
                        return (
                          <tr key={index}>
                            <td>{each.name}</td>
                            <td>{each.area}</td>
                            <td style={{ textTransform: "capitalize" }}>
                              {each.category}
                            </td>
                            <td>{each.buildUp.toLocaleString()} sq. ft</td>
                            <td>{each.bedrooms}</td>
                            <td>AED {each.price.toLocaleString()}</td>
                            <td>
                              <Link to={`/properties/${each._id}`}>View</Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AgentTemplate;
