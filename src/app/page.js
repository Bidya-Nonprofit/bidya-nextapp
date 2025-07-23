import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Overview from "@/components/Overview/Overview";
import Impact from "@/components/Impact/Impact";
import Donate from "@/components/Donate/Donate";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
export default function Home() {
  return (
    <>
      <Navbar />

     
      <main
        style={{
          background:
            "radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgba(60, 60, 60,0.03) 0%, rgba(60, 60, 60,0.03) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgba(150, 150, 150,0.03) 0%, rgba(150, 150, 150,0.03) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))",
        }}
      >
        <section>
          <Hero />
        </section>
        <section>
          <Overview />
        </section>
        <section id="about" className="scroll-mt-10">
          <About />
        </section>
        <section id="impact">
          <Impact />
        </section>
        <section id="donate">
          <Donate />
        </section>
        <Footer />
      </main>
    </>
  );
}
