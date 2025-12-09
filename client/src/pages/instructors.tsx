import { Link } from "react-router-dom";
import { Star, Award, Music } from "lucide-react";
import { SushilKumar, Stephen, Sunny } from "@/assets/Images/InstructorsPfps";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const instructors = [
  {
    id: "sushil-kumar",
    name: "Sushil Kumar",
    instrument: "Keyboardist",
    image: SushilKumar,
    bio: "Classical pianist with over 15 years of teaching experience.",
    specialties: ["Classical Piano", "Jazz", "Sight Reading"],
    experience: "15+ years",
    education: "Master's Degree – Juilliard",
    rating: 4.9,
  },
  {
    id: "stephen",
    name: "Stephen",
    instrument: "Drummer & Electronic Percussionist",
    image: Stephen,
    bio: "Professional percussionist with 12+ years of teaching experience.",
    specialties: ["Electronic Pads", "Rhythm Training", "Live Performance"],
    experience: "12+ years",
    rating: 4.8,
  },
  {
    id: "sunny",
    name: "Sunny",
    instrument: "Guitarist",
    image: Sunny,
    bio: "Expert guitarist and performer with 10 years of experience.",
    specialties: ["Fingerstyle", "Acoustic", "Pop"],
    experience: "10+ years",
    rating: 4.9,
  },
  {
    id: "hudson",
    name: "Hudson",
    instrument: "Sound Architect",
    image: Sunny,
    bio: "Expert guitarist and performer with 10 years of experience.",
    specialties: ["Fingerstyle", "Acoustic", "Pop"],
    experience: "10+ years",
    rating: 4.9,
  },
  {
    id: "prasanna-kumar",
    name: "Prasanna Kumar",
    instrument: "Keyboardist",
    image: Sunny,
    bio: "Expert guitarist and performer with 10 years of experience.",
    specialties: ["Fingerstyle", "Acoustic", "Pop"],
    experience: "10+ years",
    rating: 4.9,
  },
  {
    id: "suresh",
    name: "Suresh",
    instrument: "Percussionist",
    image: Sunny,
    bio: "Expert guitarist and performer with 10 years of experience.",
    specialties: ["Fingerstyle", "Acoustic", "Pop"],
    experience: "10+ years",
    rating: 4.9,
  },
];

export default function Instructors() {
  return (
    <div className="flex flex-col min-h-screen pt-20 font-inter">
      {/* HERO SECTION */}
      <section className="w-full py-12 md:py-20 bg-linear-to-b from-purple-50 to-white text-center">
        <h1 className="text-3xl sm:text-5xl font-bold font-playfair">
          Meet Our Expert Instructors
        </h1>
        <p className="max-w-2xl mx-auto mt-3 text-gray-600 sm:text-lg">
          Learn from passionate musicians dedicated to helping you grow.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl text-center font-bold mb-10">
            Why Choose Our Instructors?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 text-center">
              <Award className="mx-auto h-12 w-12 text-[#EC622D] mb-3" />
              <CardTitle>Professional Experience</CardTitle>
              <CardContent>
                <p className="text-gray-500">
                  Performed in live shows & studios.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <Music className="mx-auto h-12 w-12 text-[#EC622D] mb-3" />
              <CardTitle>Personalized Lessons</CardTitle>
              <CardContent>
                <p className="text-gray-500">Tailored to your goals & style.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <Star className="mx-auto h-12 w-12 text-[#EC622D] mb-3" />
              <CardTitle>Proven Results</CardTitle>
              <CardContent>
                <p className="text-gray-500">Hundreds of trained musicians.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS GRID */}
      <section className="w-full py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((inst) => (
              <Card
                key={inst.id}
                className="flex flex-col h-full overflow-hidden px-4 pb-4 rounded-xl shadow-sm"
              >
                {/* Image container */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden flex items-center justify-center bg-[#F3F4F6]">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="max-h-full w-auto object-contain"
                  />
                   
                </div>
                 
                <CardHeader className="flex justify-between">
                  <div>
                    <CardTitle className="text-xl">{inst.name}</CardTitle>
                    <CardDescription className="text-[#EC622D] font-medium">
                      {inst.instrument}
                    </CardDescription>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{inst.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {inst.bio}
                  </p>

                  <div>
                    <h4 className="font-medium mb-1">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {inst.specialties.map((s) => (
                        <div
                          key={s}
                          className="text-xs px-2 py-1 text-[#EC622D] bg-[#FEE4DC] rounded-full font-bold"
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <div className="p-6 pt-0 flex justify-center">
                  <div className="h-1 w-12 bg-[#EC622D] rounded-full"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Ready to Start Learning?
        </h2>
        <p className="max-w-lg mx-auto mt-3 text-gray-600">
          Contact us to find the perfect instructor for your journey.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-[#EC622D]">
              Contact Us
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

{
  /* <div>
                      <h5 className="font-medium">Education</h5>
                      <p className="text-gray-500">{instructor.education}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Key Achievements</h4>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {instructor.achievements.slice(0, 2).map((ach, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#EC622D]">•</span>
                          {ach}
                        </li>
                      ))}
                    </ul> */
}
// </div>

{
  /* <div className="pt-4 border-t space-y-2 text-sm">
                    <div className="flex gap-2 items-center">
                      <Mail className="h-4 w-4 text-[#EC622D]" />
                      <span className="truncate">{instructor.email}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Phone className="h-4 w-4 text-[#EC622D]" />
                      <span>{instructor.phone}</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Calendar className="h-4 w-4 text-[#EC622D] mt-0.5" />
                      <span className="text-gray-500">{instructor.availability}</span>
                    </div>
                  </div> */
}
