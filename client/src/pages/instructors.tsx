import { Link } from "react-router-dom";
import { Mail, Phone, Star, Award, Calendar, Music } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/badge";

// =============================
//   INSTRUCTORS DATA (UNCHANGED)
// =============================
const instructors = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    instrument: "Keyboard & Piano",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Classical pianist with over 15 years of teaching experience. Master's degree from Juilliard School of Music.",
    specialties: ["Classical Piano", "Jazz", "Music Theory", "Sight Reading"],
    experience: "15+ years",
    education: "Master's Degree - Juilliard School",
    rating: 4.9,
    email: "sarah@harmonymusic.com",
    phone: "(555) 123-4567",
    availability: "Mon-Fri: 2:00 PM - 8:00 PM, Sat: 10:00 AM - 4:00 PM",
    achievements: [
      "Carnegie Hall Performance (2018)",
      "Regional Piano Competition Winner",
      "Published Music Theory Curriculum",
    ],
  },
  {
    id: "marcus-lee",
    name: "Marcus Lee",
    instrument: "Guitar",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Professional guitarist who has toured with major artists. Specializes in rock, jazz, and blues with 12 years of teaching experience.",
    specialties: ["Rock Guitar", "Jazz", "Blues", "Fingerstyle"],
    experience: "12+ years",
    education: "Bachelor's Degree - Berklee College of Music",
    rating: 4.8,
    email: "marcus@harmonymusic.com",
    phone: "(555) 234-5678",
    availability: "Tue-Thu: 3:00 PM - 9:00 PM, Sat-Sun: 11:00 AM - 5:00 PM",
    achievements: [
      "Toured with Grammy-nominated artists",
      "Featured in Guitar World Magazine",
      "Recorded on 15+ studio albums",
    ],
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    instrument: "Vocals",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Vocal coach with experience in opera, musical theater, and contemporary styles. Trained at the Royal Academy of Music.",
    specialties: ["Opera", "Musical Theater", "Pop", "Vocal Health"],
    experience: "10+ years",
    education: "Master's Degree - Royal Academy of Music",
    rating: 4.9,
    email: "elena@harmonymusic.com",
    phone: "(555) 345-6789",
    availability: "Mon-Wed: 1:00 PM - 7:00 PM, Fri-Sat: 10:00 AM - 6:00 PM",
    achievements: [
      "Lead roles in 20+ opera productions",
      "Voice coach for Broadway shows",
      "International vocal competition judge",
    ],
  },
  {
    id: "david-kim",
    name: "David Kim",
    instrument: "Electronic Pads & Production",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Electronic music producer and beat-maker with expertise in modern digital instruments and music production software.",
    specialties: ["Beat Making", "Electronic Production", "Ableton Live", "Sound Design"],
    experience: "8+ years",
    education: "Bachelor's Degree - Audio Engineering",
    rating: 4.7,
    email: "david@harmonymusic.com",
    phone: "(555) 456-7890",
    availability: "Wed-Fri: 4:00 PM - 10:00 PM, Sun: 12:00 PM - 6:00 PM",
    achievements: [
      "Produced tracks for major record labels",
      "Electronic music festival performer",
      "Certified Ableton Live trainer",
    ],
  },
  {
    id: "lisa-chen",
    name: "Lisa Chen",
    instrument: "Piano & Music Theory",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Classically trained pianist specializing in music theory education and beginner instruction with a gentle, patient approach.",
    specialties: ["Beginner Piano", "Music Theory", "Classical", "Exam Preparation"],
    experience: "7+ years",
    education: "Master's Degree - New England Conservatory",
    rating: 4.8,
    email: "lisa@harmonymusic.com",
    phone: "(555) 567-8901",
    availability: "Mon-Thu: 3:00 PM - 8:00 PM, Sat: 9:00 AM - 3:00 PM",
    achievements: [
      "100% student exam pass rate",
      "Youth piano competition coordinator",
      "Music theory curriculum developer",
    ],
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    instrument: "Bass Guitar & Guitar",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Session musician and bass guitarist with extensive experience in multiple genres from funk to metal.",
    specialties: ["Bass Guitar", "Funk", "Rock", "Session Playing"],
    experience: "14+ years",
    education: "Bachelor's Degree - Musicians Institute",
    rating: 4.6,
    email: "james@harmonymusic.com",
    phone: "(555) 678-9012",
    availability: "Tue-Thu: 2:00 PM - 8:00 PM, Sun: 1:00 PM - 7:00 PM",
    achievements: [
      "Session work with 50+ artists",
      "Funk bass masterclass instructor",
      "Featured in Bass Player Magazine",
    ],
  },
];

export default function Instructors() {
  return (
    <div className="flex flex-col min-h-screen pt-20">

      {/* HERO SECTION */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-linear-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold font-playfair">Meet Our Expert Instructors</h1>
          <p className="max-w-3xl mx-auto text-gray-600 md:text-xl mt-4 font-inter">
            Learn from passionate musicians and experienced educators dedicated to helping you grow.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full py-12 md:py-24 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl text-center font-bold mb-10">Why Choose Our Instructors?</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 text-center">
              <Award className="mx-auto h-12 w-12 text-[#EC622D] mb-3" />
              <CardTitle>Professional Experience</CardTitle>
              <CardContent>
                <p className="text-gray-500">Real-world performance & studio background.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <Music className="mx-auto h-12 w-12 text-[#EC622D] mb-3" />
              <CardTitle>Personalized Teaching</CardTitle>
              <CardContent>
                <p className="text-gray-500">Lessons tailored to your goals & style.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <Star className="mx-auto h-12 w-12 text-[#EC622D] mb-3" />
              <CardTitle>Proven Results</CardTitle>
              <CardContent>
                <p className="text-gray-500">Hundreds of successful students.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS GRID */}
      <section className="w-full py-12 md:py-24 bg-gray-50 font-inter">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor) => (
              <Card key={instructor.id} className="flex flex-col h-full overflow-hidden">
                
                <div className="aspect-square bg-gray-100">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <CardHeader className="flex justify-between">
                  <div>
                    <CardTitle className="text-xl">{instructor.name}</CardTitle>
                    <CardDescription className="text-[#EC622D] font-medium">
                      {instructor.instrument}
                    </CardDescription>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{instructor.rating}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex-1">
                  <p className="text-gray-600 text-sm line-clamp-3">{instructor.bio}</p>

                  <div>
                    <h4 className="font-medium mb-1">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((s) => (
                        <Badge key={s} variant="secondary" className="text-xs px-2 py-1">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium">Experience</h5>
                      <p className="text-gray-500">{instructor.experience}</p>
                    </div>
                    <div>
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
                    </ul>
                  </div>

                  <div className="pt-4 border-t space-y-2 text-sm">
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
                  </div>
                </CardContent>

                <div className="p-6 pt-0">
                  <Link to={`/instructors/${instructor.id}`}>
                    <Button className="w-full bg-[#EC622D] hover:bg-[#EC622D]">
                      View Full Profile
                    </Button>
                  </Link>
                </div>

              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-full py-16 bg-white text-center font-inter">
        <h2 className="text-3xl sm:text-4xl font-bold">Ready to Start Learning?</h2>
        <p className="max-w-lg mx-auto text-gray-600 mt-3">
          Contact us to find the perfect instructor for your journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link to="/contact">
            <Button size="lg" className="bg-[#EC622D] hover:bg-[#EC622D]">Contact Us Today</Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline">Learn About Our School</Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
