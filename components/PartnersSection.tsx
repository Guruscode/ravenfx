import Image from "next/image"
import { useInView } from "@/hooks/use-in-view" // Import useInView

const partners = [
  { name: "fxbook", logo: "/logo-fxbook.png" },
  { name: "STARTRADER", logo: "/logo-startrader.png" },
  { name: "Vantage", logo: "/logo-vantage.png" },
  { name: "vt.markets", logo: "/logo-vtmarkets.png" },
  { name: "ForexVPS.net", logo: "/logo-forexvps.png" },
]

export default function PartnersSection({ animationDelay = "0s" }: { animationDelay?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.1 }) // Observe when 10% of element is visible

  return (
    <section
      ref={ref}
      className={`py-16 px-6 lg:px-8 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-logo-scroll whitespace-nowrap">
            {/* Group the first set of logos with their gaps */}
            <div className="flex gap-x-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center opacity-80 flex-shrink-0">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Group the duplicated set of logos with their gaps */}
            <div className="flex gap-x-8">
              {partners.map((partner, index) => (
                <div key={`duplicate-${index}`} className="flex items-center justify-center opacity-80 flex-shrink-0">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
