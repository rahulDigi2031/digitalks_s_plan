// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import HeroSection from "./herosection";
import Plancards from "./plancards";
import PlansHeader from "./plans";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
    {/* navbar */}
      <Navbar />
      {/* hero-section */}
      <HeroSection />
      {/*Subcription plans section */}
      <PlansHeader />
      {/* plancards small */}
      <Plancards />
      {/* FOOTER */}
      {/* <Footer /> */}
      
    </>
  );
}
