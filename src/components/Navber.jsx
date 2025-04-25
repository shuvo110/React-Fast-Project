import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navber() {
  const [isOpne, setIsOpen] = useState(false);
  const togoleMenu = () => {
    setIsOpen(!isOpne);
  };
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container m-auto flex justify-between ">
        {/* logo */}
        <h1>Fast-Project</h1>
        {/* mobile menu */}
        <div>
          <button
            onClick={togoleMenu}
            className={`transition-transform duration-300 border border-green-600 rounded-full p-2 cursor-pointer ${
              isOpne ? "rotate-180" : "rotate-0"
            }`}
          >
            {isOpne ? <IoClose size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        {/* menu */}
        <ul className="flex space-x-4 md:space-x-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Product</li>
          <li>Blog</li>
        </ul>
        <button>Login</button>
      </div>
    </nav>
  );
}
export default Navber;
