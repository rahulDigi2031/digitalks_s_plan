// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import { Box } from "@mui/material";
import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import PricingTable from "./featurePlans";
import HeroSection from "./herosection";
import RatedSection from "./highratedsection";
import StoryNews from "./storynews";
import Plancards from "./plancards";
import PlansHeader from "./plans";
import TesstimonialFeedbacks from "./testimonials";


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
      {/* pricing table */}
      <PricingTable />
      <Plancards />
      <RatedSection/>
      {/* testimonials feedbacks */}
      <TesstimonialFeedbacks />
      {/*  */}
      <StoryNews />
      <Footer />
    </>
  );
}
