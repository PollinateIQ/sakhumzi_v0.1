"use client"

import { useState } from 'react'
import { useForm, Controller, FieldError } from 'react-hook-form'
import { format } from 'date-fns'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const locations = ["Zoolake", "Vilakazi", "Phefeni"]

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
]

// Mock data for taken slots (you would replace this with actual data from your backend)
const takenSlots = {
  Zoolake: ["1:00 PM", "2:30 PM", "6:00 PM"],
  Vilakazi: ["12:30 PM", "3:00 PM", "7:30 PM"],
  Phefeni: ["2:00 PM", "4:30 PM", "8:00 PM"],
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  guests: number;
  specialRequests?: string;
}

export default function ReservationForm() {
  const [date, setDate] = useState<Date | undefined>()
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>()
  const { toast } = useToast()

  const onSubmit = (data: FormData) => {
    if (date && selectedTime) {
      console.log('Reservation submitted:', { ...data, date: format(date, 'yyyy-MM-dd'), time: selectedTime, location: selectedLocation })
      toast({
        title: "Reservation Submitted",
        description: "We've received your reservation request. We'll contact you shortly to confirm.",
      })
    } else {
      toast({
        title: "Error",
        description: "Please select a date and time for your reservation.",
        variant: "destructive",
      })
    }
  }

  const renderError = (error: FieldError | undefined) => {
    return error ? <p className="text-red-500 text-sm">{error.message}</p> : null
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-sakhumzi-gold text-white p-6">
        <CardTitle className="text-2xl font-bold">Make a Reservation</CardTitle>
        <CardDescription className="text-white/80">Book your table at Sakhumzi Restaurant</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name", { required: "Name is required" })} className="border-sakhumzi-gold/50 focus:border-sakhumzi-gold" />
              {renderError(errors.name)}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email", { required: "Email is required" })} className="border-sakhumzi-gold/50 focus:border-sakhumzi-gold" />
              {renderError(errors.email)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("phone", { required: "Phone is required" })} className="border-sakhumzi-gold/50 focus:border-sakhumzi-gold" />
              {renderError(errors.phone)}
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Controller
                name="guests"
                control={control}
                rules={{ required: "Number of guests is required", min: { value: 1, message: "Minimum 1 guest" } }}
                render={({ field }) => (
                  <Input type="number" id="guests" {...field} min="1" className="border-sakhumzi-gold/50 focus:border-sakhumzi-gold" />
                )}
              />
              {renderError(errors.guests)}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Location</Label>
            <Select onValueChange={setSelectedLocation} defaultValue={selectedLocation}>
              <SelectTrigger className="w-full border-sakhumzi-gold/50 focus:border-sakhumzi-gold">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal border-sakhumzi-gold/50 focus:border-sakhumzi-gold">
                  {date ? format(date, 'PPP') : 'Pick a date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="rounded-md border border-sakhumzi-gold/50"
                />
              </PopoverContent>
            </Popover>
          </div>
          {date && (
            <div className="space-y-2">
              <Label>Time</Label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedTime === slot ? "default" : "outline"}
                    className={`w-full ${takenSlots[selectedLocation as keyof typeof takenSlots].includes(slot) ? "opacity-50 cursor-not-allowed" : ""} ${selectedTime === slot ? 'bg-sakhumzi-gold text-white' : 'border-sakhumzi-gold/50 text-sakhumzi-black hover:bg-sakhumzi-gold/10'}`}
                    onClick={() => setSelectedTime(slot)}
                    disabled={takenSlots[selectedLocation as keyof typeof takenSlots].includes(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea id="specialRequests" {...register("specialRequests")} className="border-sakhumzi-gold/50 focus:border-sakhumzi-gold" />
          </div>
          <Button type="submit" className="w-full bg-sakhumzi-gold text-white hover:bg-sakhumzi-gold/90">Make Reservation</Button>
        </form>
      </CardContent>
    </Card>
  )
}
