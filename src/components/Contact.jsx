// import React from "react";

// function Contact() {
//   return (
//     <section id="contact" className="py-16 bg-white">
//       <div className="max-w-4xl mx-auto px-6">
//         <h3 className="text-3xl font-bold text-center mb-8 text-indigo-600">Contact Us</h3>
//         <form className="grid gap-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows="4"
//             className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
//           />
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-indigo-600">Get in Touch</h3>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-500">
            <h4 className="text-xl font-semibold mb-6 text-gray-700">Send us a Message</h4>
            <form className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-700">Contact Information</h4>

              <div className="flex items-center space-x-4">
                <MapPin className="text-indigo-600 w-6 h-6" />
                <p className="text-gray-600">123 IELTS Street, Delhi, India</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-indigo-600 w-6 h-6" />
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-indigo-600 w-6 h-6" />
                <p className="text-gray-600">info@ieltspro.com</p>
              </div>

              <div>
                <h5 className="font-semibold mb-2 text-gray-700">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800"><Facebook /></a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800"><Instagram /></a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800"><Linkedin /></a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-8">
              <iframe
                title="IELTS Pro Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.997503254543!2d77.20902131508452!3d28.613939682423266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd349c9c8f2f%3A0x8a2d13c91e0f3e29!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1695854664585!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

