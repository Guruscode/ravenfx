"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Bot, TrendingUp, Clock, Activity, BarChart3, Zap } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Users,
    title: "More than 150 Users",
    description:
      "Join a global community that trusts Flippa Trading AI to trade smarter and earn daily — no experience needed.",
    image: "/forex.jpg",
  },
  {
    icon: Bot,
    title: "Best AI Bot of 2025",
    description:
      "Recognized for accuracy, speed, and ease of use — Flippa Trading leads the way in AI-driven trading this year.",
    gradient: true,
  },
  {
    icon: TrendingUp,
    title: "Daily Earnings Potential",
    description:
      "Earn between $33 to $157 every day, completely hands-free. All you need is 20 minutes to get started.",
    circuit: true,
  },
  {
    icon: Clock,
    title: "Set Up in 20 Minutes",
    description:
      "No prior experience needed. Get up and running in under 20 minutes — just connect your account and let the bot trade for you.",
    timer: true,
  },
  {
    icon: Activity,
    title: "24/7 Smart Trading",
    description:
      "The bot never sleeps. Flippa Trading monitors and trades around the clock so you never miss a profitable opportunity.",
    dashboard: true,
  },
  {
    icon: BarChart3,
    title: "Consistent Monthly Profits",
    description:
      "Our users regularly see 15%—30% monthly growth, thanks to the power of AI and diversified trading strategies.",
    chart: true,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-transparent"></div>

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
              className="bg-blue-900/50 border-blue-800 backdrop-blur-sm hover:bg-blue-900/70 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Feature Visual */}
                <div className="mb-6 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center relative">
                  {feature.image && (
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  )}

                  {feature.gradient && (
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-blue-500 to-cyan-600 blur-xl opacity-80"></div>
                  )}

                  {feature.circuit && (
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    </div>
                  )}

                  {feature.timer && (
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">20</div>
                            <div className="text-xs text-gray-400">Minutes</div>
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500 animate-pulse"></div>
                      </div>
                    </div>
                  )}

                  {feature.dashboard && (
                    <div className="relative w-full h-full bg-blue-800 rounded-lg p-4">
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-xs text-white font-bold">
                          24/7
                        </div>
                      </div>
                      <div className="mt-8 space-y-2">
                        <div className="h-2 bg-blue-500 rounded w-3/4"></div>
                        <div className="h-2 bg-cyan-500 rounded w-1/2"></div>
                        <div className="h-2 bg-indigo-500 rounded w-2/3"></div>
                      </div>
                      <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                  )}

                  {feature.chart && (
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                      <div className="relative h-full flex items-end justify-center space-x-2 p-4">
                        <div className="w-4 h-8 bg-blue-500 rounded-t"></div>
                        <div className="w-4 h-12 bg-cyan-500 rounded-t"></div>
                        <div className="w-4 h-16 bg-indigo-500 rounded-t"></div>
                        <div className="w-4 h-20 bg-blue-400 rounded-t"></div>
                        <div className="w-4 h-24 bg-cyan-400 rounded-t"></div>
                      </div>
                      <div className="absolute top-4 right-4 text-green-400 text-sm font-bold">+30%</div>
                    </div>
                  )}

                  {!feature.image &&
                    !feature.gradient &&
                    !feature.circuit &&
                    !feature.timer &&
                    !feature.dashboard &&
                    !feature.chart && <feature.icon className="w-16 h-16 text-blue-400" />}
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
