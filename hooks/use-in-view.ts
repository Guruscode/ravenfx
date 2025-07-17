"use client"

import { useEffect, useRef, useState } from "react"

export function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      if (entry.isIntersecting) {
        setIsInView(true)
        // Optionally, unobserve once it's in view if you only want it to animate once
        observer.unobserve(entry.target)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options]) // Re-run if options change

  return { ref, isInView }
}
