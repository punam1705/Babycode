import React from "react";

function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">About Us</h3>
          <p className="text-gray-700 mb-6">
            IELTS Pro Institute is a trusted platform helping thousands of students
            achieve their desired IELTS scores. With expert trainers, modern tools,
            and AI-driven insights, we ensure personalized learning for every student.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
            Learn More
          </button>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/D03NM1b3/Chat-GPT-Image-Sep-27-2025-09-12-59-PM.png"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
