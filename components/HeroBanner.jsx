import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    //Will be using the dynamically rendered data from the Sanity.io backend
    <div className="hero-banner-container">
      <div>
        {/* <p className="beats-solo">{heroBanner.smallText}</p> */}
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="Laptops"
          className="hero-banner-image"
        />
        <div>
          <Link href={"/product/${heroBanner.product}"}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>{heroBanner.largeText2}</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
