import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Thank You for Your Booking!</h2>
        <p className="mt-2 text-sm text-gray-600">
          We have received your booking request. Our team will review your application and get back to you shortly.
        </p>
        <div className="mt-5">
          <Link href="/" passHref>
            <Button className="w-full">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

