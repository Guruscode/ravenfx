import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Brain, LineChart, Cloud, Shield } from "lucide-react"

const powerfulFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Performance",
    description: "Leverage advanced algorithms for optimal trading decisions.",
  },
  {
    icon: LineChart,
    title: "Real-Time Market Scanning",
    description: "Continuously monitors markets for profitable opportunities.",
  },
  {
    icon: Shield,
    title: "No Emotions, Just Logic",
    description: "Eliminate human bias and emotional trading mistakes.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Infrastructure",
    description: "Access your trading bot securely from anywhere, anytime.",
  },
]

export default function PowerfulFeaturesSection() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Powerful Features That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
                Drive Results
              </span>
            </h2>

            <p className="text-lg leading-8 text-gray-400 mb-8">
              Flippa Trading is built with smart, scalable technology designed to give you an edge in the market — all
              fully automated and beginner-friendly.
            </p>

            <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl">
              <Zap className="w-5 h-5 mr-2" />
              Get Instant Access
            </Button>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {powerfulFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-blue-900/50 border-blue-500/30 backdrop-blur-sm hover:bg-blue-900/70 transition-all duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
