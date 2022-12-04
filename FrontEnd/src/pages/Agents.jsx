import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/agents.css";

// PACKAGE
import axios from "axios";

// IMPORTS
import Navbar from "../components/Navbar";
import Metatag from "../components/Metatag";
import ScrollToTop from "../components/ScrollToTop";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    // Fetch All Agents
    const fetchAgents = async () => {
      const { data: agentData } = await axios.get("/api/agents");
      setAgents(agentData);
    };
    fetchAgents();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Metatag title="Our Agents | Wolfram Real Estate" />

      <Navbar paddingTop={0} />
      <section id="team">
        <h1>OUR TEAM</h1>
        <hr />
        <div className="team-grid">
          {agents &&
            agents.map((each, index) => {
              return (
                <Link
                  to={`/agents/${each._id}`}
                  className="agent-box"
                  key={index}
                >
                  <img src={each.image} alt={index + 1} />
                  <h3>{each.name}</h3>
                  <h4>{each.position}</h4>
                </Link>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Agents;
