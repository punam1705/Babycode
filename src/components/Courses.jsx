import React from "react";

const courses = [
  {
    title: "Basic IELTS Prep",
    price: "$99",
    desc: "Foundation course with study materials & practice tests.",
  },
  {
    title: "Advanced IELTS Prep",
    price: "$199",
    desc: "Includes speaking sessions, full mock tests & AI feedback.",
  },
  {
    title: "One-on-One Mentorship",
    price: "$299",
    desc: "Personalized coaching sessions with IELTS experts.",
  },
];

function Courses() {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-10 text-indigo-600">Our Courses</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold mb-3">{course.title}</h4>
              <p className="text-gray-600 mb-4">{course.desc}</p>
              <p className="text-indigo-600 font-bold text-2xl mb-6">
                {course.price}
              </p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
