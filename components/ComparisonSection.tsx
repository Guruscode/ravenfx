import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { XCircle, CheckCircle, Zap, Hand, Bot } from "lucide-react"

const manualTradingPoints = [
  {
    text: "Time-consuming: You need to place orders yourself.",
    icon: XCircle,
  },
  {
    text: "Human errors: You need to place orders yourself.",
    icon: XCircle,
  },
  {
    text: "Always on alert: Risk of missing trades.",
    icon: XCircle,
  },
  {
    text: "Emotional trading: Fear and greed influence decisions.",
    icon: XCircle,
  },
  {
    text: "Limited strategy: Reliant on one source and approach.",
    icon: XCircle,
  },
]

const aiRobotTradingPoints = [
  {
    text: "Automated: Everything runs on its own.",
    icon: CheckCircle,
  },
  {
    text: "Always active: Trades day and night.",
    icon: CheckCircle,
  },
  {
    text: "Data-driven: No emotions, only logic.",
    icon: CheckCircle,
  },
  {
    text: "Flexible strategies: Adapts multiple techniques and markets simultaneously.",
    icon: CheckCircle,
  },
]

export default function ComparisonSection() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
            Manual Trading VS.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
              AI Robot Trading
            </span>
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Manual Trading Card */}
          <Card className="bg-blue-900/50 border-blue-800 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center">
                  <Hand className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Manual Trading</h3>
              </div>
              <ul className="space-y-6">
                {manualTradingPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <point.icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-400 leading-relaxed">{point.text}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* AI Robot Trading Card */}
          <Card className="bg-blue-900/50 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Robot Trading</h3>
              </div>
              <ul className="space-y-6">
                {aiRobotTradingPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <point.icon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-400 leading-relaxed">{point.text}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

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
