"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminDashboard() {
  const router = useRouter()
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [roomPrices, setRoomPrices] = useState({
    single: "",
    double: "",
    suite: "",
  })
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
  })
  const [newRoom, setNewRoom] = useState({
    number: "",
    type: "single",
    price: "",
    status: "available",
  })

  const handleVideoUpload = (e: React.FormEvent) => {
    e.preventDefault()
    if (videoFile) {
      console.log("Uploading video:", videoFile.name)
      setVideoFile(null)
    }
  }

  const handlePriceUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating room prices:", roomPrices)
  }

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Adding new event:", newEvent)
    setNewEvent({ title: "", date: "", description: "" })
  }

  const handleAddRoom = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Adding new room:", newRoom)
    setNewRoom({ number: "", type: "single", price: "", status: "available" })
  }

  const handleLogout = () => {
    // Clear admin session/cookie here
    router.push("/admin")
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
        <Tabs defaultValue="rooms">
          <TabsList className="mb-4">
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="video">Upload Video</TabsTrigger>
            <TabsTrigger value="prices">Update Prices</TabsTrigger>
          </TabsList>

          <TabsContent value="rooms">
            <Card>
              <CardHeader>
                <CardTitle>Manage Rooms</CardTitle>
                <CardDescription>Add new rooms or update existing ones</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddRoom} className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="roomNumber">Room Number</Label>
                      <Input
                        id="roomNumber"
                        value={newRoom.number}
                        onChange={(e) => setNewRoom({ ...newRoom, number: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="roomType">Room Type</Label>
                      <Select value={newRoom.type} onValueChange={(value) => setNewRoom({ ...newRoom, type: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="double">Double</SelectItem>
                          <SelectItem value="suite">Suite</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="roomPrice">Price</Label>
                      <Input
                        id="roomPrice"
                        type="number"
                        value={newRoom.price}
                        onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="roomStatus">Status</Label>
                      <Select
                        value={newRoom.status}
                        onValueChange={(value) => setNewRoom({ ...newRoom, status: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select room status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="available">Available</SelectItem>
                          <SelectItem value="occupied">Occupied</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button type="submit">Add Room</Button>
                </form>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Room Number</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>101</TableCell>
                      <TableCell>Single</TableCell>
                      <TableCell>Rp 1,500,000</TableCell>
                      <TableCell>Available</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    {/* Add more rows as needed */}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Manage Events</CardTitle>
                <CardDescription>Add or edit upcoming events</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddEvent} className="space-y-4 mb-6">
                  <div>
                    <Label htmlFor="eventTitle">Event Title</Label>
                    <Input
                      id="eventTitle"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventDescription">Event Description</Label>
                    <Textarea
                      id="eventDescription"
                      value={newEvent.description}
                      onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit">Add Event</Button>
                </form>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Movie Night</TableCell>
                      <TableCell>2023-07-15</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    {/* Add more rows as needed */}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="video">
            <Card>
              <CardHeader>
                <CardTitle>Upload Video</CardTitle>
                <CardDescription>Upload a new video to the website</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVideoUpload} className="space-y-4">
                  <div>
                    <Label htmlFor="video">Select Video File</Label>
                    <Input
                      id="video"
                      type="file"
                      accept="video/*"
                      onChange={(e) => setVideoFile(e.target.files ? e.target.files[0] : null)}
                      required
                    />
                  </div>
                  <Button type="submit">Upload Video</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prices">
            <Card>
              <CardHeader>
                <CardTitle>Update Room Prices</CardTitle>
                <CardDescription>Modify the prices for different room types</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePriceUpdate} className="space-y-4">
                  <div>
                    <Label htmlFor="single">Single Room Price</Label>
                    <Input
                      id="single"
                      type="number"
                      value={roomPrices.single}
                      onChange={(e) => setRoomPrices({ ...roomPrices, single: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="double">Double Room Price</Label>
                    <Input
                      id="double"
                      type="number"
                      value={roomPrices.double}
                      onChange={(e) => setRoomPrices({ ...roomPrices, double: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="suite">Suite Price</Label>
                    <Input
                      id="suite"
                      type="number"
                      value={roomPrices.suite}
                      onChange={(e) => setRoomPrices({ ...roomPrices, suite: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit">Update Prices</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

