import { AboutSection } from "@/components/about-section"
import { SiteBanner } from "@/components/site-banner"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <SiteBanner />
        <AboutSection />
      </main>
    </>
  )
}
