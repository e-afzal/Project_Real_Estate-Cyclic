import React from "react";

// ICONS
import iconBed from "../assets/images/icons/bed-flaticon.svg";
import iconBath from "../assets/images/icons/bath.svg";
import iconRuler from "../assets/images/icons/square-ruler-flaticon.svg";

// Structure for EACH 'card' on the 'searchProperty' page
const ResultCard = ({ singleProperty }) => {
  const { name, area, price, buildUp, bedrooms, bathrooms, _id, image } =
    singleProperty;

  const singleImage = image ? image[0] : "";

  return (
    <li className={`grid-card`}>
      <a href={`/properties/${_id}`} rel="noreferrer">
        <div>
          <img
            src={singleImage}
            alt=""
            className="card-img"
            style={{
              // backgroundImage: `url(${image})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
            }}
          />
        </div>

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
      </a>
    </li>
  );
};

export default ResultCard;
