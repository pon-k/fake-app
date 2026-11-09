"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Jordan Lee",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae sem at justo feugiat tincidunt. Integer euismod, erat vel pharetra aliquam, neque erat consequat lectus, vitae tincidunt lectus magna sit amet justo.",
  },
  {
    name: "Maya Chen",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, sapien vitae consectetur consequat, justo erat malesuada erat, in facilisis neque mi at est. Working with this team made every step feel effortless.",
  },
  {
    name: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere lacus vel dui facilisis, sed feugiat sapien suscipit. Their thoughtful guidance helped us move forward with confidence.",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<"next" | "previous">("next")

  function showTestimonial(step: 1 | -1) {
    setDirection(step === 1 ? "next" : "previous")
    setActiveIndex((index) => (index + step + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[activeIndex]

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="flex min-h-[70svh] w-full items-center bg-gray-100 px-6 py-12 text-gray-950 dark:bg-gray-900 dark:text-gray-100 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2
          id="testimonials-heading"
          className="mb-10 text-4xl font-bold tracking-tight sm:text-5xl"
        >
          What our clients say
        </h2>

        <div
          key={activeIndex}
          className={`grid items-center gap-8 md:grid-cols-[minmax(16rem,0.8fr)_1.2fr] md:gap-16 testimonial-enter-${direction}`}
          aria-live="polite"
        >
          <div className="mx-auto w-full max-w-sm">
            <Image
              src={testimonial.image}
              alt={`Portrait of ${testimonial.name}`}
              width={900}
              height={1200}
              unoptimized
              className="h-72 w-full rounded-xl object-cover shadow-md sm:h-96"
              sizes="(max-width: 767px) 100vw, 35vw"
            />
          </div>

          <blockquote className="max-w-2xl">
            <p className="text-xl leading-relaxed sm:text-2xl">
              “{testimonial.quote}”
            </p>
            <footer className="mt-6 text-lg font-semibold">{testimonial.name}</footer>
          </blockquote>
        </div>

        <div className="mt-8 flex items-center justify-end gap-4">
          <span className="mr-2 text-sm tabular-nums text-gray-600 dark:text-gray-300">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            aria-label="Previous testimonial"
            onClick={() => showTestimonial(-1)}
            className="rounded-full border-gray-400 bg-transparent transition-colors hover:bg-gray-950 hover:text-white dark:border-gray-600 dark:hover:bg-gray-100 dark:hover:text-gray-950"
          >
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            aria-label="Next testimonial"
            onClick={() => showTestimonial(1)}
            className="rounded-full border-gray-400 bg-transparent transition-colors hover:bg-gray-950 hover:text-white dark:border-gray-600 dark:hover:bg-gray-100 dark:hover:text-gray-950"
          >
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
