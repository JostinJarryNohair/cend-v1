import Navigation from "./components/Navigation"
import { Stats } from "./components/Stats"
import { Features } from "./components/Features"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-floral-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20160409-3rhdZHfTYU4zfitZqNTSHwUAXH7qpe.png"
            alt="Étudiants qui étudient"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold font-logo mb-6">Réussissez avec CEND</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Votre succès académique est notre priorité. Découvrez un accompagnement personnalisé qui fait la différence.
          </p>
          <Link href="/subscribe">
            <Button className="bg-lime-green text-midnight-green hover:bg-white hover:text-midnight-green text-lg px-8 py-6">
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-green mb-4">Notre impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Des résultats concrets qui démontrent notre engagement envers la réussite de nos étudiants
          </p>
        </div>
        <Stats />
      </section>

      {/* Image + Text Section */}
      <section className="py-16 bg-gradient-to-br from-midnight-green to-green-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20160409-3rhdZHfTYU4zfitZqNTSHwUAXH7qpe.png"
                alt="Tutorat personnalisé"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Un apprentissage adapté à chacun</h2>
              <p className="text-lg mb-6">
                Chez CEND, nous croyons que chaque étudiant est unique. C'est pourquoi nous proposons des solutions
                d'apprentissage personnalisées qui s'adaptent à vos besoins et à votre rythme.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Tuteurs expérimentés et passionnés",
                  "Suivi régulier des progrès",
                  "Méthodes d'apprentissage innovantes",
                  "Horaires flexibles",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-6 w-6 text-lime-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/subscribe">
                <Button className="bg-lime-green text-midnight-green hover:bg-white hover:text-midnight-green">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-floral-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-green mb-4">Pourquoi choisir CEND ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Une approche moderne de l'éducation centrée sur la réussite et l'épanouissement
          </p>
        </div>
        <Features />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-midnight-green">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer votre voyage vers la réussite ?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Rejoignez CEND aujourd'hui et découvrez comment nous pouvons vous aider à atteindre vos objectifs
            académiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/subscribe">
              <Button className="bg-lime-green text-midnight-green hover:bg-white hover:text-midnight-green px-8">
                S'inscrire maintenant
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-midnight-green px-8"
              >
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

