"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Form submitted successfully",
        description: "We'll get back to you as soon as possible.",
      });

      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* HERO */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-linear-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Contact Us
            </h1>
            <p className="max-w-2xl text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl">
              Have questions or ready to start your musical journey? Reach out
              below.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-2">
          {/* FORM SECTION */}
          <div>
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Get in Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg md:text-xl">
                Fill out the form and we will respond as soon as possible.
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
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Interested In</Label>
                <Select
                  value={formData.interest}
                  onValueChange={handleSelectChange}
                >
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

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#EC622D] hover:bg-[#EC622D]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* INFO SECTION */}
          <div className="space-y-6">
            {/* LOCATION */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-[#EC622D]" />
                  Visit Us
                </CardTitle>
                <CardDescription>Our location</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Swathi Diamond, 2nd Floor</p>
                <p>K L Rao St, Ajit Singh Nagar</p>
                <p>Vijayawada, Andhra Pradesh 520015</p>

                <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1753129529648!6m8!1m7!1srmDZ6aEfK5cVkV_c7LZrIQ!2m2!1d16.53888825414817!2d80.63415928484167!3f1.2014383008946212!4f39.3811916462501!5f0.4051969481121479"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* CONTACT NUMBERS */}
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

            {/* EMAILS */}
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

            {/* HOURS */}
            <Card>
              <CardHeader>
                <CardTitle>Hours of Operation</CardTitle>
                <CardDescription>When we're open</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Mon–Fri</div>
                  <div>9 AM – 8 PM</div>
                  <div>Saturday</div>
                  <div>10 AM – 6 PM</div>
                  <div>Sunday</div>
                  <div>12 PM – 5 PM</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
