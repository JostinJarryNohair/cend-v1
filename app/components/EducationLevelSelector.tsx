"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface Level {
  id: string
  name: string
  children?: Level[]
  selected?: boolean
}

const initialLevels: Level[] = [
  {
    id: "secondary",
    name: "Secondaire",
    children: [
      { id: "sec1", name: "Secondaire 1" },
      { id: "sec2", name: "Secondaire 2" },
      { id: "sec3", name: "Secondaire 3" },
      { id: "sec4", name: "Secondaire 4" },
      { id: "sec5", name: "Secondaire 5" },
    ],
  },
  {
    id: "cegep",
    name: "Cégep",
    children: [
      { id: "nature", name: "Sciences de la nature" },
      { id: "human", name: "Sciences humaines" },
    ],
  },
  {
    id: "university",
    name: "Université",
  },
]

export default function EducationLevelSelector({ onSelect }: { onSelect: (level: string) => void }) {
  const [levels, setLevels] = useState(initialLevels)
  const [search, setSearch] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const handleSelect = (levelId: string) => {
    setSelectedLevel(levelId)
    onSelect(levelId)
  }

  const filteredLevels = levels.filter((level) => {
    const matchesSearch = level.name.toLowerCase().includes(search.toLowerCase())
    const childrenMatch = level.children?.some((child) => child.name.toLowerCase().includes(search.toLowerCase()))
    return matchesSearch || childrenMatch
  })

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Rechercher"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="space-y-2">
        {filteredLevels.map((level) => (
          <div key={level.id} className="space-y-1">
            <button
              onClick={() => !level.children && handleSelect(level.id)}
              className={cn(
                "w-full text-left px-4 py-2 flex items-center space-x-2 rounded hover:bg-gray-50",
                selectedLevel === level.id && "text-green-600",
              )}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="16" height="16" rx="2" />
              </svg>
              <span>{level.name}</span>
              {selectedLevel === level.id && (
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 ml-auto text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </button>
            {level.children && (
              <div className="ml-6 space-y-1">
                {level.children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => handleSelect(child.id)}
                    className={cn(
                      "w-full text-left px-4 py-2 flex items-center space-x-2 rounded hover:bg-gray-50",
                      selectedLevel === child.id && "text-green-600",
                    )}
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                    </svg>
                    <span>{child.name}</span>
                    {selectedLevel === child.id && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 ml-auto text-green-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

