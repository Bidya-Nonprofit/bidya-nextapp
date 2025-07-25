"use client";
import React from "react";
import Image from "next/image";
import { CourierPrime } from "@/lib/fonts/fonts";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (!scrolled && y > 40) {
        setScrolled(true);
      } else if (scrolled && y < 10) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  const Navitems = [
    { name: "About", link: "#about" },
    { name: "Our Impact", link: "#impact" },
    { name: "Donate", link: "#donate" },
  ];
  return (
    <nav
      className={`max-w-screen bg-white flex text-black items-center justify-around sticky top-0 z-50  px-1 pb-3 pt-9 sm:p-3 sm:pb-1   ${
        scrolled ? "h-[10vh]" : "h-[16vh]"
      } `}
    >
      <Link href="/">
        <div className="flex items-center gap-1 sm:gap-3">
          <p
            className={`text-3xl sm:text-5xl font-extrabold ${CourierPrime.className} text-[#0070C0] `}
          >
            Bidya
          </p>

          <div
            className={`relative w-[20vw] sm:w-[9vw] aspect-[172/144] flex items-center 
               ${
                 scrolled
                   ? "scale-100 sm:scale-0 opacity-0 duration-0 "
                   : "scale-100 opacity-100 duration-[500ms]"
               }`}
          >
            <Image
              className="absolute"
              src="/assets/logo/logo.png"
              alt=""
              fill
              priority
            />
          </div>
        </div>
      </Link>
      <div>
        <ul className="flex items-center gap-2 sm:gap-4 font-des1 ">
          {Navitems.map((items, index) => {
            return (
              <li
                key={index}
                className="relative after:bg-black after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-xs sm:text-lg"
              >
                {" "}
                <Link href={items.link}> {items.name}</Link>{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`absolute top-0 right-0 pt-1 pr-4 text-sm ${
          scrolled ? "hidden" : "block"
        } transition-all duration-300 `}
      >
        <ul className="flex items-center gap-4 text-[10px] sm:text-sm">
          <li className="flex justify-center items-center gap-1">
            {" "}
            <Mail className="h-4 w-4" />{" "}
            <Link href="mailto:bidyaeducation1@gmail.com">
              {" "}
              bidyaeducation1@gmail.com
            </Link>{" "}
          </li>
          <li className="flex justify-center items-center gap-1">
            {" "}
            <Phone className="h-4 w-4" />{" "}
            <Link href="tel:347-475-5054"> 347-475-5054</Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}
