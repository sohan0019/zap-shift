import React from 'react';
import serviceImg from '../../../assets/service.png'

const Services = () => {
  return (
    <section>
      <div className='bg-secondary text-center py-25 rounded-4xl'>
        <h2 className='text-white text-[40px] font-extrabold'>Our Services</h2>
        <p className='text-base font-medium text-white max-w-3xl mx-auto mt-4 mb-8'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

        <div className='grid grid-cols-3 gap-6 mx-25'>
          <div className='bg-white py-8 px-4 rounded-3xl'>
            <span className='flex mx-auto bg-linear-to-b from-[#EFEEFC] to-white w-fit rounded-full'>
              <img className='p-2' src={serviceImg} alt="" />
            </span>
            <h2 className='text-2xl font-bold my-4'>Express & Standard Delivery</h2>
            <p className='text-base font-medium p_color'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
          </div>

          <div className='bg-primary py-8 px-4 rounded-3xl'>
            <span className='flex mx-auto bg-linear-to-b from-[#EFEEFC] to-white w-fit rounded-full'>
              <img className='p-2' src={serviceImg} alt="" />
            </span>
            <h2 className='text-2xl font-bold my-4'>Nationwide Delivery</h2>
            <p className='text-base font-medium p_color'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
          </div>
          <div className='bg-white py-8 px-4 rounded-3xl'>
            <span className='flex mx-auto bg-linear-to-b from-[#EFEEFC] to-white w-fit rounded-full'>
              <img className='p-2' src={serviceImg} alt="" />
            </span>
            <h2 className='text-2xl font-bold my-4'>Fulfillment Solution</h2>
            <p className='text-base font-medium p_color'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
          </div>

          <div className='bg-white py-8 px-4 rounded-3xl'>
            <span className='flex mx-auto bg-linear-to-b from-[#EFEEFC] to-white w-fit rounded-full'>
              <img className='p-2' src={serviceImg} alt="" />
            </span>
            <h2 className='text-2xl font-bold my-4'>Cash on Home Delivery</h2>
            <p className='text-base font-medium p_color'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
          </div>

          <div className='bg-white py-8 px-4 rounded-3xl'>
            <span className='flex mx-auto bg-linear-to-b from-[#EFEEFC] to-white w-fit rounded-full'>
              <img className='p-2' src={serviceImg} alt="" />
            </span>
            <h2 className='text-2xl font-bold my-4'>Corporate Service / Contract In Logistics</h2>
            <p className='text-base font-medium p_color'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
          </div>

          <div className='bg-white py-8 px-4 rounded-3xl'>
            <span className='flex mx-auto bg-linear-to-b from-[#EFEEFC] to-white w-fit rounded-full'>
              <img className='p-2' src={serviceImg} alt="" />
            </span>
            <h2 className='text-2xl font-bold my-4'>Parcel Return</h2>
            <p className='text-base font-medium p_color'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;