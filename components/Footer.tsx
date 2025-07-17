import Link from "next/link"

const navigation = [
  { name: "Benefits", href: "#benefits" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Calculator", href: "#calculator" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
]

export default function Footer({ animationDelay }: { animationDelay: string }) {
  return (
    <footer className="py-16 px-6 lg:px-8 relative animate-fade-in-up" style={{ animationDelay }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy"></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-500 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600">Copyright 2025 | All rights reserved by Flippa Trading</p>
        </div>

        {/* Large Brand Name - Enhanced gradient */}
        <div className="text-center">
          <h3 className="text-6xl sm:text-8xl lg:text-9xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-600">
              FLIPPATRADING
            </span>
          </h3>
        </div>
      </div>
    </footer>
  )
}
