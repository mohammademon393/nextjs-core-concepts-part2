import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-blue-100 to-blue-400'>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between  p-8 gap-8 md:gap-16 max-w-[1280px] mx-auto">
        {/* left side */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-500">Bhojonbilash!</span>{" "}
          </h1>
          <p className="my-6 text-gray-600 text-lg">
            Where traditional flavors meet a modern dining experience. Enjoy
            delicious food, warm hospitality, and memorable moments with every
            bite.
          </p>
          <div>
            <Link
              href="/foods"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Explore Our Menu
            </Link>
            <Link
              href="/reviews"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black transition duration-300 ml-3"
            >
                Read Reviews
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1">
          <img
            src="/banner2.png"
            alt="Bhojonbilash Restaurant"
            className="bg-none object-cover"
          />
        </div>
      </div>
        </div>
    );
};

export default Banner;