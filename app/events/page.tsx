"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const { t } = useLanguage()

  const events = [
    t.events.movieNight,
    t.events.cookingWorkshop,
    t.events.gameTournament,
    {
      title: "Yoga Session",
      description: "Start your day with a relaxing yoga session led by a professional instructor.",
      date: "2023-07-15",
    },
    {
      title: "Book Club Meeting",
      description: "Join our monthly book club to discuss the latest bestseller and meet fellow book lovers.",
      date: "2023-07-20",
    },
    {
      title: "Cultural Exchange Night",
      description:
        "Experience different cultures through food, music, and presentations by our international residents.",
      date: "2023-07-25",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.events.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {t.events.learnMore}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

