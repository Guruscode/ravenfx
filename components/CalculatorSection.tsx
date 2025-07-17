"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Zap } from "lucide-react"
import { useInView } from "@/hooks/use-in-view" // Import useInView

const monthOptions = [1, 3, 6, 12, 24, 36]

export default function CalculatorSection({ animationDelay = "0s" }: { animationDelay?: string }) {
  const [initialInvestment, setInitialInvestment] = useState([1960])
  const [selectedMonths, setSelectedMonths] = useState(1)
  const { ref, isInView } = useInView({ threshold: 0.1 }) // Observe when 10% of element is visible

  // Calculate total amount with compound interest (assuming 15% monthly growth)
  const calculateTotal = () => {
    const monthlyRate = 0.15 // 15% monthly growth
    const principal = initialInvestment[0]
    const total = principal * Math.pow(1 + monthlyRate, selectedMonths)
    return Math.round(total)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section
      ref={ref}
      className={`py-24 px-6 lg:px-8 relative ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
      id="calculator"
      style={{ animationDelay }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-navy/30 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Calculate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
                Passive Earnings
              </span>
            </h2>

            <p className="text-lg leading-8 text-gray-400 mb-8">
              Simply drag the slider to calculate your monthly passive earnings.
            </p>

            <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl">
              <Zap className="w-5 h-5 mr-2" />
              Get Instant Access
            </Button>
          </div>

          {/* Right Calculator */}
          <div className="flex justify-center lg:justify-end">
            <Card className="bg-deep-navy/50 border-blue-500/30 backdrop-blur-sm w-full max-w-md">
              <CardContent className="p-8">
                {/* Initial Investment */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-white font-semibold">Initial Investment</label>
                    <span className="text-white font-bold text-lg">{formatCurrency(initialInvestment[0])}</span>
                  </div>
                  <Slider
                    value={initialInvestment}
                    onValueChange={setInitialInvestment}
                    max={10000}
                    min={250}
                    step={50}
                    className="w-full"
                  />
                </div>

                {/* Months to Compound */}
                <div className="mb-8">
                  <label className="text-white font-semibold mb-4 block">Months To Compound</label>
                  <div className="grid grid-cols-6 gap-2">
                    {monthOptions.map((months) => (
                      <button
                        key={months}
                        onClick={() => setSelectedMonths(months)}
                        className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-200 ${
                          selectedMonths === months
                            ? "bg-white text-blue-900"
                            : "bg-blue-800 text-white hover:bg-blue-700"
                        }`}
                      >
                        {months}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Total Amount */}
                <div className="pt-6 border-t border-blue-700">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Total Amount</span>
                    <span className="text-white font-bold text-2xl">{formatCurrency(calculateTotal())}</span>
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-green-400 text-sm font-semibold">
                      +{formatCurrency(calculateTotal() - initialInvestment[0])} profit
                    </span>
                  </div>
                </div>

                {/* Growth Visualization */}
                <div className="mt-6 pt-6 border-t border-blue-700">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Monthly Growth Rate</div>
                    <div className="text-2xl font-bold text-green-400">15%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
