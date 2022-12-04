import React from "react";
import { Link } from "react-router-dom";

// ICONS
import iconBed from "../assets/images/icons/bed-flaticon.svg";
import iconBath from "../assets/images/icons/bath.svg";
import iconRuler from "../assets/images/icons/square-ruler-flaticon.svg";

// Found on 'Home' page. These are the 3 'cards'.
const FeaturedListing = ({ singleListing }) => {
  const { name, area, price, buildUp, bedrooms, bathrooms, cardNo, _id } =
    singleListing;

  return (
    <li className={`grid-card-${cardNo}`}>
      <Link to={`/properties/${_id}`}>
        <div className={`card-img-${cardNo}`}></div>

        <div className="card-details">
          <h5>
            {name}, {area}
          </h5>
          <p>AED {price.toLocaleString()}</p>

          <div className="flex-features">
            <div className="features-bed">
              <img src={iconBed} alt="bed-icon" height="30" />
              <p>{bedrooms}</p>
            </div>

            <div className="features-bath">
              <img src={iconBath} alt="bath-icon" height="30" />
              <p>{bathrooms}</p>
            </div>

            <div className="features-area">
              <img src={iconRuler} alt="measure-icon" height="30" />
              <p>{buildUp.toLocaleString()} sq.ft</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default FeaturedListing;
