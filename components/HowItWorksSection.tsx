"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, UserPlus, Play, TrendingUp, Zap, Check, User } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Join our Telegram community",
    description:
      "Click the button and join the fastest-growing AI trading community. Get updates, view MYFXBOOK results and get direct access to support.",
    icon: MessageCircle,
    visual: "telegram",
  },
  {
    number: 2,
    title: "Sign up for free",
    description:
      "Get full access to our powerful AI trading bot at no cost. No subscription, no hidden fees, and no experience needed. You'll receive everything you need to get started instantly.",
    icon: UserPlus,
    visual: "signup",
  },
  {
    number: 3,
    title: "Activate the bot",
    description:
      "Follow our simple installation instructions, or let us do it for you with our free setup service. You'll be live in under 20 minutes.",
    icon: Play,
    visual: "activate",
  },
  {
    number: 4,
    title: "Earn passive income",
    description:
      "The AI bot only trades when historical data shows at least a 90% win rate. Fully automated. No emotions, no manual errors — just results.",
    icon: TrendingUp,
    visual: "trading",
  },
]

export default function HowItWorksSection({ animationDelay }: { animationDelay: string }) {
  return (
    <section className="py-24 px-6 lg:px-8 relative animate-fade-in-up" style={{ animationDelay }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-navy/30 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
            How does Flippa Trading work? —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
              In 4 simple steps
            </span>
          </h2>

          <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl">
            <Zap className="w-5 h-5 mr-2" />
            Get Instant Access
          </Button>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 opacity-30"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Number Circle */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 -translate-y-1/2 top-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg border-4 border-blue-950 shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col items-center gap-12 pl-24 md:pl-0 ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                >
                  {/* Text Content */}
                  <div className="flex-1 pt-6 order-2 lg:order-none">
                    <div
                      className={`max-w-lg text-left ${index % 2 === 0 ? "lg:ml-auto lg:text-right" : "lg:mr-auto"}`}
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Visual Content */}
                  <div className="flex-1 pt-6 order-1 lg:order-none">
                    <Card className="bg-deep-navy/50 border-blue-800 backdrop-blur-sm max-w-lg mx-auto">
                      <CardContent className="p-8">
                        <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center relative overflow-hidden">
                          {/* Telegram Community Visual */}
                          {step.visual === "telegram" && (
                            <div className="relative w-full h-full">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
                              <div className="absolute inset-4 border border-blue-500/30 rounded-lg bg-blue-800/50">
                                <div className="p-4 h-full flex flex-col">
                                  <div className="grid grid-cols-8 gap-1 flex-1">
                                    {[...Array(32)].map((_, i) => (
                                      <div
                                        key={i}
                                        className={`h-2 rounded ${Math.random() > 0.7 ? "bg-blue-500" : "bg-blue-700"}`}
                                      ></div>
                                    ))}
                                  </div>
                                  <div className="mt-4 flex justify-center">
                                    <Button
                                      size="sm"
                                      className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xs px-4 py-1 rounded-full"
                                    >
                                      <Zap className="w-3 h-3 mr-1" />
                                      Get Instant Access
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Sign Up Visual */}
                          {step.visual === "signup" && (
                            <div className="relative w-full h-full flex items-center justify-center">
                              <div className="bg-deep-navy rounded-lg p-6 w-48 border border-blue-500/30">
                                <div className="flex flex-col items-center space-y-4">
                                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                                    <User className="w-6 h-6 text-white" />
                                  </div>
                                  <div className="space-y-2 w-full">
                                    <div className="h-2 bg-blue-500 rounded w-full"></div>
                                    <div className="h-2 bg-blue-500 rounded w-3/4"></div>
                                  </div>
                                  <Button
                                    size="sm"
                                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xs px-4 py-1 rounded-full w-full"
                                  >
                                    Sign Up
                                  </Button>
                                </div>
                              </div>
                              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}

                          {/* Activate Bot Visual */}
                          {step.visual === "activate" && (
                            <div className="relative w-full h-full flex items-center justify-center">
                              <div className="relative">
                                <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center bg-deep-navy">
                                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 animate-pulse"></div>
                                </div>
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                                  <div className="text-xs text-white font-semibold">Live in 20 minutes</div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Trading Visual */}
                          {step.visual === "trading" && (
                            <div className="relative w-full h-full">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800"></div>
                              <div className="relative h-full flex flex-col items-center justify-center space-y-4">
                                {/* Trading Chart Lines */}
                                <div className="w-full h-16 relative">
                                  <div className="absolute inset-0 flex items-end justify-center space-x-1">
                                    {[...Array(12)].map((_, i) => (
                                      <div
                                        key={i}
                                        className="w-2 bg-blue-500 rounded-t"
                                        style={{ height: `${Math.random() * 40 + 10}px` }}
                                      ></div>
                                    ))}
                                  </div>
                                </div>

                                {/* Control Buttons */}
                                <div className="flex space-x-4">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-red-500 text-red-400 hover:bg-red-500/10 px-4 py-1 text-xs bg-transparent"
                                  >
                                    PAUSE
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-1 text-xs"
                                  >
                                    GO
                                  </Button>
                                </div>

                                <div className="text-xs text-gray-400 text-center">
                                  Bot waits for the perfect setup — so you don't have to.
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
