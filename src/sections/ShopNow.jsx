import React from 'react';
import { shoesAll } from '../constants';

const ShopNow = () => {
  return (
    <section className="padding bg-white">
      <h2 className="text-center text-4xl font-bold text-coral-red mb-12 font-palanquin">
        Explore Our Shoe Collection
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {shoesAll.map((shoe, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={shoe.thumbnail}
              alt={shoe.name}
              className="w-full h-60 object-contain mb-5"
            />
            <h3 className="text-2xl font-bold font-palanquin">{shoe.name}</h3>
            <p className="text-slate-600 text-lg mt-1">{shoe.description}</p>
            <p className="mt-2 font-semibold text-coral-red text-xl">{shoe.price}</p>

            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">Available Colors:</p>
              <div className="flex gap-2 mt-1">
                {shoe.colors.map((color, i) => (
                  <span
                    key={i}
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-3">
              <p className="text-sm text-slate-500 font-medium">Sizes:</p>
              <div className="flex gap-2 flex-wrap mt-1">
                {shoe.sizes.map((size, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              <strong>Warranty:</strong> {shoe.warranty}
            </p>

            <button className="mt-4 w-full bg-coral-red text-white py-2 rounded hover:bg-red-600 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopNow;
