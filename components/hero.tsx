"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { PawPattern } from "@/components/paw-pattern"

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-sky-50 to-blue-50">
      <PawPattern />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Logo (PNG en /public/images/logo_tienda_mascotera_web_1024.png) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full border-4 border-slate-800 bg-white flex items-center justify-center p-2 shadow">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/logo_tienda_mascotera_web_1024.png"
                    alt="Logo Tienda Mascotera"
                    fill
                    className="object-contain rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-blue-700 leading-tight"
          >
            ¡Llegamos el 15/12/2025! 🐾
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-medium"
          >
            Juegos, premios y mimos para tu mascota. Anotate y recibí el pase.
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CountdownTimer targetDate="2025-12-15T00:00:00-03:00" />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Anotate y jugá 🎮
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
