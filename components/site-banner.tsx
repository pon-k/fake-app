import { Button } from "@/components/ui/button"

export function SiteBanner() {
  return (
    <section
      aria-labelledby="site-banner-heading"
      className="relative isolate flex min-h-[70svh] w-full items-center justify-center overflow-hidden bg-cover bg-center px-4 py-16 text-center shadow-[0_6px_12px_-6px_rgb(0_0_0_/_0.35)]"
      style={{ backgroundImage: "url('/images/conference.jpg')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1
          id="site-banner-heading"
          className="flex flex-col text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] font-bold tracking-tight"
        >
          <span className="text-gray-100">REAL SUCCESS</span>
          <span className="text-yellow-50">BEGINS WITH</span>
          <span className="text-blue-400">FAKE CONSULTING</span>
        </h1>
        <Button
          type="button"
          className="mt-2 h-16 border border-yellow-50 px-5 text-2xl hover:bg-yellow-50 hover:text-black focus:outline-none"
        >
          MEET WITH US
        </Button>
      </div>
    </section>
  )
}
