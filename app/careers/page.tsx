"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CareersPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.careers.title}</h1>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{t.careers.description.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t.careers.description.content}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.careers.openPositions.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t.careers.openPositions.content}</p>
            </CardContent>
            <CardFooter>
              <Link href="/careers/open-positions">
                <Button variant="outline">{t.careers.openPositions.viewPositions}</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

