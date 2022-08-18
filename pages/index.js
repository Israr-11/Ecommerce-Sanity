import React from "react";
import { Product, FooterBanner, HeroBanner, Footer } from "../components";
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Our Products</h2>
        <p> Versatile products </p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      {/* bannerData && bannerData[0] its like AND gate which will give value if both are true else zero 
    It will check whether bannerData is true if true then return index 0 value*/}
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}
//In Next js we don't use hooks instead we use getServerSideProps 
//https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';//sanity query to grab all the products
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    //Whatever returns from the above getServerSideProps get populated in function 
    props: { products, bannerData }
  }
}
export default Home