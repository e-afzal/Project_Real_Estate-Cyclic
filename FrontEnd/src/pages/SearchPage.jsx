import React, { useState, useEffect } from "react";

// STYLES
import "../styles/searchResult.css";

// PACKAGES
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// COMPONENTS
import Metatag from "../components/Metatag";
import Navbar from "./../components/Navbar";
import SortResults from "../components/SortResults";
import ResultCard from "../components/ResultCard";
import ScrollToTop from "../components/ScrollToTop";
import DropDownItems from "../components/DropDownItems";

const SearchPage = () => {
  const [dropdownItems, setDropdownItems] = useState({
    BoS: [
      { name: "Buy or Rent", disabled: true, selected: true },
      { value: "sale", name: "Buy" },
      { value: "rent", name: "Rent" },
    ],
    type: [
      { name: "Property Type", disabled: true, selected: true },
      { value: "all", name: "All" },
      { value: "apartment", name: "Apartment" },
      { value: "villa", name: "Villa" },
      { value: "townhouse", name: "Townhouse" },
      { value: "penthouse", name: "Penthouse" },
    ],
    priceFrom: [
      { name: "Min. Price", disabled: true, selected: true },
      { value: "1000000", name: "AED 1,000,000" },
      { value: "2000000", name: "AED 2,000,000" },
      { value: "3000000", name: "AED 3,000,000" },
      { value: "4000000", name: "AED 4,000,000" },
      { value: "5000000", name: "AED 5,000,000" },
      { value: "6000000", name: "AED 6,000,000" },
      { value: "7000000", name: "AED 7,000,000" },
      { value: "8000000", name: "AED 8,000,000" },
      { value: "9000000", name: "AED 9,000,000" },
      { value: "10000000", name: "AED 10,000,000" },
      { value: "15000000", name: "AED 15,000,000" },
      { value: "20000000", name: "AED 20,000,000" },
      { value: "25000000", name: "AED 25,000,000" },
      { value: "30000000", name: "AED 30,000,000" },
      { value: "35000000", name: "AED 35,000,000" },
      { value: "40000000", name: "AED 40,000,000" },
      { value: "45000000", name: "AED 45,000,000" },
      { value: "50000000", name: "AED 50,000,000" },
    ],
    priceTo: [
      { name: "Max. Price", disabled: true, selected: true },
      { value: "1000000", name: "AED 1,000,000" },
      { value: "2000000", name: "AED 2,000,000" },
      { value: "3000000", name: "AED 3,000,000" },
      { value: "4000000", name: "AED 4,000,000" },
      { value: "5000000", name: "AED 5,000,000" },
      { value: "6000000", name: "AED 6,000,000" },
      { value: "7000000", name: "AED 7,000,000" },
      { value: "8000000", name: "AED 8,000,000" },
      { value: "9000000", name: "AED 9,000,000" },
      { value: "10000000", name: "AED 10,000,000" },
      { value: "15000000", name: "AED 15,000,000" },
      { value: "20000000", name: "AED 20,000,000" },
      { value: "25000000", name: "AED 25,000,000" },
      { value: "30000000", name: "AED 30,000,000" },
      { value: "35000000", name: "AED 35,000,000" },
      { value: "40000000", name: "AED 40,000,000" },
      { value: "45000000", name: "AED 45,000,000" },
      { value: "50000000", name: "AED 50,000,000" },
    ],
    minBD: [
      { name: "Min. Bed", disabled: true, selected: true },
      { value: "0.5", name: "Studio" },
      { value: "1", name: "1 Bedrooms" },
      { value: "2", name: "2 Bedrooms" },
      { value: "3", name: "3 Bedrooms" },
      { value: "4", name: "4 Bedrooms" },
      { value: "5", name: "5 Bedrooms" },
      { value: "6", name: "6 Bedrooms" },
      { value: "7", name: "7 Bedrooms +" },
    ],
    maxBD: [
      { name: "Max. Bed", disabled: true, selected: true },
      { value: "0.5", name: "Studio" },
      { value: "1", name: "1 Bedrooms" },
      { value: "2", name: "2 Bedrooms" },
      { value: "3", name: "3 Bedrooms" },
      { value: "4", name: "4 Bedrooms" },
      { value: "5", name: "5 Bedrooms" },
      { value: "6", name: "6 Bedrooms" },
      { value: "7", name: "7 Bedrooms +" },
    ],
    minArea: [
      { name: "Min. Area", disabled: true, selected: true },
      { value: "1000", name: "1000 sq ft." },
      { value: "2000", name: "2000 sq ft." },
      { value: "3000", name: "3000 sq ft." },
      { value: "4000", name: "4000 sq ft." },
      { value: "5000", name: "5000 sq ft." },
      { value: "6000", name: "6000 sq ft." },
      { value: "7000", name: "7000 sq ft." },
      { value: "8000", name: "8000 sq ft." },
      { value: "9000", name: "9000 sq ft." },
      { value: "10000", name: "10000 sq ft." },
    ],
    maxArea: [
      { name: "Max. Area", disabled: true, selected: true },
      { value: "1000", name: "1000 sq ft." },
      { value: "2000", name: "2000 sq ft." },
      { value: "3000", name: "3000 sq ft." },
      { value: "4000", name: "4000 sq ft." },
      { value: "5000", name: "5000 sq ft." },
      { value: "6000", name: "6000 sq ft." },
      { value: "7000", name: "7000 sq ft." },
      { value: "8000", name: "8000 sq ft." },
      { value: "9000", name: "9000 sq ft." },
      { value: "10000", name: "10000 sq ft." },
      { value: "11000", name: "11000 sq ft." },
      { value: "12000", name: "12000 sq ft." },
      { value: "13000", name: "13000 sq ft." },
      { value: "14000", name: "14000 sq ft." },
      { value: "15000", name: "15000 sq ft." },
    ],
  });
  const [sortItems, setSortItems] = useState([
    { value: "Newest", name: "Newest" },
    { value: "PriceL2H", name: "Price (Low to High)" },
    { value: "PriceH2L", name: "Price (High to Low)" },
    { value: "BedroomsL2H", name: "Bedrooms (Low to High)" },
    { value: "BedroomsH2L", name: "Bedrooms (High to Low)" },
    { value: "BathroomsL2H", name: "Bathrooms (Low to High)" },
    { value: "BathroomsH2L", name: "Bathrooms (High to Low)" },
  ]);
  const [transaction, setTransaction] = useState("sale");
  const [category, setCategory] = useState("all");
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(100000000);
  const [minBeds, setMinBeds] = useState(0);
  const [maxBeds, setMaxBeds] = useState(10);
  const [minBath, setMinBath] = useState(0);
  const [maxBath, setMaxBath] = useState(10);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(100000);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    // FETCH 'ALL' PROPERTIES
    const fetchProperties = async () => {
      const { data } = await axios.get("/api/properties");
      setFiltered(data);
    };
    fetchProperties();
  }, []);

  // HANDLERS
  // FILTER THROUGH THE 'BACKEND'
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (minBeds > maxBeds) {
      toast.error("Min. Bed must be less than Max. Bed");
      return;
    } else if (priceFrom > priceTo) {
      toast.error("Min. Price must be less than Max. Price");
      return;
    } else if (minArea > maxArea) {
      toast.error("Min. Area must be less than Max. Area");
      return;
    } else {
      const { data } = await axios.post("/api/properties/search", {
        transaction,
        category,
        priceFrom,
        priceTo,
        minBeds,
        maxBeds,
        minArea,
        maxArea,
        search,
      });
      setFiltered(data);
    }
  };

  // FILTER THROUGH THE 'SEARCH BAR'
  const handleSearch = (searchTerm) => {
    setSearch(searchTerm.trim());
  };

  // SORT HANDLER
  const handleSort = (element) => {
    setSort(element);
  };
  // SORT RESULT
  filtered.sort((a, b) => {
    // For "NEWEST", ID for each property should be 1 to whatever.
    if (sort === "Newest") return a.id - b.id;
    if (sort === "PriceH2L") return b.price - a.price;
    if (sort === "PriceL2H") return a.price - b.price;
    if (sort === "BedroomsH2L") return b.bedrooms - a.bedrooms;
    if (sort === "BedroomsL2H") return a.bedrooms - b.bedrooms;
    if (sort === "BathroomsH2L") return b.bathrooms - a.bathrooms;
    if (sort === "BathroomsL2H") return a.bathrooms - b.bathrooms;
  });

  return (
    <>
      <ScrollToTop />
      <Metatag title="Properties for sale in U.A.E. | Wolfram Real Estate" />
      <ToastContainer
        style={{ fontSize: "13px" }}
        theme="dark"
        progressStyle={{ backgroundColor: "crimson" }}
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar paddingTop={0} />

      <section id="filter">
        <div className="searchbox">
          <form className="form-grid">
            <select
              name="transaction"
              id="BoS"
              onChange={(e) => setTransaction(e.target.value)}
            >
              {dropdownItems.BoS.map((each, index) => (
                <DropDownItems
                  key={index}
                  value={each.value}
                  name={each.name}
                  disabled={each.disabled}
                  selected={each.selected}
                  id="BoS"
                />
              ))}
            </select>

            <select
              name="category"
              id="type"
              onChange={(e) => setCategory(e.target.value)}
            >
              {dropdownItems.type.map((each, index) => (
                <DropDownItems
                  key={index}
                  value={each.value}
                  name={each.name}
                  disabled={each.disabled}
                  selected={each.selected}
                  id="category"
                />
              ))}
            </select>

            <input
              type="text"
              name="query"
              id="query"
              placeholder="Search Property"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />

            <select
              name="priceFrom"
              id="priceFrom"
              onChange={(e) => setPriceFrom(e.target.value)}
            >
              {dropdownItems.priceFrom.map((each, index) => (
                <DropDownItems
                  key={index}
                  value={each.value}
                  name={each.name}
                  disabled={each.disabled}
                  selected={each.selected}
                  id="priceFrom"
                />
              ))}
            </select>

            <select
              name="priceTo"
              id="priceTo"
              onChange={(e) => setPriceTo(e.target.value)}
            >
              {dropdownItems.priceTo.map((each, index) => (
                <DropDownItems
                  key={index}
                  value={each.value}
                  name={each.name}
                  disabled={each.disabled}
                  selected={each.selected}
                  id="priceTo"
                />
              ))}
            </select>

            <select
              name="minBeds"
              id="minBD"
              onChange={(e) => setMinBeds(e.target.value)}
            >
              {dropdownItems.minBD.map((each, index) => (
                <DropDownItems
                  key={index}
                  value={each.value}
                  name={each.name}
                  disabled={each.disabled}
                  selected={each.selected}
                  id="minBD"
                />
              ))}
            </select>

            <select
              name="maxBeds"
              id="maxBD"
              onChange={(e) => setMaxBeds(e.target.value)}
            >
              {dropdownItems.maxBD.map((each, index) => (
                <DropDownItems
                  key={index}
                  value={each.value}
                  name={each.name}
                  disabled={each.disabled}
                  selected={each.selected}
                  id="maxBD"
                />
              ))}
            </select>

            <select
              name="minArea"
              id="minArea"
              onChange={(e) => setMinArea(e.target.value)}
            >
              {dropdownItems.minArea.map((each, index) => (
                <DropDownItems
                  key={index}
                  value={each.value}
                  name={each.name}
                  disabled={each.disabled}
                  selected={each.selected}
                  id="minArea"
                />
              ))}
            </select>

            <select
              name="maxArea"
              id="maxArea"
              onChange={(e) => setMaxArea(e.target.value)}
            >
              {dropdownItems.maxArea.map((each, index) => (
                <DropDownItems
                  key={index}
                  value={each.value}
                  name={each.name}
                  disabled={each.disabled}
                  selected={each.selected}
                  id="maxArea"
                />
              ))}
            </select>

            <button className="btn" type="submit" onClick={handleSubmit}>
              SEARCH
            </button>
          </form>
        </div>
      </section>

      <hr />

      <section id="results">
        <h3>Properties for sale</h3>
        <div className="results-flex">
          <h5>
            Properties found: <span>{filtered.length}</span>
          </h5>
          <div className="flex-sort">
            <h5>Sort by:</h5>
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSort(e.target.value)}
            >
              {sortItems.map((eachItem, index) => (
                <SortResults
                  key={index}
                  value={eachItem.value}
                  name={eachItem.name}
                />
              ))}
            </select>
          </div>
        </div>

        <ul className="grid">
          {filtered.map((each) => (
            <ResultCard key={each._id} singleProperty={each} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default SearchPage;
