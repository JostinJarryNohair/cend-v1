import { Users, GraduationCap, Clock, Trophy } from "lucide-react"

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
      {[
        {
          icon: <Users className="h-8 w-8" />,
          number: "500+",
          label: "Étudiants accompagnés",
        },
        {
          icon: <GraduationCap className="h-8 w-8" />,
          number: "50+",
          label: "Tuteurs qualifiés",
        },
        {
          icon: <Clock className="h-8 w-8" />,
          number: "10000+",
          label: "Heures de tutorat",
        },
        {
          icon: <Trophy className="h-8 w-8" />,
          number: "95%",
          label: "Taux de réussite",
        },
      ].map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-lime-green mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold text-midnight-green mb-1">{stat.number}</div>
          <div className="text-gray-600 text-center">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

