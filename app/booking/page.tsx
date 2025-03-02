"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    familyName: "",
    givenName: "",
    phoneNumber: "",
    email: "",
    currentAddress: "",
    city: "",
    province: "",
    country: "",
    postcode: "",
    nationalIdCard: null,
    studentCard: null,
    selfie: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log(formData)
    // For now, we'll just redirect to a thank you page
    router.push("/booking/thank-you")
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Booking Form</CardTitle>
          <CardDescription className="text-center">Please fill out all the required information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="familyName">Family Name</Label>
                <Input
                  id="familyName"
                  name="familyName"
                  value={formData.familyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="givenName">Given Name</Label>
                <Input
                  id="givenName"
                  name="givenName"
                  value={formData.givenName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="currentAddress">Current Address</Label>
              <Input
                id="currentAddress"
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="province">Province</Label>
                <Input id="province" name="province" value={formData.province} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="country">Country</Label>
                <Select name="country" onValueChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indonesia">Indonesia</SelectItem>
                    <SelectItem value="malaysia">Malaysia</SelectItem>
                    <SelectItem value="singapore">Singapore</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="postcode">Postcode</Label>
                <Input id="postcode" name="postcode" value={formData.postcode} onChange={handleInputChange} required />
              </div>
            </div>
            <div>
              <Label htmlFor="nationalIdCard">National Identity Card (KTP)</Label>
              <Input id="nationalIdCard" name="nationalIdCard" type="file" onChange={handleFileChange} required />
            </div>
            <div>
              <Label htmlFor="studentCard">Student Card</Label>
              <Input id="studentCard" name="studentCard" type="file" onChange={handleFileChange} required />
            </div>
            <div>
              <Label htmlFor="selfie">Front Face (Selfie)</Label>
              <Input id="selfie" name="selfie" type="file" accept="image/*" onChange={handleFileChange} required />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit Booking
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

