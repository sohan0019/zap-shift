import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import reviewImg from '../../../assets/customer-top.png'


const Reviews = ({ reviewsPromise }) => {

  const reviews = use(reviewsPromise);
  console.log(reviews);

  return (
    <section className='py-25'>
      <div className='text-center'>
        <img className='mx-auto mb-8' src={reviewImg} alt="" />
        <h3 className='text-3xl text-center font-bold mb-5'>What our customers are sayings</h3>
        <p className='max-w-3xl p_color mx-auto'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      </div>

      <div className='mt-12'>
        <Swiper
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            reviews.map(review => <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;