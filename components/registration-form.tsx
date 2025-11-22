"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function RegistrationForm() {
  const { toast } = useToast()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    whatsapp: "",
    zone: "",
    petName: "",
    species: "",
    breed: "",
    sex: "",
    ageYears: "",
    ageMonths: "",
    weight: "",
    foodType: "",
    favoriteBrand: "",
    likes: "",
    dislikes: "",
    allergies: "",
    acceptTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.acceptTerms) {
      toast({
        title: "Error",
        description: "Debes aceptar recibir novedades para continuar",
        variant: "destructive",
      })
      return
    }

    // Simulate form submission
    console.log("[v0] Form submitted:", formData)

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#3B82F6", "#60A5FA", "#93C5FD", "#DBEAFE"],
    })

    setSubmitted(true)

    toast({
      title: "¡Estás adentro! 🐶✨",
      description: "Te escribimos el 15/12/2025 con tu pase. Compartí con tus amigos.",
    })
  }

  if (submitted) {
    return (
      <section id="registration" className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-black text-green-700">¡Estás adentro! 🎉</CardTitle>
                <CardDescription className="text-lg text-green-600">
                  Te escribimos el 15/12/2025 con tu pase. Compartí con tus amigos y que ellos también participen. 🐶✨
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-blue-700 mb-4">Anotate y participá</h2>
            <p className="text-lg text-slate-600">
              Participá por premios en ARS. Te avisamos el 15/12/2025 con todos los detalles.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Owner Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-700 border-b-2 border-blue-200 pb-2">Tus datos</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ownerName" className="required">
                        Tu nombre *
                      </Label>
                      <Input
                        id="ownerName"
                        required
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="required">
                        Tu email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="juan@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp (opcional)</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zone">Zona</Label>
                      <Select
                        value={formData.zone}
                        onValueChange={(value) => setFormData({ ...formData, zone: value })}
                      >
                        <SelectTrigger id="zone">
                          <SelectValue placeholder="Seleccioná tu zona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="caba">CABA</SelectItem>
                          <SelectItem value="gba-norte">GBA Norte</SelectItem>
                          <SelectItem value="gba-sur">GBA Sur</SelectItem>
                          <SelectItem value="gba-oeste">GBA Oeste</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Pet Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-700 border-b-2 border-blue-200 pb-2">
                    Datos de tu mascota 🐾
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="petName">Nombre de la mascota</Label>
                      <Input
                        id="petName"
                        value={formData.petName}
                        onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                        placeholder="Toby"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="species">Especie</Label>
                      <Select
                        value={formData.species}
                        onValueChange={(value) => setFormData({ ...formData, species: value })}
                      >
                        <SelectTrigger id="species">
                          <SelectValue placeholder="Seleccioná" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="perro">Perro 🐕</SelectItem>
                          <SelectItem value="gato">Gato 🐈</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="breed">Raza / Tamaño</Label>
                      <Select
                        value={formData.breed}
                        onValueChange={(value) => setFormData({ ...formData, breed: value })}
                      >
                        <SelectTrigger id="breed">
                          <SelectValue placeholder="Seleccioná tamaño" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mini">Mini</SelectItem>
                          <SelectItem value="mediano">Mediano</SelectItem>
                          <SelectItem value="grande">Grande</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sex">Sexo</Label>
                      <Select value={formData.sex} onValueChange={(value) => setFormData({ ...formData, sex: value })}>
                        <SelectTrigger id="sex">
                          <SelectValue placeholder="Seleccioná" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="m">Macho</SelectItem>
                          <SelectItem value="h">Hembra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ageYears">Edad (años)</Label>
                      <Input
                        id="ageYears"
                        type="number"
                        min="0"
                        max="30"
                        value={formData.ageYears}
                        onChange={(e) => setFormData({ ...formData, ageYears: e.target.value })}
                        placeholder="3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ageMonths">Edad (meses)</Label>
                      <Input
                        id="ageMonths"
                        type="number"
                        min="0"
                        max="11"
                        value={formData.ageMonths}
                        onChange={(e) => setFormData({ ...formData, ageMonths: e.target.value })}
                        placeholder="6"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight">Peso (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        min="0"
                        step="0.1"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        placeholder="15.5"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="foodType">Alimentación actual</Label>
                    <Select
                      value={formData.foodType}
                      onValueChange={(value) => setFormData({ ...formData, foodType: value })}
                    >
                      <SelectTrigger id="foodType">
                        <SelectValue placeholder="Tipo de alimento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seco">Alimento Seco</SelectItem>
                        <SelectItem value="humedo">Alimento Húmedo</SelectItem>
                        <SelectItem value="mixto">Mixto</SelectItem>
                        <SelectItem value="prescripcion">Prescripción</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="favoriteBrand">Marca favorita</Label>
                    <Input
                      id="favoriteBrand"
                      value={formData.favoriteBrand}
                      onChange={(e) => setFormData({ ...formData, favoriteBrand: e.target.value })}
                      placeholder="Royal Canin, Eukanuba, etc."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="likes">Le gusta</Label>
                      <Input
                        id="likes"
                        value={formData.likes}
                        onChange={(e) => setFormData({ ...formData, likes: e.target.value })}
                        placeholder="Pollo, juegos de cuerda..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dislikes">No le gusta</Label>
                      <Input
                        id="dislikes"
                        value={formData.dislikes}
                        onChange={(e) => setFormData({ ...formData, dislikes: e.target.value })}
                        placeholder="Pescado, ruidos fuertes..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="allergies">Alergias / Restricciones</Label>
                    <Input
                      id="allergies"
                      value={formData.allergies}
                      onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                      placeholder="Ninguna conocida o 'No lo sé'"
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    Acepto recibir novedades y promociones de Tienda Mascotera *
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Quiero jugar y ganar 🎯
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
