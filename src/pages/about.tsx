import { Link } from "react-router-dom"
// Remove next/image import
// import Image from "next/image"
import { Award, Users, Music, Heart, Target, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About Harmony Music School
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Inspiring musicians and nurturing musical talent since 2005. We believe every person has the potential
                  to create beautiful music.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#EC622D] hover:bg-[#EC622D]">
                    Join Our Community
                  </Button>
                </Link>
                <Link to="/instructors">
                  <Button size="lg" variant="outline">
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src="https://preview-music-school-website-kzmntsu7nnz4q704nj2d.vusercontent.net/placeholder.svg?height=400&width=600"
                width={550}
                height={550}
                alt="Harmony Music School Building"
                className="rounded-lg object-cover w-full max-w-xs sm:max-w-md md:max-w-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600&text=Music+Lesson+in+Progress"
                width={600}
                height={400}
                alt="Music lesson in progress"
                className="rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="max-w-[900px] text-gray-500 text-base sm:text-lg md:text-xl lg:text-xl dark:text-gray-400">
                  Founded in 2005 by a group of passionate musicians and educators, Harmony Music School began as a
                  small studio with a big dream: to make quality music education accessible to everyone.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  What started with just three instructors and a handful of students has grown into a thriving community
                  of over 500 students and 15 expert instructors. Our success stems from our unwavering commitment to
                  personalized instruction and our belief that music has the power to transform lives.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Today, we're proud to be the premier music education destination in our community, offering
                  comprehensive programs in keyboard, guitar, electronic music production, and vocals. Our students have
                  gone on to perform professionally, attend prestigious music schools, and most importantly, develop a
                  lifelong love of music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Values</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              We're guided by core principles that shape everything we do
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Heart className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
                <CardTitle>Passion for Music</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  We believe music is a universal language that brings joy, builds confidence, and creates lasting
                  connections between people.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
                <CardTitle>Personalized Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Every student is unique. We tailor our teaching methods to match individual learning styles, goals,
                  and musical interests.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
                <CardTitle>Innovation in Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  We embrace modern teaching techniques and technology while honoring traditional musical foundations.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="max-w-[800px] mx-auto text-lg text-gray-500 dark:text-gray-400">
              "To inspire and nurture musical talent in students of all ages and skill levels, providing exceptional
              instruction in a supportive, creative environment that fosters both technical excellence and artistic
              expression."
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Nearly two decades of musical education excellence
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Users className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
                <CardTitle className="text-3xl font-bold">500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">Active Students</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Music className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
                <CardTitle className="text-3xl font-bold">15</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">Expert Instructors</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
                <CardTitle className="text-3xl font-bold">18</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">Years of Excellence</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
                <CardTitle className="text-3xl font-bold">2000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">Graduates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Facilities</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              State-of-the-art spaces designed for optimal learning and creativity
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Piano+Studio"
                  alt="Piano Studio"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle>Piano Studios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Six soundproof studios equipped with premium acoustic and digital pianos, perfect for focused
                  learning.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Guitar+Room"
                  alt="Guitar Room"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle>Guitar Rooms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dedicated spaces with professional amplifiers and a variety of acoustic and electric guitars.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Recording+Studio"
                  alt="Recording Studio"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle>Recording Studio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Professional recording facilities where students can create demos and experience studio production.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Electronic+Lab"
                  alt="Electronic Music Lab"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle>Electronic Music Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cutting-edge digital workstations with the latest software and electronic instruments.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Performance+Hall"
                  alt="Performance Hall"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle>Performance Hall</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A beautiful 100-seat venue for recitals, concerts, and special events with professional lighting and
                  sound.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Lounge+Area"
                  alt="Student Lounge"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle>Student Lounge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Comfortable waiting area for parents and students with free Wi-Fi and refreshments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Begin Your Musical Journey?</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Join our community of passionate musicians and discover the joy of making music
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/contact">
                <Button size="lg" className="bg-[#EC622D] hover:bg-[#EC622D]">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline">
                  View Our Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
