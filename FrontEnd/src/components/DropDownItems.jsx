import React from "react";

// Component used on the 'search' page. E.g. 'priceFrom', 'priceTo' dropdowns.
const DropDownItems = ({ value, name, disabled, selected, id }) => {
  // const selectedElement = (e) => {
  //   onClick({ field: e.target.id, value: e.target.value });
  // };

  return (
    <>
      <option value={value} disabled={disabled} selected={selected} id={id}>
        {name}
      </option>
    </>
  );
};

DropDownItems.defaultProps = {
  value: "",
  name: "",
  disabled: false,
  selected: false,
};

export default DropDownItems;
