"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuándo abren?",
    answer: "Abrimos el 15 de diciembre de 2025. Ese día te enviaremos el acceso a todos los juegos y promociones.",
  },
  {
    question: "¿Quiénes pueden participar?",
    answer:
      "Cualquier persona que resida en AMBA (Ciudad Autónoma de Buenos Aires y Gran Buenos Aires). Esto incluye CABA, GBA Norte, GBA Sur y GBA Oeste.",
  },
  {
    question: "¿Tiene algún costo?",
    answer: "No, participar es completamente gratis. Anotarte, jugar y ganar premios no tiene ningún costo.",
  },
  {
    question: "¿Cómo recibo mis premios?",
    answer:
      "Te contactaremos por email o WhatsApp con los detalles de entrega una vez que ganes. Los premios pueden ser gift cards digitales, descuentos o productos físicos que te enviamos.",
  },
]

export function FAQs() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-blue-700 mb-4">Preguntas Frecuentes</h2>
            <p className="text-lg text-slate-600">Todo lo que necesitás saber</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-white rounded-lg shadow-md px-6 border-none">
                  <AccordionTrigger className="text-left text-lg font-bold text-blue-700 hover:text-blue-800 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
