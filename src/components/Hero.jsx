import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-40 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4  animate-fadeInDown">
          Achieve Your Dream IELTS Score
        </h2>
        <p className="text-lg md:text-xl mb-6 animate-fadeInUp">
          Join our expert-led institute and get personalized guidance to crack IELTS with confidence.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 animate-bounce">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
