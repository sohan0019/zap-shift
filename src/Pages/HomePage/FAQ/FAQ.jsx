import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const FAQ = () => {
  return (
    <section className="max-w-3xl mx-auto pb-20 p-6">
      <h2 className="text-4xl font-extrabold mb-6 text-center">Frequently Asked Questions (FAQ)</h2>
      <p className="p_color text-center mb-8">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      <div className="join join-vertical w-full">
        
        {/* FAQ 1 */}
        <div className="collapse collapse-arrow join-item border border-gray-400 bg-white mb-5 rounded-2xl">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How does this posture corrector work?
          </div>
          <div className="collapse-content">
            <p>A posture corrector works by providing support and gentl  e alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</p>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="collapse collapse-arrow join-item border border-gray-400 bg-white mb-5 rounded-2xl">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content">
            <p>The answer to the second question is here.</p>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="collapse collapse-arrow join-item border border-gray-400 bg-white rounded-2xl mb-5">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content">
            <p>The answer to the third question is here.</p>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="collapse collapse-arrow join-item border border-gray-400 bg-white rounded-2xl mb-5">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content">
            <p>The answer to the third question is here.</p>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="collapse collapse-arrow join-item border border-gray-400 bg-white rounded-2xl mb-5">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content">
            <p>The answer to the third question is here.</p>
          </div>
        </div>

        <div className="mx-auto flex items-center">
          <button className="btn btn-warning text-black font-bold">See More FAQ's</button>
          <button className='ml-1 cursor-pointer'><BsArrowUpRightCircleFill className='size-10'/></button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
