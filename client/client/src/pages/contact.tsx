"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// Update the import path below if your Select component is located elsewhere
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast.toast({
        title: "Form submitted successfully",
        description: "We'll get back to you as soon as possible.",
      })
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have questions or ready to start your musical journey? Get in touch with us today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="space-y-2 flex flex-col items-center text-center  justify-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest">Interested In</Label>
                <Select onValueChange={handleSelectChange} value={formData.interest}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an instrument" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="keyboard">Keyboard & Piano</SelectItem>
                    <SelectItem value="guitar">Guitar</SelectItem>
                    <SelectItem value="electronic">Electronic Pads</SelectItem>
                    <SelectItem value="vocals">Vocals</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full bg-[#EC622D] hover:bg-[#EC622D]" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-[#EC622D]" />
                  Visit Us
                </CardTitle>
                <CardDescription>Our location</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Swathi Diamond, 2nd Floor,</p>
                <p>K L Rao St, Rajarajeshwari Peta Rd, Ajit Singh Nagar,</p>
                <p>Vijayawada, Andhra Pradesh 520015.</p>
                <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1753129529648!6m8!1m7!1srmDZ6aEfK5cVkV_c7LZrIQ!2m2!1d16.53888825414817!2d80.63415928484167!3f1.2014383008946212!4f39.3811916462501!5f0.4051969481121479"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-[#EC622D]" />
                  Call Us
                </CardTitle>
                <CardDescription>Our phone numbers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Main: (123) 456-7890</p>
                <p>Admissions: (123) 456-7891</p>
                <p>Support: (123) 456-7892</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-[#EC622D]" />
                  Email Us
                </CardTitle>
                <CardDescription>Our email addresses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>General: info@harmonymusicschool.com</p>
                <p>Admissions: admissions@harmonymusicschool.com</p>
                <p>Support: support@harmonymusicschool.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hours of Operation</CardTitle>
                <CardDescription>When we're open</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 8:00 PM</div>
                  <div>Saturday</div>
                  <div>10:00 AM - 6:00 PM</div>
                  <div>Sunday</div>
                  <div>12:00 PM - 5:00 PM</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
