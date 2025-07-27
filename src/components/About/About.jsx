import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full sm:h-screen flex flex-col items-center gap-10 px-5 sm:px-[10%] py-[40%] sm:py-16">
      <h2 className="text-4xl sm:text-5xl text-[#0070C0] font-title self-center sm:self-start">
        About Bidya
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-[60%_40%] items-center gap-10">
        <div className="flex flex-col gap-6 sm:gap-9 order-2 sm:order-1">
          <p className="font-des1 text-base sm:text-lg leading-relaxed text-gray-800">
            Bidya is a 501(c)(3) organization supporting female students in
            Nepal who face difficulties completing their education due to
            poverty and other harsh circumstances. Unlike similar organizations,
            we make a long-term commitment to supporting our scholars throughout
            their educational journeys. Bidya enrolls scholars in a private or
            public English-medium school in Nepal, covering tuition, school
            supplies, and other education-related expenses until they finish
            university.
            <br />
            <br />
            Nepalese girls, especially those from a lower caste and who live in
            poverty, are often subject to child marriage. They have very limited
            opportunities. Bidya believes that by supporting and empowering our
            scholars, we stop her from being another child bride, and we hope
            that she will break out of the poverty cycle to create a different
            future for herself.
          </p>
        </div>

        <div className="relative w-2/3 sm:w-full max-w-[300px] aspect-[172/144] mx-auto order-1 sm:order-2">
          <Image
            alt="Bidya Logo"
            src="/assets/logo/logo.webp"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
