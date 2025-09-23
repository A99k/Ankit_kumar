import React from "react";
import "../styles/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = (
    <>
       <Link to="/">Home</Link> 
       <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      {/* <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contacts">Contacts</a> */}
      {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="./assets/prime_instagram.svg" alt="" />
      </a> */}
      <Link to="https://instagram.com"><img src="./assets/prime_instagram.svg" alt="" /></Link>
      <Link to="https://github.com"><img src="./assets/prime_github.svg" alt="" /></Link>
      <Link to="https://linkedin.com"><img src="./assets/prime_linkedin.svg" alt="" /></Link>
      {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="./assets/prime_github.svg" alt="" />
      </a> */}
    </>
  );

  return (
    <>
      <header className="grid grid-cols-12 gap-4 bg-transparent py-5">
        <span className="col-start-2 col-span-2 text-xl tracking-wide">Ankit Kumar</span>
        {!isMobile ? (
          <nav className="col-start-8 col-span-4 flex justify-between">
            {navLinks}
          </nav>
        ) : (
          <button
            className="col-start-12 col-span-1"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            &#9776;
          </button>
        )}
      </header>
      {isMobile && sidebarOpen && (
        <aside className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-6">
          <button
            className="self-end mb-4"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            &times;
          </button>
          <nav className="flex flex-col gap-4">{navLinks}</nav>
        </aside>
      )}
    </>
  );
};

export default Header;