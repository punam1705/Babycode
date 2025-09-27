import React from "react";

const testimonials = [
  {
    name: "Amit Kumar",
    review: "The mock tests really helped me get comfortable with the real exam.",
     band: "7.0 Band",
    rating: 4,
  },
  {
    name: "Sarah Khan",
    review: "Thanks to their speaking practice sessions, I scored 8.0 in IELTS Speaking!",
     band: "7.0 Band",
    rating: 4,
  },
   {
    name: "Ravi Sharma",
    review: "The AI Band Score feedback kept me motivated and on track. It showed me exactly where to improve.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    band: "7.0 Band",
    rating: 4,
  },
  {
    name: "Ravi Sharma",
    review: "AI Band Score feedback kept me motivated and on track.",
     band: "7.0 Band",
    rating: 4,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-10 text-indigo-600">What Our Students Say</h3>
         <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from our successful students who achieved their dream IELTS scores with IELTS Pro Institute.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
               <div className="flex justify-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-indigo-500"
                />
              </div>
              <p className="italic text-gray-700 mb-4">"{t.review}"</p>
              <h5 className="font-semibold text-indigo-600">- {t.name}</h5>
              <p className="text-sm text-gray-500 mb-2">{t.band}</p>

              {/* Star Rating */}
              <div className="flex justify-center">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                {Array.from({ length: 5 - t.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300 text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
