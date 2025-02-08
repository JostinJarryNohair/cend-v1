"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import EducationLevelSelector from "../components/EducationLevelSelector"

export default function Subscribe() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    educationLevel: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleLevelSelect = (level: string) => {
    setFormData((prevState) => ({
      ...prevState,
      educationLevel: level,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Ici, vous ajouteriez la logique pour envoyer les données au backend
  }

  return (
    <div className="min-h-screen bg-floral-white">
      <div className="bg-green-600 p-4">
        <h1 className="text-2xl font-logo text-white container mx-auto">CEND</h1>
      </div>
      <main className="container mx-auto mt-8 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-medium mb-6">Quel est votre niveau scolaire ?</h2>
          <EducationLevelSelector onSelect={handleLevelSelect} />

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="age">Âge</Label>
              <Input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="course">Cours avec lequel vous avez besoin d'aide</Label>
              <Input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required />
            </div>
            <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
              S'abonner
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

