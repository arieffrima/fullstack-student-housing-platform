import type React from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"

// Setup the localizer for the calendar
const localizer = momentLocalizer(moment)

interface RoomAvailability {
  roomId: number
  startDate: Date
  endDate: Date
  isAvailable: boolean
}

interface RoomAvailabilityCalendarProps {
  availabilityData: RoomAvailability[]
}

const RoomAvailabilityCalendar: React.FC<RoomAvailabilityCalendarProps> = ({ availabilityData }) => {
  const events = availabilityData.map((availability) => ({
    title: availability.isAvailable ? "Available" : "Booked",
    start: new Date(availability.startDate),
    end: new Date(availability.endDate),
    allDay: true,
    resource: availability.roomId,
  }))

  return (
    <div className="h-[600px] mt-8">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        views={["month"]}
        eventPropGetter={(event) => ({
          className: event.title === "Available" ? "bg-green-500" : "bg-red-500",
        })}
      />
    </div>
  )
}

export default RoomAvailabilityCalendar

