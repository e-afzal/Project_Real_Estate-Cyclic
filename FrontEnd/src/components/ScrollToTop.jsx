import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

// Auto-scroll to the top when navigating to ANY page
// using the 'Link' element
const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);
  return null;
};

export default withRouter(ScrollToTop);
