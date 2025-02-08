import { Shield, Heart, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {[
        {
          icon: <Shield className="h-8 w-8" />,
          title: "Accompagnement personnalisé",
          description: "Chaque étudiant bénéficie d'un suivi adapté à ses besoins et à son rythme d'apprentissage.",
        },
        {
          icon: <Heart className="h-8 w-8" />,
          title: "Passion pour l'éducation",
          description:
            "Nos tuteurs sont passionnés par l'enseignement et s'engagent pleinement dans la réussite de leurs élèves.",
        },
        {
          icon: <Target className="h-8 w-8" />,
          title: "Objectifs atteints",
          description:
            "Nous travaillons ensemble pour atteindre les objectifs académiques fixés et développer la confiance en soi.",
        },
      ].map((feature, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="text-lime-green mb-2">{feature.icon}</div>
            <CardTitle className="text-xl font-bold text-midnight-green">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

