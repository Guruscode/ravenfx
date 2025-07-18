"use client" 

import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import PartnersSection from "@/components/PartnersSection"
import FeaturesSection from "@/components/FeaturesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import CalculatorSection from "@/components/CalculatorSection"
import ComparisonSection from "@/components/ComparisonSection"
import PowerfulFeaturesSection from "@/components/PowerfulFeaturesSection"
import FAQSection from "@/components/FAQSection"
import BackToTopButton from "@/components/BackToTopButton" // Import the new component

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-navy relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-blue-900 to-indigo-950">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,192,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,192,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.1),transparent_70%)]"></div>
      </div>
      <div className="relative z-10">
        <Header animationDelay="0s" />
        <HeroSection animationDelay="0.1s" />
       
        <FeaturesSection animationDelay="0.3s" />
        <TestimonialsSection animationDelay="0.4s" />
        <HowItWorksSection animationDelay="0.5s" />
        <CalculatorSection animationDelay="0.6s" />
        <ComparisonSection animationDelay="0.7s" />
        <PowerfulFeaturesSection animationDelay="0.8s" />
        <FAQSection animationDelay="0.9s" />
        <CTASection animationDelay="1.0s" />
        <Footer animationDelay="1.1s" />
      </div>
      <BackToTopButton /> {/* Add the BackToTopButton here */}
    </main>
  )
}
