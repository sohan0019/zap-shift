import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {

  const { userName, review:testimonial, user_photoURL } = review;

  return (
    <section>
      <div className="card w-80 bg-white shadow-xl p-6 rounded-2xl">
        <div className="flex items-start gap-2 mb-3 text-gray-500 text-2xl">
          <FaQuoteLeft />
        </div>

        <p className="mb-6">
          {testimonial}
        </p>


        <div className="border-t border-gray-300 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full"><img src={user_photoURL} alt="" /></div>
            <div>
              <h3 className="font-semibold text-gray-900">{userName}</h3>
              <p className="text-sm text-gray-600">Senior Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;