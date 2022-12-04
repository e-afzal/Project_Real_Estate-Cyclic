import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import SingleProperty from "./pages/SingleProperty";

import ProjectTemplate from "./pages/ProjectTemplate";

import Agents from "./pages/Agents";
import AgentTemplate from "./pages/AgentTemplate";

import Contact from "./pages/Contact";

import NeighbourhoodScreen from "./pages/NeighbourhoodScreen";

import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchPage} />
        <Route path="/properties/:id" component={SingleProperty} />

        <Route path="/projects/:id" component={ProjectTemplate} />

        <Route exact path="/agents" component={Agents} />
        <Route path="/agents/:id" component={AgentTemplate} />

        <Route path="/contact" component={Contact} />

        <Route path="/neighbourhood/:keyword" component={NeighbourhoodScreen} />

        <Footer marginTop="3.5rem" />
      </Router>
    </>
  );
};

export default App;
