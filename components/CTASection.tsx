import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
          Ready to Let AI Trade While You Sleep?
        </h2>

        <p className="text-lg leading-8 text-gray-400 max-w-3xl mx-auto mb-12">
          Join over 74,000 users who are earning daily profits with zero effort. It's free, fast, and beginner-friendly
          — start in just 20 minutes.
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-4 px-10 rounded-full shadow-xl text-xl border border-blue-400/20"
        >
          <Zap className="w-6 h-6 mr-3" />
          Get Instant Access
        </Button>
      </div>
    </section>
  )
}
