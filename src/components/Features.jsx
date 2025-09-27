import React from "react";
import { BookOpen, Mic, FileText, Award, Globe, Users, Clock, Laptop } from "lucide-react";

const features = [
  {
    title: "Speaking Practice",
    desc: "One-on-one sessions with expert mentors to boost your confidence.",
  },
  {
    title: "Mock Tests",
    desc: "Simulated IELTS exams to assess and improve your readiness.",
  },
  {
    title: "AI Band Score",
    desc: "Instant feedback powered by AI to track your progress.",
  },
  {
    title: "Study Materials",
    desc: "Curated resources designed to target every IELTS section.",
  },
  {
    title: "Global Access",
    desc: "Learn from anywhere with our mobile-friendly platform.",
    icon: <Globe className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Community Support",
    desc: "Join study groups, discussions, and peer-to-peer practice.",
    icon: <Users className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Flexible Schedule",
    desc: "Morning & evening batches to suit your convenience.",
    icon: <Clock className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Online Dashboard",
    desc: "Track your progress with a smart student dashboard.",
    icon: <Laptop className="w-10 h-10 text-indigo-600" />,
  },
];

function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-10 text-indigo-600">Our Features</h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide everything you need to achieve your dream IELTS score – expert mentors,
          modern tools, and a supportive learning community.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-500 animate-fadeInUp">
               <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
