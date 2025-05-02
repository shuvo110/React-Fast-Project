import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
function Navber() {
  const [isOpne, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const togoleMenu = () => {
    setIsOpen(!isOpne);
  };
  const loction = useLocation();
  useEffect(()=>{
    setActiveLink(loction.pathname || "/");
  },[loction.pathname]);
  
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 relative">
      <div className="container m-auto flex justify-between items-center ">
        {/* logo */}
        <h1 className="logo">Fast-Project</h1>
        {/* mobile menu */}
        <div className="md:hidden">
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
        <ul className="md:flex space-x-4 md:space-x-6  hidden">
          <li className={`${activeLink === "/" ? "text-red-600" : ' hover:text-red-500'}`}>
            {" "}
            <Link to={"/"} onClick={()=> handleLinkClick("/")}>Home</Link>{" "}
          </li>
          <li className={`${activeLink === "/about" ? "text-red-600" : 'navBerLink'}`}>
            <Link to={"/about"} onClick={()=> handleLinkClick("/about")}>About</Link>
          </li>
          <li className={`${activeLink === "/contact" ? "text-red-600" : ""}`}>
            <Link to={"/contact"} onClick={()=> handleLinkClick("/contact")}>Contact</Link>
          </li>
          <li className={`${activeLink === "/product" ? "text-red-600" : ""}`}>
            <Link to={"/product"} onClick={()=> handleLinkClick("/product")}>Product</Link>
          </li>
          <li className={`${activeLink === "/blog" ? "text-red-600" : ""}`}>
            <Link to={"/blog"} onClick={()=> handleLinkClick("/blog")}>Blog</Link>
          </li>
        </ul>
        <button className="md:flex hidden btnLogin">Login</button>
        {/* mobile menu togol */}
        <div
          className={`md:hidden absolute left-0 top-full w-full bg-gray-800 p-4 transform duration-300 transition  ${
            isOpne ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4">
            <li className="navBerLink">Home</li>
            <li className="navBerLink">About</li>
            <li className="navBerLink">Contact</li>
            <li className="navBerLink">Product</li>
            <li className="navBerLink">Blog</li>
            <li>
              <button className="btnLogin">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navber;
