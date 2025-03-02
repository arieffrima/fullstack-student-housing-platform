"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MaintenanceReportForm from "@/components/maintenance-report-form"
import BillViewer from "@/components/bill-viewer"
import CommunicationCenter from "@/components/communication-center"

export default function ResidentPortal() {
  const { t } = useLanguage()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically validate the login credentials
    // For demo purposes, we'll just set isLoggedIn to true
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{t.residentPortal.login.title}</CardTitle>
            <CardDescription>{t.residentPortal.login.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">{t.residentPortal.login.emailLabel}</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="password">{t.residentPortal.login.passwordLabel}</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="text-sm">
                <Link href="/resident-portal/forgot-password" className="text-[#295548] hover:underline">
                  {t.residentPortal.login.forgotPassword}
                </Link>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" onClick={handleLogin}>
              {t.residentPortal.login.submitButton}
            </Button>
          </CardFooter>
          <div className="mt-4 text-center text-sm text-gray-600">{t.residentPortal.login.accessInfo}</div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.residentPortal.title}</h1>
        <Tabs defaultValue="maintenance">
          <TabsList className="mb-4">
            <TabsTrigger value="maintenance">{t.residentPortal.tabs.maintenance}</TabsTrigger>
            <TabsTrigger value="bills">{t.residentPortal.tabs.bills}</TabsTrigger>
            <TabsTrigger value="communication">{t.residentPortal.tabs.communication}</TabsTrigger>
          </TabsList>
          <TabsContent value="maintenance">
            <MaintenanceReportForm />
          </TabsContent>
          <TabsContent value="bills">
            <BillViewer />
          </TabsContent>
          <TabsContent value="communication">
            <CommunicationCenter />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

