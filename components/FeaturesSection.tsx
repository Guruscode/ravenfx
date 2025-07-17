"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap } from "lucide-react"
import Image from "next/image"

const features = [
  {
    image: "/10.jpeg",
    title: "More than 200 Users",
    description:
      "Join a global community that trusts Flippa Trading AI to trade smarter and earn daily — no experience needed.",
  },
  {
    image: "/3.png",
    title: "Best AI Bot of 2025",
    description:
      "Recognized for accuracy, speed, and ease of use — Flippa Trading leads the way in AI-driven trading this year.",
  },
  {
    image: "/6.png",
    title: "Daily Earnings Potential",
    description:
      "Earn between $33 to $157 every day, completely hands-free. All you need is 20 minutes to get started.",
  },
  {
    image: "/11.png",
    title: "Set Up in 20 Minutes",
    description:
      "No prior experience needed. Get up and running in under 20 minutes — just connect your account and let the bot trade for you.",
  },
  {
    image: "/5.png",
    title: "24/7 Smart Trading",
    description:
      "The bot never sleeps. Flippa Trading monitors and trades around the clock so you never miss a profitable opportunity.",
  },
  {
    image: "/4.png",
    title: "Consistent Monthly Profits",
    description:
      "Our users regularly see 15%—30% monthly growth, thanks to the power of AI and diversified trading strategies.",
  },
]

export default function FeaturesSection({ animationDelay }: { animationDelay: string }) {
  return (
    <section className="py-24 px-6 lg:px-8 relative animate-fade-in-up" style={{ animationDelay }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-navy/50 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
            The Future of Trading in Just{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">20 Minutes</span>
          </h2>

          <p className="text-lg leading-8 text-gray-400 mb-8">
            It's time to change, as Artificial Intelligence (AI) is revolutionizing the world. Flippa Trading allows you
            to trade smarter with the help of our advanced AI bot. It analyzes and responds to patterns and market
            movements that were successful at least 90% of the times in the past. Let AI do the work for you and benefit
            from completely free access through our partner broker. Easy for beginners and you can start within 20
            minutes!
          </p>

          <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl">
            <Zap className="w-5 h-5 mr-2" />
            Get Instant Access
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-deep-navy/50 border-blue-800 backdrop-blur-sm hover:bg-deep-navy/70 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Feature Visual */}
                <div className="mb-6 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center relative">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Feature Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}