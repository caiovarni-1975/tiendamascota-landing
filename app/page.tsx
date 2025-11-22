"use client"

import { Hero } from "@/components/hero"
import { RegistrationForm } from "@/components/registration-form"
import { GamesPreview } from "@/components/games-preview"
import { HowItWorks } from "@/components/how-it-works"
import { WhatsAppContact } from "@/components/whatsapp-contact"
import { FAQs } from "@/components/faqs"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <GamesPreview />
      <HowItWorks />
      <RegistrationForm />
      <WhatsAppContact />
      <FAQs />
      <Footer />
    </main>
  )
}
