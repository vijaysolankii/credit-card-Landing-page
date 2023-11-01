import React from "react";
import Header from "../components/utilities/Header";
import HeroSection from "../components/HeroSection";
import HeroCarousel from "../components/HeroCarousel";
import PaymentSection from "../components/PaymentSection";
import CardChoices from "../components/CardChoices";
import CTASection from "../components/CTASection";
import Footer from "../components/utilities/Footer";
import Satisfection from "../components/Satisfection";

const Home = () => {
  return (
    <div className="bg-dark">
      <Header />
      <HeroSection />
      <HeroCarousel />
      <PaymentSection />
      <CardChoices />
      <Satisfection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
