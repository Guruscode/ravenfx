"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Zap } from "lucide-react"
import { useInView } from "@/hooks/use-in-view" // Import useInView

const faqs = [
  {
    question: "What is AI Trading?",
    answer:
      "AI Trading uses artificial intelligence and machine learning algorithms to analyze market data, identify trends, and execute trades automatically. It removes human emotion and can operate 24/7.",
  },
  {
    question: "How does AI trading work?",
    answer:
      "Our AI bot connects to your trading account and uses pre-programmed strategies to analyze market conditions. When optimal trading opportunities are identified, it automatically places and manages trades on your behalf.",
  },
  {
    question: "Is AI trading safe?",
    answer:
      "While no trading is entirely risk-free, AI trading can reduce human error and emotional decisions. Our bot is designed with risk management protocols, and we prioritize transparency in our operations.",
  },
  {
    question: "Can AI trading guarantee profits?",
    answer:
      "No, no form of trading can guarantee profits. The financial markets are volatile, and while AI can significantly improve trading efficiency and potential, past performance does not guarantee future results.",
  },
  {
    question: "Who can use AI trading?",
    answer:
      "Our AI trading platform is designed for both beginners and experienced traders. It's particularly beneficial for those who want to participate in the markets but lack the time or expertise for manual trading.",
  },
  {
    question: "What markets can I trade using AI?",
    answer:
      "Our AI bot is capable of trading across various financial markets, including Forex, cryptocurrencies, and commodities, depending on your broker's offerings and your preferences.",
  },
]

export default function FAQSection({ animationDelay = "0s" }: { animationDelay?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.1 }) // Observe when 10% of element is visible

  return (
    <section
      ref={ref}
      className={`py-24 px-6 lg:px-8 relative ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-navy/30 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">FAQs</h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-deep-navy/50 border border-blue-800 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-400 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl">
            <Zap className="w-5 h-5 mr-2" />
            Get Instant Access
          </Button>
        </div>
      </div>
    </section>
  )
}
