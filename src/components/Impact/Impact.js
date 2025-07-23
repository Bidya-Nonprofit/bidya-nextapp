import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MerriweatherFont } from "@/lib/fonts/fonts";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { data } from "./data";

export default function Impact() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-auto  sm:min-h-screen gap-5 py-5">
        <p
          className={`text-4xl sm:text-5xl text-center ${MerriweatherFont.className} text-title`}
        >
          Our Impact
        </p>

        <Carousel className="w-[80vw]">
          <CarouselContent className="-mt-1 h-[85vh] ">
            {data.map((value, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="max-h-[80vh] scrollbar-hide ">
                    <CardContent className="flex flex-col  sm:flex-row-reverse gap-12 items-start p-6 h-[80vh] w-[80vw] justify-evenly overflow-y-auto scrollbar-hide  ">
                      <div
                        className="flex flex-col items-center max-w-full sm:w-[30vw] gap-2              
                      "
                      >
                        <div className="relative w-full sm:w-[30vw] aspect-[451/300]">
                          <Image
                            alt=""
                            src={value.img}
                            fill
                            priority
                            placeholder="blur"
                            blurDataURL={value.img}
                            className="rounded-2xl object-cover object-top hover:scale-102 transition-all duration-200 hover:brightness-105"
                          />
                        </div>
                        <p className="text-2xl font-des2">{value.name}</p>
                        <div className="flex flex-col justify-center items-center text-gray-700 text-sm">
                          <div className="flex flex-col gap-2 justify-center items-center">
                            <p className="text-xs sm:text-sm">
                              {" "}
                              {`At class ${value.class}, ${value.school}`}
                            </p>
                            <p className="text-xs sm:text-sm">
                              {" "}
                              Part of Bidya since {value.date}
                            </p>
                          </div>
                          <p></p>
                        </div>
                      </div>
                      <div>
                        {value.des.map((para, i) => (
                          <p key={i} className="mb-4 font-des2">
                            {para}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
