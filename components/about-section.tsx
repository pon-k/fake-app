import Image from "next/image"

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="flex min-h-[70svh] w-full items-center bg-yellow-20 px-6 py-12 text-gray-950 dark:bg-gray-950 dark:text-gray-100 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="w-full max-w-md justify-self-center md:justify-self-end">
          <Image
            src="/images/aboutus.jpg"
            alt="Colleagues meeting around a table"
            width={1333}
            height={2000}
            className="h-[40svh] min-h-64 w-full rounded-xl object-cover object-center shadow-sm md:h-[54svh]"
            sizes="(max-width: 767px) 100vw, 40vw"
          />
        </div>

        <div className="max-w-xl">
          <h2 id="about-heading" className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            About Us
          </h2>
          <p className="mb-4 text-base leading-relaxed sm:text-lg">
            We believe every great idea deserves a little imagination, a lot of curiosity, and a
            team that knows how to make things happen. At Fake Consulting, we turn ambitious
            questions into thoughtful possibilities.
          </p>
          <p className="text-base leading-relaxed sm:text-lg">
            From the first conversation to the final details, we bring fresh perspectives and
            practical thinking to every challenge. We are here to help you see what is possible—and
            make the journey worthwhile.
          </p>
        </div>
      </div>
    </section>
  )
}
