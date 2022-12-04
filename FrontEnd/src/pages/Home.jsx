import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/home.css";
import { swiper } from "../utils/swiper";

// PACKAGES
import { gsap } from "gsap";
import {
  heroAnimation,
  phoneDesktopAnimation,
  phoneMobileAnimation,
} from "./../utils/gsapAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch, useSelector } from "react-redux";

// IMAGES
import bigHome from "../assets/images/1-Homepage/Home3.png";
import phoneImg from "../assets/images/Wolfram-Homepage-Mobile-Tinified.png";
import chevron from "../assets/images/icons/iconfinder_chevron-right_2561358.png";
import grandViews from "../assets/images/1-Homepage/Featured_Developments/RESIZED-Grand-Views.jpg";
import muraba from "../assets/images/1-Homepage/Featured_Developments/RESIZED-muraba-penthouses-burj-al-arab.jpg";
import ghadeer from "../assets/images/1-Homepage/Featured_Developments/RESIZED-Alghadeer_Villas.jpg";
import imgBarari from "../assets/images/1-Homepage/Select_Neighbourhoods/Al-Barari.jpg";
import imgPalm from "../assets/images/1-Homepage/Select_Neighbourhoods/Palm-Jumeirah.jpg";
import imgJbr from "../assets/images/1-Homepage/Select_Neighbourhoods/jbr.jpg";

// IMPORTS
import Navbar from "../components/Navbar";
import Metatag from "../components/Metatag";
import ScrollToTop from "../components/ScrollToTop";
import FeaturedListing from "../components/FeaturedListing";

// REDUC: ACTION
import { fetchListings } from "../actions/listingActions";

const Home = () => {
  const dispatch = useDispatch();

  const featuredList = useSelector((state) => state.featuredList);
  const { loading, error, listings } = featuredList;

  useEffect(() => {
    dispatch(fetchListings());
    swiper();
  }, [dispatch]);

  // QUERYING DOM ELEMENTS
  // HERO SECTION
  let heroImg = useRef(null);
  let heroContent = useRef(null);

  // PHONE SECTION
  let phoneContainer = useRef(null);
  let phoneContent = useRef(null);
  let phoneModel = useRef(null);
  // PHONE SECTION: MOBILE/TABLETS
  let phoneMobileContainer = useRef(null);
  let phoneMobileModel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth <= 768) {
      heroImg.current.style.display = "none";
      heroImg.current.style.opacity = 0;
    }
    heroAnimation({
      heroImg,
      heroContent,
    });
  }, []);

  useEffect(() => {
    // Render GSAP animation based on viewport width
    if (window.innerWidth <= 1024) {
      phoneContainer.current.style.display = "none";
      phoneMobileContainer.current.style.display = "block";
      phoneMobileAnimation(phoneMobileContainer, phoneMobileModel);
    } else if (window.innerWidth > 1024) {
      phoneMobileContainer.current.style.display = "none";
      phoneContainer.current.style.display = "block";
      phoneDesktopAnimation(phoneContainer, phoneContent, phoneModel);
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <Metatag />
      <section id="hero">
        <Navbar bgdColor="transparent" paddingTop="1rem" height="13vh" />

        <div className="hero-grid">
          <div className="hero-content" ref={heroContent}>
            <h1>
              Helping you find a place{" "}
              <span className="mobile"> to call home</span>
            </h1>
            <p>
              Allow us to help you search through a wide collection of quality
              properties from which you are bound to call one your everlasting
              home.
            </p>
            <a href="/search">SEARCH PROPERTIES</a>
          </div>

          <div className="hero-img" ref={heroImg}>
            <img src={bigHome} alt="Row of Villas" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="featured">
        <h3>
          Featured <span className="light">Property</span>
        </h3>
        <div className="img-contentBox">
          <div className="details-box">
            <h5>Al Barari - Dahlia Villas</h5>
            <p>
              Currently on offer, is the exquisite Dahlia Villas. This villa
              includes 6 en-suite bedrooms, a study room, separate formal and
              family living and dining areas, family kitchen and service
              kitchen, a laundry, two basement rooms with bathroom, and a
              self-contained maids living quarters.
            </p>

            <div
              className="chevron-box"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Link to="/properties/60099de9fa9fd125f0b755c5">
                VIEW PROPERTY{" "}
              </Link>
              <span>
                <img
                  src={chevron}
                  className="chevron-right"
                  alt="Right Chevron Icon"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="latest-listings">
        <h3>
          Latest <span className="light">Listings</span>
        </h3>
        <ul className="grid">
          {error ? (
            <h2>Unable to fetch Listings</h2>
          ) : (
            listings &&
            listings.map((each) => (
              <FeaturedListing key={each._id} singleListing={each} />
            ))
          )}
        </ul>
        <Link to="/search" className="view">
          <button>VIEW ALL LISTINGS</button>
        </Link>
      </section>

      <section id="development">
        <h3>
          Featured <span className="light">Developments</span>
        </h3>
        {/* SWIPER till 450px */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide1">
              <div className="overlay">
                <div className="overlay-flex">
                  <div className="overlay-title">Grand Views</div>
                  <div className="overlay-price">Ask for price</div>
                </div>
                <div className="overlay-location">Location: Meydan</div>
                <div className="overlay-units">Units available: 476</div>
                <Link
                  to="/projects/6000d4c6fc5bb6333473a267"
                  className="overlay-link"
                >
                  LEARN MORE <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>

            <div className="swiper-slide slide2">
              <div className="overlay">
                <div className="overlay-flex">
                  <div className="overlay-title">Muraba</div>
                  <div className="overlay-price">From AED 4,800,000</div>
                </div>
                <div className="overlay-location">Location: Palm Jumeirah</div>
                <div className="overlay-units">Units available: 50</div>
                <Link
                  to="/projects/6000d4c6fc5bb6333473a266"
                  className="overlay-link"
                >
                  LEARN MORE <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>

            <div className="swiper-slide slide3">
              <div className="overlay">
                <div className="overlay-flex">
                  <div className="overlay-title">Al Ghadeer</div>
                  <div className="overlay-price">From AED 310,000</div>
                </div>
                <div className="overlay-location">
                  Location: Al Ghadeer, Abu Dhabi
                </div>
                <div className="overlay-units">Units available: 14,408</div>
                <Link
                  to="/projects/6000d4c6fc5bb6333473a265"
                  className="overlay-link"
                >
                  LEARN MORE <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* ADD SCROLLBAR */}
          {/* <div className="swiper-scrollbar"></div> */}
        </div>
        <div className="mobile-gallery">
          <Link to="/projects/6000d4c6fc5bb6333473a267" className="project">
            <img src={grandViews} alt="Grand Views" loading="lazy" />
            <p>Grand Views</p>
          </Link>

          <Link to="/projects/6000d4c6fc5bb6333473a266" className="project">
            <img src={muraba} alt="Grand Views" loading="lazy" />
            <p>Muraba Residences</p>
          </Link>

          <Link to="/projects/6000d4c6fc5bb6333473a265" className="project">
            <img src={ghadeer} alt="Grand Views" loading="lazy" />
            <p>Al Ghadeer</p>
          </Link>
        </div>
      </section>

      <section id="neighbourhood">
        <h3>
          Select <span className="light">Neighbourhoods</span>
        </h3>
        <div className="grid-neighbourhood">
          <Link to="/neighbourhood/dubai-marina" className="select-img-1">
            <div className="overlay">
              <div className="overlay-content">
                <Link to="/neighbourhood/dubai-marina">
                  View Properties in <br style={{ marginBottom: "0.5rem" }} />
                  Dubai Marina
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/neighbourhood/al-barari" className="select-img-2">
            <img src={imgBarari} alt="Al Barari" loading="lazy" />
            <div className="overlay">
              <div className="overlay-content">
                <Link to="/neighbourhood/al-barari">
                  View Properties in <br style={{ marginBottom: "0.5rem" }} />
                  Al Barari
                </Link>
              </div>
            </div>
          </Link>

          <Link to="neighbourhood/palm-jumeirah" className="select-img-3">
            <img src={imgPalm} alt="Palm Jumeirah" loading="lazy" />
            <div className="overlay">
              <div className="overlay-content">
                <Link to="neighbourhood/palm-jumeirah">
                  View Properties in <br style={{ marginBottom: "0.5rem" }} />
                  Palm Jumeirah
                </Link>
              </div>
            </div>
          </Link>

          <Link
            to="/neighbourhood/jumeirah-beach-residence"
            className="select-img-4"
          >
            <img src={imgJbr} alt="JBR" loading="lazy" />
            <div className="overlay">
              <div className="overlay-content">
                <Link to="/neighbourhood/jumeirah-beach-residence">
                  View Properties in <br style={{ marginBottom: "0.5rem" }} />
                  JBR
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section id="experts" ref={phoneContainer}>
        <div className="experts-grid">
          <div
            className="experts-content"
            ref={phoneContent}
            style={{ opacity: 0 }}
          >
            <h3 className="light">Exclusive Access to Local Experts</h3>
            <p>
              Our Luxury Sales Specialists will offer you the best of services
              and expertise to keep in mind before buying or selling your
              property.
            </p>
            <p>
              Their networking and negotiating skills will ensure that you get
              the results you want – whether it’s a sound property investment,
              purchasing a property or getting the right price for your
              property.
            </p>
            <Link to="/agents">
              <button>FIND AN AGENT</button>
            </Link>
          </div>
          <div className="experts-img" ref={phoneModel} style={{ opacity: 0 }}>
            <img
              src={phoneImg}
              alt="phone"
              style={{ maxWidth: "45%" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="experts-mobile" ref={phoneMobileContainer}>
        <div className="experts-flex">
          <div
            className="experts-img"
            ref={phoneMobileModel}
            style={{ opacity: 0 }}
          >
            <img src={phoneImg} alt="phone" loading="lazy" />
          </div>
          <div className="experts-content">
            <h3 className="light">Exclusive Access to Local Experts</h3>
            <p>
              Our Luxury Sales Specialists will offer you the best of services
              and expertise to keep in mind before buying or selling your
              property.
            </p>
            <p>
              Their networking and negotiating skills will ensure that you get
              the results you want – whether it’s a sound property investment,
              purchasing a property or getting the right price for your
              property.
            </p>
            <Link to="/agents">
              <button>FIND AN AGENT</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
