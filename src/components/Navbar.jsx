import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Logo } from "../Assets/";

import { useState, useEffect } from "react";
function MyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`bg-yellow-600 z-10 sm:px-12 fixed top-0 left-0 w-full text-white shadow-lg transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <Navbar.Brand>
        <img
          src={Logo}
          className={`mr-3 transition-all duration-300 ${
            isScrolled ? "h-8 w-8 sm:h-12 sm:w-12" : "h-16 w-16"
          }`}
          alt="Roadspeak logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          RoadSpeak
        </span>
      </Navbar.Brand>
      <Navbar.Toggle className="bg-white" />
      <Navbar.Collapse className="bg-yellow-600">
        <Navbar.Link
          className="bg-yellow-600"
          href="https://github.com/Patargz12/roadspeak"
          target="_blank"
          active
        >
          <span className="text-white text-lg">Repository</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
