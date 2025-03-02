"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunicationCenter() {
  const { t } = useLanguage()
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the message to your backend
    console.log("Message sent:", message)
    // Reset form after submission
    setMessage("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.residentPortal.communication.title}</CardTitle>
        <CardDescription>{t.residentPortal.communication.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="message">{t.residentPortal.communication.messageLabel}</Label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit}>
          {t.residentPortal.communication.submitButton}
        </Button>
      </CardFooter>
    </Card>
  )
}

