import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Logo } from "../Assets/";

const NavbarGaming = () => {
  return (
    <Navbar className="bg-yellow-600 sm:px-12 w-full text-white shadow-lg">
      <Navbar.Brand className="">
        <img
          src={Logo}
          className="mr-3 h-8 w-8 sm:h-16 sm:w-16"
          alt="Roadspeak logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Roadspeak
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
};

export default NavbarGaming;
