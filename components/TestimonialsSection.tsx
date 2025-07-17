"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view" // Import useInView

const videoTestimonials = [
  {
    name: "Benjamin",
    location: "London",
    title: "BUILD A SECOND INCOME",
    thumbnail: "/placeholder.svg?height=300&width=250",
  },
  {
    name: "Abigail",
    location: "Canada",
    title: "VACATION TO FRANCE",
    thumbnail: "/placeholder.svg?height=300&width=250",
  },
  {
    name: "Jordan",
    location: "Portugal",
    title: "IT'S SIMPLY AMAZING",
    thumbnail: "/placeholder.svg?height=300&width=250",
  },
  {
    name: "Mike",
    location: "South Africa",
    title: "BEEN BEYOND MY EXPECTATIONS",
    thumbnail: "/placeholder.svg?height=300&width=250",
    gradient: "from-blue-600 to-cyan-700",
  },
]

const writtenTestimonials = [
  {
    name: "Adebola Salami",
    initials: "AS",
    rating: 5,
    text: "I plan to keep this running long-term. The profits might be smaller per day, but they compound quickly and reliably.",
    featured: false,
  },
  {
    name: "Featured Review",
    initials: "★",
    rating: 3.9,
    text: "396 Reviews",
    featured: true,
    // avatars: [
    //   "",
    //   "/placeholder.svg?height=40&width=40",
    //   "/placeholder.svg?height=40&width=40",
    // ],
  },
  {
    name: "Chuka Nwosu",
    initials: "CN",
    rating: 5,
    text: "The transparency of this company really stood out to me. They openly share their results, risks, and how they make money. It made me feel comfortable trusting them with my trading needs.",
    featured: false,
  },
  {
    name: "Iretioluwa Bamidele",
    initials: "IB",
    rating: 5,
    text: "Flippa Trading's AI has been a game-changer for me.",
    featured: false,
  },
  {
    name: "Yakubu Ibrahim",
    initials: "YI",
    rating: 5,
    text: "As someone with no experience in forex, I was intimidated at first. But the bot takes care of everything, and I'm finally earning from a market I used to avoid.",
    featured: false,
  },
  {
    name: "Fatima Okeke",
    initials: "FO",
    rating: 5,
    text: "I'm a cautious investor and don't like risk. I liked that this bot focuses on steady, consistent growth instead of wild trades. I've seen slow but steady growth, and that suits my goals perfectly.",
    featured: false,
  },
]

export default function TestimonialsSection({ animationDelay = "0s" }: { animationDelay?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.1 }) // Observe when 10% of element is visible

  return (
    <section
      ref={ref}
      className={`py-24 px-6 lg:px-8 relative ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-navy/30 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            What Our Clients Are Saying
          </h2>
        </div>

        {/* Video Testimonials */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {videoTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-deep-navy/50 border-blue-800 overflow-hidden hover:bg-deep-navy/70 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={testimonial.thumbnail || "/placeholder.svg"}
                  alt={`${testimonial.name} testimonial`}
                  fill
                  className="object-cover"
                />

           
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${testimonial.gradient || "from-blue-900/80 via-transparent to-blue-900/40"}`}
                ></div>

             
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group-hover:scale-110"
                  >
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </Button>
                </div>

              
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                    {testimonial.title}
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-300">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div> */}

        {/* Written Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writtenTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`${
                testimonial.featured
                  ? "bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-700/50 col-span-1 md:col-span-2 lg:col-span-1"
                  : "bg-deep-navy/50 border-blue-800"
              } backdrop-blur-sm hover:bg-deep-navy/70 transition-all duration-300`}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${
                      testimonial.featured ? "bg-blue-600" : "bg-cyan-600"
                    } flex items-center justify-center text-white font-bold`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="flex items-center gap-1">
                      {testimonial.featured ? (
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-bold text-white">{testimonial.rating}</div>
                          <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                              <Star key={star} className="w-4 h-4 fill-green-400 text-green-400" />
                            ))}
                            <Star className="w-4 h-4 fill-gray-400 text-gray-400" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                {testimonial.featured ? (
                  <div className="text-center">
                    <div className="text-gray-300 mb-4">{testimonial.text}</div>
                    {/* {testimonial.avatars && (
                      <div className="flex justify-center -space-x-2">
                        {testimonial.avatars.map((avatar, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white"
                          ></div>
                        ))}
                      </div>
                    )} */}
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm leading-relaxed">{testimonial.text}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
