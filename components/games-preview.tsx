"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const games = [
  {
    title: "Ruleta de Premios",
    description: "Girá la ruleta y ganá premios increíbles para tu mascota",
    icon: "🎰",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Raspa y Gana",
    description: "Descubrí qué sorpresa te tocó raspando la tarjeta",
    icon: "🎫",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Trivia Pet",
    description: "Demostrá cuánto sabés sobre el cuidado de mascotas",
    icon: "🧠",
    color: "from-cyan-500 to-blue-500",
  },
]

const prizes = [
  { name: "Gift card ARS 10.000", icon: "💳" },
  { name: "Descuento 20% primera compra", icon: "🎁" },
  { name: "Kit sorpresa", icon: "📦" },
]

export function GamesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-blue-700 mb-4">Juegos & Premios 🎮</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Jugá, divertite y ganá premios increíbles para tu mejor amigo
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, rotateY: 5 }}
            >
              <Card className="relative overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${game.color}`} />
                <Badge className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 hover:bg-yellow-500">
                  Muy pronto
                </Badge>
                <CardHeader className="text-center pt-8">
                  <div className="text-6xl mb-4">{game.icon}</div>
                  <CardTitle className="text-xl font-bold text-blue-700">{game.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">{game.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-black text-orange-700">Premios que podés ganar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {prizes.map((prize, index) => (
                  <motion.div
                    key={prize.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 text-center shadow-md"
                  >
                    <div className="text-4xl mb-2">{prize.icon}</div>
                    <p className="font-semibold text-slate-700">{prize.name}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
