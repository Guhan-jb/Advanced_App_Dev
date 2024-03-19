import React from 'react';
import MatGif from '../assets/images/mat.gif'; // Importing the mat.gif image

const About = () => {
  return (
    <div className="bg-white min-h-screen relative"> {/* Updated background color */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-800 mb-8 transition duration-300 transform hover:scale-105 cursor-pointer">
              <span className="text-gray-800">About Us</span> {/* Updated heading */}
            </h1>
            <p className="text-xl text-gray-600 mb-8"> {/* Updated text color */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisl id est feugiat condimentum.
            </p>
          </div>
          <div className="md:w-1/3 relative">
            <img src={MatGif} alt="Mat GIF" className="object-cover w-full h-auto md:w-96 md:h-96 rounded-r-2xl mx-auto mb-8" /> {/* Updated image */}
          </div>
        </div>
      </div>
      {/* Gradient for BirthX */}
      <style>
        {`
          .gradient-text {
            background-image: linear-gradient(to right, #e94057, #8a2387, #c77dff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `}
      </style>
    </div>
  );
};

export default About;
