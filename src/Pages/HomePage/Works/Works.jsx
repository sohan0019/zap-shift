import React from 'react';
import deliveryimg from '../../../assets/bookingIcon.png'

const Works = () => {
  return (
    <section>
      <div className='p-25'> 
        <h2 className='text-3xl font-extrabold mb-6'>How it Works</h2>
        <div className='grid grid-cols-4 gap-6'>
          <div className='p-8 bg-white rounded-3xl'>
            <img src={deliveryimg} alt="" />
            <h3 className='text-xl font-bold mt-6 mb-4'>Booking Pick & Drop</h3>
            <p className='p_color text-base font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
          </div>
          <div className='p-8 bg-white rounded-3xl'>
            <img src={deliveryimg} alt="" />
            <h3 className='text-xl font-bold mt-6 mb-4'>Cash On Delivery</h3>
            <p className='p_color text-base font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
          </div>
          <div className='p-8 bg-white rounded-3xl'>
            <img src={deliveryimg} alt="" />
            <h3 className='text-xl font-bold mt-6 mb-4'>Delivery Hub</h3>
            <p className='p_color text-base font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
          </div>
          <div className='p-8 bg-white rounded-3xl'>
            <img src={deliveryimg} alt="" />
            <h3 className='text-xl font-bold mt-6 mb-4'>Booking SME & Corporate</h3>
            <p className='p_color text-base font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;