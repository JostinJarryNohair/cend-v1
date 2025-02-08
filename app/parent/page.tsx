import Navigation from "../components/Navigation"

export default function ParentPortal() {
  return (
    <div className="min-h-screen bg-floral-white">
      <Navigation />
      <main className="container mx-auto mt-16 px-4">
        <h1 className="text-4xl font-bold text-midnight-green mb-6 font-logo">Portail Parent</h1>
        <p className="text-xl mb-8">
          Bienvenue sur l'espace dédié aux parents. Suivez ici les progrès de votre enfant.
        </p>
        {/* Nous ajouterons plus de contenu ici dans les prochaines étapes */}
      </main>
    </div>
  )
}

