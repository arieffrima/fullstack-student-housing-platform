"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const images = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Community event at Residencia" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Residents enjoying the common area" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Cooking workshop in the shared kitchen" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Movie night in the entertainment room" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Study group in the library" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Fitness session in the gym" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Rooftop barbecue party" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Game night in the common area" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Residents having breakfast in the dining area" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Yoga class in the wellness room" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Art exhibition featuring residents' work" },
  { src: "/placeholder.svg?height=400&width=600", alt: "International food festival" },
]

export default function GalleryPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.gallery.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{t.gallery.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <div className="relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-2 text-center text-sm text-gray-500">{image.alt}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}

