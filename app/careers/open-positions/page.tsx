"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function OpenPositionsPage() {
  const { t } = useLanguage()

  const jobListings = [
    {
      title: "Resident Manager",
      description: "Oversee day-to-day operations of our boarding house and ensure resident satisfaction.",
      requirements: [
        "3+ years of experience in property management",
        "Excellent communication and interpersonal skills",
        "Problem-solving abilities and conflict resolution skills",
        "Proficiency in property management software",
      ],
      responsibilities: [
        "Manage resident check-ins and check-outs",
        "Address resident concerns and maintain a positive living environment",
        "Oversee maintenance and cleaning staff",
        "Ensure compliance with local housing regulations",
      ],
    },
    {
      title: "Maintenance Technician",
      description: "Perform routine maintenance and repairs to keep our facilities in top condition.",
      requirements: [
        "2+ years of experience in building maintenance",
        "Knowledge of plumbing, electrical, and HVAC systems",
        "Ability to lift up to 50 lbs and climb ladders",
        "Available for on-call emergency repairs",
      ],
      responsibilities: [
        "Conduct regular inspections of the property",
        "Perform preventive maintenance on building systems",
        "Respond to and resolve maintenance requests from residents",
        "Maintain inventory of supplies and equipment",
      ],
    },
    {
      title: "Community Events Coordinator",
      description: "Plan and execute engaging events to foster a sense of community among our residents.",
      requirements: [
        "1+ years of experience in event planning or related field",
        "Strong organizational and time management skills",
        "Creativity and enthusiasm for community building",
        "Proficiency in social media and marketing tools",
      ],
      responsibilities: [
        "Develop and implement a calendar of resident events",
        "Coordinate with local businesses and organizations for partnerships",
        "Manage event budgets and resources",
        "Gather feedback and measure resident satisfaction with events",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.careers.openPositions.title}</h1>
        <div className="space-y-8">
          {jobListings.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">{t.careers.openPositions.requirements}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t.careers.openPositions.responsibilities}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">{t.careers.openPositions.applyNow}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

