// components/HoverCard.js
import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';

const HoverCard = () => {
    return (

        <div className="relative w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src="https://via.placeholder.com/256x320"
        alt="Placeholder"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-4">
          <button className="text-white text-2xl hover:text-red-500 transition-colors duration-200">
            <FaHeart />
          </button>
          <button className="text-white text-2xl hover:text-blue-500 transition-colors duration-200">
            <FaComment />
          </button>
        </div>
      </div>
    </div>
    );
};

export default HoverCard;
