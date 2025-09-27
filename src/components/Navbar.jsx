// import React from "react";

// function Navbar() {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-indigo-600">IELTS Pro</h1>
//         <ul className="hidden md:flex space-x-6">
//           <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
//           <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
//           <li><a href="#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
//           <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
//         </ul>
//         <button className="md:hidden bg-indigo-600 text-white px-4 py-2 rounded">Menu</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">IELTS Pro</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#features" className="hover:text-indigo-600">Features</a></li>
          <li><a href="#courses" className="hover:text-indigo-600">Courses</a></li>
          <li><a href="#testimonials" className="hover:text-indigo-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-indigo-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full animate-fadeIn">
          <ul className="flex flex-col space-y-4 py-6 px-6">
            <li><a href="#home" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#features" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Features</a></li>
            <li><a href="#courses" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Courses</a></li>
            <li><a href="#testimonials" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

