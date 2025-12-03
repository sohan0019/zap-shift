import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Works from '../Works/Works';
import Services from '../Services/Services';
import FAQ from '../FAQ/FAQ';
import Satisfaction from '../Satisfaction/Satisfaction';


const reviewsPromise = fetch('/reviews.json')
.then(res => res.json())

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <Brands></Brands>
      <Satisfaction></Satisfaction>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;  