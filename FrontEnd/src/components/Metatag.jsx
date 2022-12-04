import React from "react";

// PACKAGE
import { Helmet } from "react-helmet";

// Component used on EACH page/screen to give it 'metatags'
const Metatag = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Metatag.defaultProps = {
  title: "Wolfram: Luxury Homes, Villas and Apartments in Dubai",
  description:
    "The leading high-end property brokerage in UAE with an exclusive portfolio of luxury villas, apartments and penthouses for sale & rent in Dubai.",
  keywords:
    "dubai, dubai properties, dubai villa, dubai apartment, uae property, uae properties, uae villa, uae apartment",
};

export default Metatag;
