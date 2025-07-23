"use client";
import React from "react";
import { MerriweatherFont } from "@/lib/fonts/fonts";
import Image from "next/image";
import { useRef } from "react";
import { motion, scale } from "motion/react";

export default function Donate() {
  const formRef = useRef();
  function handleDonate() {
    formRef.current?.submit();
  }
  return (
    <>
      <div className="sm:h-screen w-screen  py-10 flex items-center">
        <div
    
          className="flex flex-col items-center py-5 bg-gradient-to-br from-[#2c67f2b2] to-[#62cff4]"
        >
          <div className="w-[70%] flex flex-col items-center gap-10">
            <div className="flex gap-4 items-center">
              {" "}
              <p
                className={`text-yellow-400 text-3xl sm:text-5xl ${MerriweatherFont.className}`}
              >
                Save her life
              </p>
              <div className=" relative aspect-square w-12 sm:w-15">
                <Image
                  alt=""
                  className=""
                  src="/assets/illustrations/save.png"
                  fill
                />
              </div>
            </div>
            <div className="text-xs sm:text-base w-full flex flex-col gap-10 text-black">
              <p>
                We fundraise in the spring of every year. After we meet our
                fundraising goal, we start looking for girls who are at the risk
                of child marriage or who have left or who are on the brink of
                leaving school because of financial conditions. After we find
                our candidate, we put our money in a certificate of deposit (CD)
                at a bank. We put our money in a diversified portfolio of
                well-known Nepali banks that have a slight risk of defaulting.
                We receive 8-13.5% fixed-rate APR in interest each year. We use
                the money received from interest to pay for primary and
                secondary education. After they graduate from high school, we
                take all our initial deposit and use it to pay for college.
                Currently, we receive a discounted tuition fee. We have also
                made a contract with the school to not raise our tuition for the
                next five years. We will be changing the methods as we find
                better alternatives.
              </p>
              <div className="flex flex-col items-center gap-5">
                <p>
                  Please consider donating to Bidya today. 100% of your donation
                  goes toward funding these scholarships. Bidya is in need of
                  approximately $2,000 - $2,500 for each scholars. If you have
                  any questions or want to donate directly, please feel free to
                  email us at bidyaeducation1@gmail.com or call at 347-475-5054.
                  Bidya appreciates your support.
                </p>
                <motion.button
                  className="px-6 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition-colors duration-200 focus:outline-none "
                  onClick={handleDonate}
                  whileHover={{scale: 1.07}}
                  
                >
                  Donate
                </motion.button>
                <form
                  ref={formRef}
                  action="https://www.paypal.com/donate"
                  method="post"
                  target="_top"
                  className="hidden"
                >
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="LV586CJR76SC2"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
