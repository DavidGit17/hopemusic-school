import "../app.css";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "../assets/svgviewer-output (1).svg";
import HeroBg from "../assets/HeroB.svg";
import ImageKeyboard from "../assets/InstrumentIcons-Landingpage/Keyboard.svg";
import ImageGuitar from "../assets/InstrumentIcons-Landingpage/Guitar.svg";
import ImageElectronicPads from "../assets/InstrumentIcons-Landingpage/E-DPad.svg";
import ImageVocals from "../assets/InstrumentIcons-Landingpage/Vocals 2.svg";
import { SushilKumar, Stephen, Sunny } from "@/assets/Images/InstructorsPfps";
import ImageTPP1 from "../assets/TestimonialsProfilePics/TPP1.jpg";
import ImageTPP2 from "../assets/TestimonialsProfilePics/TPP2.jpg";
import ImageTPP3 from "../assets/TestimonialsProfilePics/TPP3.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Landing() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className=" w-full flex flex-col items-center justify-center h-screen  md:pt-40">
        <img
          src={HeroBg}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 flex flex-col items-center font-playfair  text-center container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-0 md:pt-0  pt-40 h-screen ">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-black leading-tight max-w-4xl">
            Discover the Musician <br className="md:hidden"/>in You
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-inter text-seashell-700 max-w-2xl">
            No experience needed—just bring your passion for music!
          </p>
          <div className="mt-8 md:pt-6">
            <Button className="bg-[#FF804F] text-white text-md sm:text-base font-bold font-inter px-6 py-5 rounded-lg hover:bg-red-700 transition">
              Get Started Today
            </Button>
          </div>
          <div className="w-full pt-10">
            <img
              src={HeroBanner}
              className="w-full object-cover sm:h-64 h-50 md:h-64"
              style={{
                maxWidth: "100vw",
                width: "100vw",
                marginLeft: "calc(-50vw + 50%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* INSTRUMENTS SECTION */}
      <section className="w-full bg-white">
        <div className="w-full pt-20 md:pt-28 lg:pt-36 pb-12 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl font-playfair">
                Our Instruments
              </h2>
              <p className="max-w-2xl text-gray-500 md:text-lg font-inter">
                Choose from our wide range of instrument lessons taught by
                expert instructors
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 max-w-5xl mx-auto">
              {/* Keyboard */}
              <Card className="transition-all hover:shadow-lg flex flex-col">
                <CardHeader className="p-4 text-center">
                  <img src={ImageKeyboard} className="mx-auto w-16 h-16" />
                  <CardTitle className="text-lg sm:text-xl">Keyboard</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1">
                  <p className="text-sm text-gray-500">
                    Learn piano and keyboard techniques from classical to
                    contemporary styles
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/instruments/keyboard" className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Guitar */}
              <Card className="transition-all hover:shadow-lg flex flex-col">
                <CardHeader className="p-4 text-center">
                  <img src={ImageGuitar} className="mx-auto w-16 h-16" />
                  <CardTitle className="text-lg sm:text-xl">Guitar</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1">
                  <p className="text-sm text-gray-500">
                    Master acoustic, electric, or bass guitar with personalized
                    instruction
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/instruments/guitar" className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Electronic Pads */}
              <Card className="transition-all hover:shadow-lg flex flex-col">
                <CardHeader className="p-4 text-center">
                  <img
                    src={ImageElectronicPads}
                    className="mx-auto w-16 h-16"
                  />
                  <CardTitle className="text-lg sm:text-xl">
                    Electronic Pads
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1">
                  <p className="text-sm text-gray-500">
                    Explore electronic music production and beat-making with
                    digital instruments
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/instruments/electronic-pads" className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Vocals */}
              <Card className="transition-all hover:shadow-lg flex flex-col">
                <CardHeader className="p-4 text-center">
                  <img src={ImageVocals} className="mx-auto w-16 h-16" />
                  <CardTitle className="text-lg sm:text-xl">Vocals</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1">
                  <p className="text-sm text-gray-500">
                    Develop your singing voice with techniques for all genres
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/instruments/vocals" className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS SECTION */}
      <section className="w-full bg-white">
        <div className="py-12 md:py-20 flex justify-center">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl font-playfair">
                Meet Our Instructors
              </h2>
              <p className="max-w-2xl text-gray-500 md:text-lg font-inter">
                Learn from experienced musicians with a passion for teaching
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
              {/* Card 1 */}
              <Card className="overflow-hidden flex flex-col px-2 pt-3">
                <div className="relative w-full h-72 rounded-xl overflow-hidden flex items-center justify-center bg-[#F3F4F6]">
                  <img
                    src={SushilKumar}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <CardHeader>
                  <CardTitle>Sushil Kumar</CardTitle>
                  <CardDescription>
                    Keyboardist & Vocal Instructor
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-500 text-sm">
                    Makes learning keyboard and singing feel effortless with
                    clear and friendly teaching.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/instructors/sushil-kumar">
                    <Button variant="ghost" size="sm">
                      View Profile
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 2 */}
              <Card className="overflow-hidden flex flex-col px-2 pt-3">
                <div className="relative w-full h-72 rounded-xl overflow-hidden flex items-center justify-center bg-[#F3F4F6]">
                  <img
                    src={Stephen}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <CardHeader>
                  <CardTitle>Marcus Lee</CardTitle>
                  <CardDescription>Electronic Drum Instructor</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-500 text-sm">
                    Master of rhythm, makes electronic drumming super fun and
                    engaging for beginners.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/instructors/marcus-lee">
                    <Button variant="ghost" size="sm">
                      View Profile
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Card 3 */}
              <Card className="overflow-hidden flex flex-col px-2 pt-3">
                <div className="relative w-full h-72 rounded-xl overflow-hidden flex items-center justify-center bg-[#F3F4F6]">
                  <img
                    src={Sunny}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <CardHeader>
                  <CardTitle>Elena Rodriguez</CardTitle>
                  <CardDescription>Vocals</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-500 text-sm">
                    Helps students master vocal techniques quickly through a
                    calm and structured teaching style.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/instructors/elena-rodriguez">
                    <Button variant="ghost" size="sm">
                      View Profile
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
              <Link to="/instructors">
                <Button variant="outline">
                  View All Instructors <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl font-playfair">
              What Our Students Say
            </h2>
            <p className="max-w-2xl text-gray-500 md:text-lg font-inter">
              Hear from our community of musicians
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src={ImageTPP1} width={45} className="rounded-full" />
                  <div>
                    <CardTitle className="text-base">Michael T.</CardTitle>
                    <CardDescription>Piano Student</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  "I've been taking piano lessons for 6 months and my progress
                  has been amazing."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src={ImageTPP2} width={45} className="rounded-full" />
                  <div>
                    <CardTitle className="text-base">David L.</CardTitle>
                    <CardDescription>Vocal Student</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  "The vocal coaching transformed my singing. I gained
                  confidence and technique."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src={ImageTPP3} width={45} className="rounded-full" />
                  <div>
                    <CardTitle className="text-base">Jessica R.</CardTitle>
                    <CardDescription>Guitar Student</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  "Learning guitar here has been a fantastic experience. I
                  progressed quickly."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto grid items-center gap-10 px-4 sm:px-6 lg:px-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl font-playfair">
              Contact Us
            </h2>
            <p className="max-w-lg text-gray-500 md:text-lg mt-2 font-inter">
              Have questions or ready to start your musical journey?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:justify-end font-inter">
            <Link to="/contact">
              <Button className="w-full sm:w-auto bg-[#FF804F] hover:bg-seashell-500">
                Contact Us
              </Button>
            </Link>
            <Link to="tel:+1234567890">
              <Button variant="outline" className="w-full sm:w-auto">
                Call Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
