"use client"

import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HeroSection({ animationDelay }: { animationDelay: string }) {
  return (
    <section className="relative px-6 pt-14 lg:px-8 animate-fade-in-up" style={{ animationDelay }}>
      {/* Additional geometric overlay for hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,123,255,0.15),transparent_70%)]"></div>

      <div className="relative z-10 mx-auto max-w-4xl py-16 sm:py-24 lg:py-32">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <Badge
            variant="secondary"
            className="bg-deep-navy/80 text-blue-300 border-blue-800 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 mr-2" />
            Top Passive Income Platform
          </Badge>
        </div>

        {/* Main Heading - Updated colors to match screenshot */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-600">
              AI-Trading
            </span>
            <br />
            Revolution is Here, <em className="text-gray-300 font-light">Don't Miss It.</em>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
            Join of The Most accurate Ai trading bot
          </p>

          {/* CTA Section - Updated button colors */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl text-lg border border-blue-400/20"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Instant Access
            </Button>

            <div className="flex items-center gap-3">
              {/* <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white shadow-lg"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-400 border-2 border-white shadow-lg"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 border-2 border-white shadow-lg"></div>
              </div> */}
              <div className="text-sm text-gray-400">
                <div className="font-semibold text-white">More than 200 traders</div>
                <div>around the world</div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section - Enhanced styling */}
        <div className="mt-16 flex justify-center">
          <div className="relative max-w-4xl w-full">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-blue-950 border border-blue-800/50">
              <Image src="/1.png" alt="People analyzing trading data" fill className="object-cover" />
              {/* Play button overlay removed as per previous turn, assuming it's not needed for static image */}

              {/* Overlay Text - Enhanced styling */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-center">{/* Removed text as per previous turn */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
