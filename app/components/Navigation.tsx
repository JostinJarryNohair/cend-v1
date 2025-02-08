import Link from "next/link"
import { Button } from "@/components/ui/button"

const Navigation = () => {
  return (
    <nav className="bg-midnight-green text-floral-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-logo font-bold">
          CEND
        </Link>
        <div className="space-x-4">
          <Link href="/student" className="hover:text-lime-green transition-colors">
            Étudiant
          </Link>
          <Link href="/parent" className="hover:text-lime-green transition-colors">
            Parent
          </Link>
          <Link href="/tutor" className="hover:text-lime-green transition-colors">
            Tuteur
          </Link>
          <Link href="/subscribe">
            <Button variant="outline" className="bg-lime-green text-midnight-green hover:bg-floral-white">
              S'abonner
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost" className="text-floral-white hover:text-lime-green">
              Connexion
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

