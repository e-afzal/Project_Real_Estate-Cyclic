import React, { useEffect, useState } from "react";

// STYLES
import "../styles/neighbourhood.css";

// PACKAGE
import axios from "axios";

// COMPONENTS
import Navbar from "../components/Navbar";
import Metatag from "../components/Metatag";
import ResultCard from "../components/ResultCard";
import ScrollToTop from "../components/ScrollToTop";
import NeighbourhoodModal from "../components/NeighbourhoodModal";

const NeighbourhoodScreen = ({ match }) => {
  const [keyword, setKeyword] = useState("");
  const [properties, setProperties] = useState([]);

  // Descriptions for 4 neighbourhoods
  const descriptions = [
    {
      name: "al barari",
      heading: "Going back to nature",
      image: "/images/neighbourhoods/barari/1.jpg",
      text: "Situated on the edge of Dubailand, in the attractive Nad Al Sheba district, Al Barari is a highly exclusive area offering something just a little bit different. Consisting of 300 villas surrounded by landscaped gardens, tranquil lakes and waterfalls, the properties are designed in a range of styles such as Balinese, Mediterranean and woodland. | Nature lovers can buy not just a lush haven of luxury, but can also access a 6-star boutique hotel, as well as nearby Cultural Island's libraries and theatres.",
      cta: "Al Barari is a lush, private paradise surrounded by beautiful themed gardens, naturally landscaped lakes, freshwater streams, cascades and waterways. Sixty percent of the community is covered by greenery. It is the perfect location for a lot of savvy buyers. It is a rare combination of construction quality, lifestyle choice, and of course, infrastructure.",
    },
    {
      name: "dubai marina",
      heading: "Luxury on the waterways",
      image: "/images/neighbourhoods/marina/1.jpg",
      text: "One of Dubai's most iconic destinations, the sprawling waterfront development that is Dubai Marina offers residents luxury tower living in an exhilarating atmosphere as they watch the world's super yachts drift by. | Exclusive nearby hotels such as Grosvenor House and The Address are home to some of the emirate's best fine dining outlets and bars. A long parade of cafes, shops, spas and salons encircling the water also contributes to the area's reputation as a great option for those looking to buy.",
      cta: "Dubai Marina is the ideal place for those seeking to live in one of the trendiest neighborhoods of Dubai. It's an area with plenty of services, retail outlets, restaurants, gyms and entertainment options. Located right next to the working place for many expats, Dubai Media City and Dubai Internet City.",
    },
    {
      name: "palm jumeirah",
      heading: "The hottest address in Dubai",
      image: "/images/neighbourhoods/palm/3.jpg",
      text: "The revered Palm Jumeirah is the world's largest man-made island and is comprised of a two kilometre long trunk, a crown made up of 17 fronds and a surrounding crescent. Its 4,000 exclusive villas and spacious apartments enjoy beautiful sea views along with amazing facilities such as a range of sophisticated beach clubs - each with swimming pool, gym and restaurant. | A dazzling selection of five-star resorts, including the famous Atlantis hotel, make this a truly unique place to buy a luxury home.",
      cta: "The Palm Jumeirah offers an unrivaled experience of wonder and serenity that only the privileged can experience. It is a man-made, palm-shaped island and is known as the eighth wonder of the world. It is a posh community and is home to some of the biggest multicultural celebrities and socialites from around the world.",
    },
    {
      name: "jumeirah beach residence",
      heading: "Cosmopolitan Beachfront-Living",
      image: "/images/neighbourhoods/jbr/1.jpg",
      text: "Jumeirah Beach Residence, more commonly known as JBR, is one of the liveliest attractions Dubai offers. A stunning waterfront community which comprises of 40 tall towers divided into six clusters, all overlooking the Arabian Gulf, JBR is perfectly designed for couples and young families. Offering a year-round beachy, resort lifestyle, all of the apartments here showcase sea-views.|This development is the largest single-phase residential and commercial project in the world, lined along a pathway of 1.7-kilometers known as The Walk, JBR. With beachfront cafés, world-class hotels, an eccentric nightlife, delightful shopping experiences and an excellent walking environment, JBR remains one of the most sought-after areas in the city.",
      cta: "JBR is one of the most sought-after developments in Dubai because of exclusive, yet young and lively lifestyle. Dubai's most popular beachside boulevard, The Walk, caters to the retail and dining needs of all visitors and residents alike, and living in JBR is known to be a great community. The luxurious waterfront apartments in the area are perfect for couples and young families who like living amongst a festive environment and surrounded by every convenience as it was designed to be one of Middle East's premier residential and vacation spots.",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `/api/neighbourhood/${match.params.keyword}`
      );
      setProperties(data);
      setKeyword(`${match.params.keyword}`);
    };
    fetchData();
  }, [match]);

  const keywordSplit = keyword.split("-").join(" ");

  // Find neighbourhood info based on matching keyword from url with 'name' from const 'descriptions' above
  const findNeighbourhood =
    keywordSplit &&
    descriptions.find((eachItem) => eachItem.name === keywordSplit);

  const findDescription = findNeighbourhood.text;
  const splitDescription = findDescription && findDescription.split("|");
  const splitCta = findNeighbourhood.cta && findNeighbourhood.cta;

  const findImage = findNeighbourhood.image;

  return (
    <>
      <ScrollToTop />
      <Metatag
        title={`${keywordSplit} properties for sale | Wolfram Real Estate`}
      />
      <Navbar paddingTop="0" />
      <section id="neighbourhood-page">
        <h3>{keywordSplit} properties for sale</h3>

        <section className="summary-grid">
          <div className="description">
            {splitDescription && splitDescription.map((each) => <p>{each}</p>)}
          </div>
          <div className="image">
            <img src={findImage} alt="Property" />
          </div>
        </section>

        <section className="cta-neighbourhood">
          <p>{splitCta && splitCta}</p>
          <NeighbourhoodModal property={keywordSplit} />
        </section>

        <section className="neighbourhood-grid">
          <ul className="grid">
            {properties.map((each) => (
              <ResultCard key={each._id} singleProperty={each} />
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default NeighbourhoodScreen;
