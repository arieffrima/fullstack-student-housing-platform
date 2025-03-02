import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const rooms = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Room ${i + 1}`,
  price: Math.floor(Math.random() * (2000000 - 1500000) + 1500000),
  available: Math.random() > 0.3,
}))

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Rooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {rooms.map((room) => (
                <Card key={room.id}>
                  <CardHeader>
                    <CardTitle>{room.name}</CardTitle>
                    <CardDescription>{room.available ? "Available" : "Occupied"}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/placeholder.svg"
                      alt={`Room ${room.id}`}
                      width={300}
                      height={200}
                      className="rounded-md"
                    />
                    <p className="mt-2 text-lg font-semibold">Rp {room.price.toLocaleString("id-ID")} / month</p>
                  </CardContent>
                  <CardFooter>
                    {room.available ? (
                      <Link href={`/booking?room=${room.id}`} passHref>
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    ) : (
                      <Button disabled className="w-full">
                        Not Available
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

