import { AboutSection } from "@/components/about-section"
import { SiteBanner } from "@/components/site-banner"
import { SiteHeader } from "@/components/site-header"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <SiteBanner />
        <AboutSection />
        <TestimonialsSection />
      </main>
    </>
  )
}
