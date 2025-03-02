"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function MaintenanceReportForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the maintenance report to your backend
    console.log("Maintenance report submitted:", formData)
    // Reset form after submission
    setFormData({ title: "", description: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.residentPortal.maintenance.title}</CardTitle>
        <CardDescription>{t.residentPortal.maintenance.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">{t.residentPortal.maintenance.titleLabel}</Label>
            <Input id="title" name="title" value={formData.title} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="description">{t.residentPortal.maintenance.descriptionLabel}</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit}>
          {t.residentPortal.maintenance.submitButton}
        </Button>
      </CardFooter>
    </Card>
  )
}

