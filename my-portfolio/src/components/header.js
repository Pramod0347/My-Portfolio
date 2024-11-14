import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="bmd:h-[48px] flex justify-between px-5 py-2 bg-primary text-[#fff] fixed w-full z-10">
      <a href="/" className="logo font-bold text-textAccent font-ternary text-xl md:text-2xl">
        Pramod G
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li className="px-4 py-3 leading-[0]">
            <a className="text-base hover:text-textAccent font-primary" href="/#about">About</a>
          </li>
          <li className="px-4 py-3 leading-[0]">
            <a className="text-base hover:text-textAccent font-primary" href="/#work">Work</a>
          </li>
          <li className="px-4 py-3 leading-[0]">
            <a className="text-base hover:text-textAccent font-primary" href="/#projects">Projects</a>
          </li>
          <li className="px-4 py-3 leading-[0]">
            <a className="text-base hover:text-textAccent font-primary" href="/#contact">Contact</a>
          </li>
          <li className="px-4 py-3 leading-[0]">
            <a className="text-base hover:text-textAccent font-primary" href="#resume -link" target="_blank" without="true" rel="noreferrer">
              Download CV
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "md:hidden fixed top-10 w-full h-full bg-gray-900 left-[-100%]" : "md:hidden fixed top-[48px] w-full h-full bg-gray-900 left-0"}
      >
        <ul className="flex flex-col gap-4 px-5 border-t border-gray-600 py-4">
          <li>
            <a className="text-lg font-secondary" href="/#about">About</a>
          </li>
          <li>
            <a className="text-lg font-secondary" href="/#projects">Projects</a>
          </li>
          <li>
            <a className="text-lg font-secondary" href="/#blog">Blog</a>
          </li>
          <li>
            <a className="text-lg font-secondary" href="/#contact">Contact</a>
          </li>
          <li>
            <a className="text-lg font-secondary" href="/#resume">Donwlod CV</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;