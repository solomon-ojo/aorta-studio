"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const desktopLinkStyle = "text-sm";
const mobileLinkStyle = "text-base my-2 font-semibold";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-white mt-8 h-[60px] md:h-[80px] w-[90%] mx-auto flex items-center rounded-xl relative z-40">
      <div className="container w-full">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex-1">
            <Link href={"/"}>
              <Image
                src={"/navis_logo.webp"}
                width={130}
                height={130}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Navlinks */}
          <nav className="flex-1 hidden lg:block">
            <ul className="flex items-center justify-between gap-1">
              <li className={desktopLinkStyle}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={desktopLinkStyle}>
                <Link href={"/about"}>About</Link>
              </li>
              <li className={desktopLinkStyle}>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li className={desktopLinkStyle}>
                <Link href={"/blog"}>Blog</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Navlinks */}
          <nav
            className={`lg:hidden absolute w-full right-0 bg-black overflow-hidden rounded-lg transition-all duration-500 ${
              isOpen
                ? "max-h-[300px] top-[calc(100%+10px)]"
                : "max-h-0 top-[calc(100%+10px)]"
            }`}
          >
            <ul className="flex flex-col justify-between gap-1 text-white pl-5 py-4">
              <li className={mobileLinkStyle}>
                <Link href={"/"}>Home</Link>
              </li>
              <li className={mobileLinkStyle}>
                <Link href={"/about"}>About</Link>
              </li>
              <li className={mobileLinkStyle}>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li className={mobileLinkStyle}>
                <Link href={"/blog"}>Blog</Link>
              </li>
            </ul>
          </nav>

          {/* Right Side Controls */}
          <div className="flex-1 flex items-center justify-end">
            {/* Desktop Button */}
            <div className="hidden md:block mr-2">
              <Button text={"Contact"} color={"bg-primary"} />
            </div>
            {/* Mobile Toggle Icon */}
            <div
              onClick={handleToggle}
              className="lg:hidden bg-gray-100 p-1 cursor-pointer"
            >
              {isOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
