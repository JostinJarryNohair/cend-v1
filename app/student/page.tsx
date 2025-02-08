import Navigation from "../components/Navigation"

export default function StudentPortal() {
  return (
    <div className="min-h-screen bg-floral-white">
      <Navigation />
      <main className="container mx-auto mt-16 px-4">
        <h1 className="text-4xl font-bold text-midnight-green mb-6 font-logo">Portail Étudiant</h1>
        <p className="text-xl mb-8">
          Bienvenue sur votre espace personnel. Ici, vous pouvez consulter vos cours, votre tuteur et votre historique.
        </p>
        {/* Nous ajouterons plus de contenu ici dans les prochaines étapes */}
      </main>
    </div>
  )
}

