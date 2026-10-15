import Image from "next/image"

import { Button } from "@/components/ui/button"

const navigationItems = ["About", "Testimonials", "Contact"]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Image
          src="/images/fakelogo.png"
          alt="Fake Consulting"
          width={1792}
          height={1024}
          priority
          className="h-auto w-28 shrink-0 sm:w-40"
        />

        <nav aria-label="Main navigation" className="flex items-center gap-0.5 sm:gap-2">
          {navigationItems.map((item) => (
            <Button
              key={item}
              type="button"
              variant="ghost"
              className="h-10 px-1.5 text-[10px] min-[375px]:px-2 min-[375px]:text-xs sm:px-3 sm:text-sm"
            >
              {item}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}
