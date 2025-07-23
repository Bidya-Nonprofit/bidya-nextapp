import React from "react";
import Graph from "./Graph/Graph";
import Link from "next/link";
export default function Overview() {
  return (
    <>
      <div className="w-full flex flex-col items-center py-16 sm:py-21 px-5 sm:px-[10%] sm:gap-10 ">
        <p className="text-center text-4xl sm:text-5xl text-title font-title">
          {" "}
          Female Literacy In Nepal
        </p>

        <div className=" grid grid-cols-1 grid-rows-[40%_60%] sm:grid-rows-1  sm:grid-cols-2 place-items-center font-des1 gap-15">
          <div className="order-2 sm:order-1">
            {" "}
            <Link
              href="https://censusnepal.cbs.gov.np/results/literacy"
              target="_blank"
              className="text-blue-500"
            >
              According to the latest census of Nepal (2021){" "}
            </Link>
            , the literacy rate of women is 69.4%. This dire statistics can be
            attributed to poverty, the caste system, and the low value attached
            to women.
            <br />
            <br />
            Girls living in poverty are especially vulnerable to child marriage
            in Nepal. They also have limited educational opportunities, face
            gender discrimination, and are subject to social and physical
            ostracization that harms their physical and mental health.
            Educational support will help empower these girls to help fight
            child marriage, change society’s perception of women, and abolish
            harmful practices like{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Chhaupadi"
              target="_blank"
              className="text-blue-500"
            >
              Chhaupadi
            </Link>
            , a form of menstrual taboo prohibiting women and girls from
            participating in normal family activities while menstruating.
          </div>
          <Graph />
        </div>
      </div>
    </>
  );
}
