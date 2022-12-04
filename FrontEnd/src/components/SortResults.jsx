import React from "react";

// Used on 'searchPage'
const SortResults = ({ value, name }) => {
  return <option value={value}>{name}</option>;
};

export default SortResults;
