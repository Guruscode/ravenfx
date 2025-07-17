"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useInView } from "@/hooks/use-in-view" // Import useInView

const navigation = [
  { name: "Benefits", href: "#benefits" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Calculator", href: "#calculator" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
]

export default function Header({ animationDelay = "0s" }: { animationDelay?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.1 }) // Observe when 10% of element is visible

  return (
    <header
      ref={ref}
      className={`relative z-50 w-full ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold">
              <span className="text-blue-500">Flippa</span>
              <span className="text-white">Trading</span>
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-deep-navy border-blue-800">
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-blue-700">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                      Get Instant Access
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="https://t.me/+lI3jSAYGC8thMjBk"
           target="_blank"
        rel="noopener noreferrer"
          className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors">  
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
            Get Instant Access
          </Button>
          </Link>
            
               
        </div>
      </nav>
    </header>
  )
}
