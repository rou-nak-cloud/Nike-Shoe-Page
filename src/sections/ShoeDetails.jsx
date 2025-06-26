import React from 'react';
import { shoe8 } from '../assets/images';

const ShoeDetails = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-between items-center gap-10 px-6 py-16 max-container'>

          {/* Image Section */}
      <div className='flex-1 flex justify-center lg:justify-end items-center'>
        <img
          src={shoe8}
          alt='product-detail'
          className='object-contain w-[90%] md:w-[80%] lg:w-[80%]'
        />
      </div>

      {/* Text Section */}
      <div className='flex-1 flex flex-col'>
        <h2 className='font-palanquin text-4xl lg:max-w-lg font-bold leading-tight'>
          This is the best<br />
          <span className='text-coral-red'>Super</span>{' '}
          <span className='text-coral-red'>Quality</span> Shoes
        </h2>

        <p className='mt-6 text-base lg:max-w-lg text-gray-600'>
          Crafted for both comfort and sophistication, our footwear blends cutting-edge design with timeless style. Each pair is made to enhance your daily stride with quality you can feel and innovation you can trust—because every step should feel exceptional.
        </p>

        <p className='mt-4 text-base lg:max-w-lg text-gray-600'>
         Our unwavering focus on craftsmanship and precision guarantees not just quality, but your complete satisfaction with every step.
        </p>

        {/* Additional Info */}
        <ul className='mt-6 space-y-3 text-base text-gray-700'>
          <li><span className='font-semibold text-coral-red'>Price:</span> ₹4,999</li>
          <li><span className='font-semibold text-coral-red'>Available Colors:</span> Black, Red, Blue</li>
          <li><span className='font-semibold text-coral-red'>Sizes:</span> 6, 7, 8, 9, 10, 11</li>
          <li><span className='font-semibold text-coral-red'>Warranty:</span> 6 months manufacturer warranty</li>
        </ul>

        {/* Cart Button */}
        <button className='mt-6 w-fit bg-coral-red text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300'>
          Add to Cart
        </button>
      </div>

    </section>
  );
};

export default ShoeDetails;
