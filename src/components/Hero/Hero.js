"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BrushStroke } from "./BrushStroke";
import { Ellipsis } from "lucide-react";

export default function Hero() {
  const images = [
    "/assets/scholars/Asika Paudel.jpeg",
    "/assets/scholars/Manisha Magar.jpeg",
    "/assets/scholars/Roshni (Manika) Sunar.jpeg",
    "/assets/scholars/Rupa Budamagar.jpeg",
    "/assets/scholars/Susmita Burtel.jpg",
    "/assets/scholars/Susmita Kunwar.jpg",
    "/assets/scholars/Ujwal Sunar.jpeg",
    "/assets/scholars/Shristi Kandel.jpg",
    "/assets/scholars/Samikshya Mijar.jpg",
     "/assets/scholars/Prasuna GC.jpg", 
    "/assets/scholars/Ayusha Nepali.jpeg",
  
  ];

  const [loadcount, setLoadCount] = useState(0);
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    if (loadcount === images.length) {
      setloaded(true);
    }
  }, [images.length, loadcount]);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-500">
          <p className="text-lg font-medium ">
            <Ellipsis className="h-20 w-20 animate-ping" />
          </p>
        </div>
      )}
      
     
      <div className="min-h-[60svh] sm:h-[82svh] grid place-items-center">
        

        <div className="h-full w-full px-[2%] sm:px-[5%] py-[4%] sm:py-[2%] relative">

        
          <div className="grid grid-cols-3 sm:grid-cols-5 sm:grid-rows-9 h-full w-full gap-2">
            {images.map((src, index) => (
              <div
                id={"scholar" + (index + 1)}
                key={index}
                className="relative w-full h-full shadow-md"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover object-top"
                  priority={index < 3}
                  onLoad={() => setLoadCount((prev) => prev + 1)}
                />
              </div>
            ))}
          </div>

          <div>
            <BrushStroke loaded={loaded} />
          </div>
        </div>
      </div>
    </>
  );
}