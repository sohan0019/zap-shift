import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from '../../../assets/banner/banner1.png'
import bannerImage2 from '../../../assets/banner/banner2.png'
import bannerImage3 from '../../../assets/banner/banner3.png'
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const Banner = () => {
  return (
    <section className='pt-8'>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className='relative'> 
          <img src={bannerImage1} />
          <div className='absolute bottom-20 left-22 flex items-center'>
            <button className='btn btn-primary border-2 border-black text-xl font-bold text-black px-6 py-4 rounded-full hover:bg-white hover:text-black'>Take Your Parcel</button>
            <button className='ml-1 cursor-pointer'><BsArrowUpRightCircleFill className='size-10'/></button>
            <button className='btn btn-neutral btn-outline text-xl font-bold bg-secondary text-white px-6 py-4 ml-4 rounded-xl border-2 hover:bg-transparent hover:text-black'>Be A Rider</button>
          </div>
        </div>
        <div>
          <img src={bannerImage2} />
          <div className='absolute bottom-20 left-22 flex items-center'>
            <button className='btn btn-primary border-2 border-black text-xl font-bold text-black px-6 py-4 rounded-full hover:bg-white hover:text-black'>Take Your Parcel</button>
            <button className='ml-1 cursor-pointer'><BsArrowUpRightCircleFill className='size-10'/></button>
            <button className='btn btn-neutral btn-outline text-xl font-bold bg-secondary text-white px-6 py-4 ml-4 rounded-xl border-2 hover:bg-transparent hover:text-black'>Be A Rider</button>
          </div>
        </div>
        <div>
          <img src={bannerImage3} />
          <div className='absolute bottom-20 left-22 flex items-center'>
            <button className='btn btn-primary border-2 border-black text-xl font-bold text-black px-6 py-4 rounded-full hover:bg-white hover:text-black'>Take Your Parcel</button>
            <button className='ml-1 cursor-pointer'><BsArrowUpRightCircleFill className='size-10'/></button>
            <button className='btn btn-neutral btn-outline text-xl font-bold bg-secondary text-white px-6 py-4 ml-4 rounded-xl border-2 hover:bg-transparent hover:text-black'>Be A Rider</button>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;