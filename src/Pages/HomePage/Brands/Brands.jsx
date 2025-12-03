import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';

const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, start_people]

const Brands = () => {
  return (
    <section>
      <div className='py-25'>
        <h2 className='text-3xl font-bold mb-10 text-center'>We've helped thousands of sales teams</h2>

        <div className='px-25'>
          <Swiper slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper">
            {
              brandLogos.map((logo, index) => <SwiperSlide key={index}><img src={logo} alt="" /></SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
      <div className="border-t-2 border-dashed border-gray-400 w-full"></div>
    </section>
  );
};

export default Brands;