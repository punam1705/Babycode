import React from "react";

function Footer() {
  return (
    <footer id="contact" className="bg-indigo-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} IELTS Pro. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="mailto:info@ieltspro.com" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
