"use client"

import { useState } from "react"
import Navigation from "../components/Navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Ici, vous ajouteriez la logique pour authentifier l'utilisateur
  }

  return (
    <div className="min-h-screen bg-floral-white">
      <Navigation />
      <main className="container mx-auto mt-16 px-4">
        <h1 className="text-4xl font-bold text-midnight-green mb-6 font-logo">Connexion</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <Label htmlFor="username">Nom d'utilisateur</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-lime-green text-midnight-green hover:bg-midnight-green hover:text-lime-green"
          >
            Se connecter
          </Button>
        </form>
      </main>
    </div>
  )
}

