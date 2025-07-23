"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer
      style={{
        background:
          "radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgba(60, 60, 60,0.03) 0%, rgba(60, 60, 60,0.03) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgba(150, 150, 150,0.03) 0%, rgba(150, 150, 150,0.03) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))",
      }}
      className="text-black py-10 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        <div className="relative w-1/3 sm:w-1/2 max-w-[300px] aspect-[172/144] mx-auto">
          <Image
            alt=""
            className="object-contain"
            src="/assets/logo/logo.png"
            fill
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-black">Contact</h3>
          <ul className="text-sm text-black space-y-2">
            <li className="flex gap-1 items-center ">
              {" "}
              <MapPin className="h-4 w-4" />
              <Link
                href="https://maps.app.goo.gl/2zhAHPCf34nfU9Kk7"
                target="_blank"
              >
                {" "}
                50-24 65th Place Woodside, NY, 11377
              </Link>{" "}
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <Phone className="h-4 w-4" />{" "}
              <Link href="tel:347-475-5054"> 347-475-5054</Link>
            </li>
            <li className="flex gap-1 items-center">
              <Mail className="h-4 w-4" />{" "}
              <Link href="mailto:bidyaeducation1@gmail.com">
                {" "}
                bidyaeducation1@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs text-gray-400 mt-4">
            ©Copyright {year} Bidya.org
          </p>
        </div>
        <p className="sm:col-span-3 text-center"> Developed with ❤️ </p>
      </div>
    </footer>
  );
}
