"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Users, Utensils, Wifi, TwitterIcon as TikTok, Instagram, Linkedin, Youtube } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900"></h1>
        </div>
      </header>
      <main>
        <section id="home" className="relative bg-[#] text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic02.jpg-aDfC6b6KqucyQIOpgEPQkwt117fu1G.jpeg"
              alt="Friends enjoying community living at Residencia"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
              priority
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-[#295548]">
              {t.hero.welcome}
            </h1>
            <p className="mt-6 max-w-3xl text-xl">{t.hero.subtitle}</p>
            <div className="mt-10">
              <Link href="/rooms">
                <Button size="lg" variant="secondary">
                  {t.hero.bookRoom}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.about.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">{t.about.description1}</p>
                <p className="text-gray-600">{t.about.description2}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <Wifi className="h-8 w-8 text-[#295548]" />
                    <CardTitle>{t.about.features.wifi.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{t.about.features.wifi.description}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Utensils className="h-8 w-8 text-[#295548]" />
                    <CardTitle>{t.about.features.kitchen.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{t.about.features.kitchen.description}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Users className="h-8 w-8 text-[#295548]" />
                    <CardTitle>{t.about.features.community.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{t.about.features.community.description}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CalendarDays className="h-8 w-8 text-[#295548]" />
                    <CardTitle>{t.about.features.lease.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{t.about.features.lease.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="bg-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.events.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[t.events.movieNight, t.events.cookingWorkshop, t.events.gameTournament].map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="text-[#335384] border-[#295548] hover:bg-[#295548] hover:text-white"
                    >
                      {t.events.learnMore}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/events">
                <Button variant="secondary">{t.events.viewAll}</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="faq" className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.faq.title}</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {Object.entries(t.faq.categories).map(([key, category]) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger className="text-lg font-semibold">{category.title}</AccordionTrigger>
                  <AccordionContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, index) => (
                        <AccordionItem key={index} value={`${key}-${index}`}>
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-center text-gray-500">{t.footer.copyright}</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href={t.footer.socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
                  <TikTok className="h-5 w-5" />
                  <span className="sr-only">{t.footer.socialLinks.tiktokLabel}</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={t.footer.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">{t.footer.socialLinks.instagramLabel}</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={t.footer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">{t.footer.socialLinks.linkedinLabel}</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={t.footer.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">{t.footer.socialLinks.youtubeLabel}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

