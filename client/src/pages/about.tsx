import { Link } from "react-router-dom"
import { Award, Users, Music, Heart, Target, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-20">

      {/* HERO SECTION */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-linear-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 place-items-center">

            {/* TEXT */}
            <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight">
                About Harmony Music School
              </h1>

              <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl">
                Inspiring musicians and nurturing talent since 2005. We believe every person has the potential to create beautiful music.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#EC622D] hover:bg-[#EC622D] w-full sm:w-auto">
                    Join Our Community
                  </Button>
                </Link>

                <Link to="/instructors">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>

            {/* IMAGE */}
            <div className="order-1 lg:order-2 w-full flex justify-center">
              <img
                src="https://preview-music-school-website-kzmntsu7nnz4q704nj2d.vusercontent.net/placeholder.svg?height=500&width=700"
                alt="Harmony Music School Building"
                className="rounded-lg object-cover w-full max-w-sm sm:max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid gap-12 lg:grid-cols-2 place-items-center">

            {/* IMAGE */}
            <div className="w-full">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Music lesson in progress"
                className="rounded-lg object-cover w-full max-w-xl mx-auto"
              />
            </div>

            {/* TEXT */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>

              <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl">
                Founded in 2005 by passionate musicians, Harmony Music School began as a small studio with a dream: to make quality music education accessible to everyone.
              </p>

              <p className="text-gray-500 dark:text-gray-400">
                What started with three instructors and a few students is now a thriving community of 500+ learners and 15 expert mentors. Our growth comes from personalized teaching and a deep love for music.
              </p>

              <p className="text-gray-500 dark:text-gray-400">
                Today, we offer programs in keyboard, guitar, electronic production, and vocals — empowering students to perform, create, and enjoy music for life.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Mission & Values</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-xl">
              We're guided by core principles that define our teaching and community.
            </p>
          </div>

          {/* VALUES CARDS */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <Card className="text-center p-6">
              <Heart className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
              <CardHeader><CardTitle>Passion for Music</CardTitle></CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Music is a language that builds joy, confidence, and connection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <Target className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
              <CardHeader><CardTitle>Personalized Learning</CardTitle></CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Every student is unique, so we tailor lessons to match individual goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <Lightbulb className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
              <CardHeader><CardTitle>Innovation in Education</CardTitle></CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  We blend modern techniques with strong musical foundations.
                </p>
              </CardContent>
            </Card>

          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg">
              "To inspire and nurture talent in a supportive environment that cultivates creativity, skill, and artistic passion."
            </p>
          </div>

        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Impact</h2>
            <p className="max-w-xl mx-auto text-gray-500 dark:text-gray-400 text-base md:text-xl">
              Nearly two decades of shaping musical journeys.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <Card className="text-center p-6">
              <Users className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
              <CardHeader><CardTitle className="text-3xl font-bold">500+</CardTitle></CardHeader>
              <CardContent><p className="text-gray-500">Active Students</p></CardContent>
            </Card>

            <Card className="text-center p-6">
              <Music className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
              <CardHeader><CardTitle className="text-3xl font-bold">15</CardTitle></CardHeader>
              <CardContent><p className="text-gray-500">Expert Instructors</p></CardContent>
            </Card>

            <Card className="text-center p-6">
              <Award className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
              <CardHeader><CardTitle className="text-3xl font-bold">18</CardTitle></CardHeader>
              <CardContent><p className="text-gray-500">Years of Excellence</p></CardContent>
            </Card>

            <Card className="text-center p-6">
              <Target className="mx-auto h-12 w-12 text-[#EC622D] mb-4" />
              <CardHeader><CardTitle className="text-3xl font-bold">2000+</CardTitle></CardHeader>
              <CardContent><p className="text-gray-500">Graduates</p></CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Facilities</h2>
            <p className="max-w-xl mx-auto text-gray-500 dark:text-gray-400 text-base md:text-xl">
              Designed for creativity, learning, and performance.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Piano Studio",
              "Guitar Room",
              "Recording Studio",
              "Electronic Lab",
              "Performance Hall",
              "Lounge Area",
            ].map((title) => (
              <Card key={title} className="overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={`/placeholder.svg?text=${title}`}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    State-of-the-art space for enhanced learning experience.
                  </p>
                </CardContent>
              </Card>
            ))}

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Begin Your Musical Journey?
            </h2>

            <p className="max-w-xl mx-auto text-gray-500 dark:text-gray-400 md:text-lg">
              Join a community of passionate musicians and discover the joy of creating music.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#EC622D] hover:bg-[#EC622D] w-full sm:w-auto">
                  Get Started Today
                </Button>
              </Link>

              <Link to="/gallery">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
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
