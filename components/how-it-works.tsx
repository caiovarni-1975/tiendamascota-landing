"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "1",
    title: "Te anotás hoy",
    description: "Completá el formulario con tus datos y los de tu mascota",
    icon: "✍️",
  },
  {
    number: "2",
    title: "Te mandamos acceso",
    description: "El 15/12/2025 recibís por email y WhatsApp tu pase para jugar",
    icon: "📧",
  },
  {
    number: "3",
    title: "Jugás y ganás",
    description: "Entrá a los juegos, sumá chances y canjeá premios increíbles",
    icon: "🏆",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-blue-700 mb-4">¿Cómo funciona? 🤔</h2>
          <p className="text-lg text-slate-600">Tres simples pasos para empezar a jugar y ganar</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <CardContent className="pt-12 text-center space-y-4">
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-blue-700">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
