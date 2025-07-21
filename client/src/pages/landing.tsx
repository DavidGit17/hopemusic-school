import { Link } from "react-router-dom";
import { ChevronRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageHero from "../assets/HeroIcon.svg"
import ImageKeyboard from "../assets/InstrumentIcons-Landingpage/Keyboard.svg"
import ImageGuitar from "../assets/InstrumentIcons-Landingpage/Guitar.svg"
import ImageElectronicPads from "../assets/InstrumentIcons-Landingpage/E-DPad.svg";
import ImageVocals from "../assets/InstrumentIcons-Landingpage/Vocals.svg";
import ImagePP1 from "../assets/InstructorsProfilePics/PP-1.jpg"
import ImagePP2 from "../assets/InstructorsProfilePics/PP-2.jpg"
import ImagePP3 from "../assets/InstructorsProfilePics/PP-3.jpg"
import ImageTPP1 from "../assets/TestimonialsProfilePics/TPP1.jpg"
import ImageTPP2 from "../assets/TestimonialsProfilePics/TPP2.jpg"
import ImageTPP3 from "../assets/TestimonialsProfilePics/TPP3.jpg"
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
    <div>
      {/*//!Hero Section  */}
      <section className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center text-center font-playfair">
            {/* Heading */}
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold text-[#EC622D] tracking-[-0.03em] leading-tight max-w-4xl">
              Discover The Musician in You
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-base sm:text-lg md:text-xl font-inter font-normal tracking-[-0.03em]  text-[#6C6C6C] max-w-2xl">
              No experience needed—just bring your passion for music!
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                to=""
                className="bg-[#EC622D] text-white text-sm sm:text-base font-inter  font-medium px-6 py-3 rounded-lg hover:bg-[#cf501d] transition duration-200"
              >
                Get Started Today
              </Link>
            </div>

            {/* Image */}
            <div className="mt-14 w-full px-6 sm:px-12 md:px-16 lg:px-20">
              <img
                src={ImageHero}
                alt="Music Illustration"
                className="w-full md:max-w-3xl  mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/*//!Instruments Section*/}
      <section className="w-full">
        <div className="py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Instruments
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose from our wide range of instrument lessons taught by
                  expert instructors
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="p-4 text-center">
                  <img
                    src={ImageKeyboard}
                    className="mx-auto h-12 w-12 text-[#EC622D]"
                  ></img>
                  <CardTitle className="text-xl">Keyboard</CardTitle>
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn piano and keyboard techniques from classical to
                    contemporary styles
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Link to="/instruments/keyboard" className="w-full">
                    <Button variant="outline" className="w-full cursor-pointer">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="p-4 text-center">
                  <img
                    src={ImageGuitar}
                    className="mx-auto h-12 w-12 text-[#EC622D]"
                  ></img>
                  <CardTitle className="text-xl">Guitar</CardTitle>
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Master acoustic, electric, or bass guitar with personalized
                    instruction
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Link to="/instruments/guitar" className="w-full">
                    <Button variant="outline" className="w-full cursor-pointer">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="p-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <img
                      src={ImageElectronicPads}
                      className="mx-auto h-12 w-12 text-[#EC622D]"
                    ></img>
                  </div>
                  <CardTitle className="text-xl">Electronic Pads</CardTitle>
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore electronic music production and beat-making with
                    digital instruments
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Link to="/instruments/electronic-pads" className="w-full">
                    <Button variant="outline" className="w-full cursor-pointer">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="p-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                    <img
                      src={ImageVocals}
                      className="mx-auto h-12 w-12 text-[#EC622D]"
                    ></img>
                  </div>
                  <CardTitle className="text-xl">Vocals</CardTitle>
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Develop your singing voice with techniques for all musical
                    genres
                    <br />
                    {/* Add a blank line for alignment */}
                    <span>&nbsp;</span>
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Link to="/instruments/electronic-pads" className="w-full">
                    <Button variant="outline" className="w-full cursor-pointer">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/*//! Instructors Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Instructors
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn from experienced musicians with a passion for teaching
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-square relative px-4">
                <img
                  src={ImagePP1}
                  alt="Instructor Sarah Johnson"
                  className="object-cover rounded-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Keyboard & Piano</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Classical pianist with over 15 years of teaching experience.
                  Master's degree from Juilliard.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/instructors/sarah-johnson">
                  <Button variant="ghost" size="sm">
                    View Profile
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square relative px-4">
                <img
                  src={ImagePP2}
                  alt="Instructor Marcus Lee"
                  className="object-cover rounded-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Marcus Lee</CardTitle>
                <CardDescription>Guitar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Professional guitarist who has toured with major artists.
                  Specializes in rock, jazz, and blues.
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
            <Card className="overflow-hidden">
              <div className="aspect-square relative px-4">
                <img
                  src={ImagePP3}
                  alt=""
                  className="object-cover rounded-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Elena Rodriguez</CardTitle>
                <CardDescription>Vocals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Vocal coach with experience in opera, musical theater, and
                  contemporary styles.
                  <br />
                    {/* Add a blank line for alignment */}
                    <span>&nbsp;</span>
                </p>
              </CardContent>
              <CardFooter className="">
                <Link to="/instructors/elena-rodriguez">
                  <Button variant="ghost" size="sm">
                    View Profile
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link to="/instructors">
              <Button variant="outline">
                View All Instructors
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/*//! Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Students Say
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our community of musicians
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img
                    src={ImageTPP1}
                    alt="Student Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-base">Michael T.</CardTitle>
                    <CardDescription>Piano Student</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "I've been taking piano lessons for 6 months and my progress
                  has been amazing. The instructors are patient and
                  knowledgeable."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img
                    src={ImageTPP2}
                    alt="Student Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-base">David L.</CardTitle>
                    <CardDescription>Vocal Student</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "The vocal coaching I've received has transformed my singing.
                  I've gained confidence and technique that I never thought
                  possible."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img
                    src={ImageTPP3}
                    alt="Student Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-base">Jessica R.</CardTitle>
                    <CardDescription>Guitar Student</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "Learning guitar here has been a fantastic experience. The
                  personalized approach has helped me progress quickly."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/*//! Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 flex justify-center">
        <div className="container grid items-center gap-6 px-4 md:px-16 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Contact Us
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have questions or ready to start your musical journey? Get in
              touch with us today.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Link to="/contact">
              <Button className="bg-[#EC622D] hover:bg-[#EC622D]">
                Contact Us
              </Button>
            </Link>
            <Link to="tel:+1234567890">
              <Button variant="outline">Call Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
