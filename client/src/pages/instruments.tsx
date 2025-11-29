import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs";

export default function Instruments() {
  return (
    <div className="flex flex-col min-h-screen mt-16 w-full">
      {/* HERO SECTION */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-linear-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-playfair">
            Our Instruments
          </h1>
          <p className="max-w-3xl mx-auto text-gray-500 md:text-xl mt-3 dark:text-gray-400 font-inter">
            Explore our comprehensive music programs and find the perfect
            instrument to express yourself.
          </p>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 font-inter">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Tabs defaultValue="keyboard" className="w-full">
            {/* RESPONSIVE TAB BUTTONS */}
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full mb-6 font-inter">
              <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
              <TabsTrigger value="guitar">Guitar</TabsTrigger>
              <TabsTrigger value="electronic">Electronic Pads</TabsTrigger>
              <TabsTrigger value="vocals">Vocals</TabsTrigger>
            </TabsList>

            {/* ================= KEYBOARD ================= */}
            <TabsContent value="keyboard">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* IMAGE */}
                <div className="flex justify-center">
                  <img
                    src="https://preview-music-school-website-kzmntsu7nnz4q704nj2d.vusercontent.net/placeholder.svg?height=400&width=600"
                    alt="Piano and Keyboard"
                    className="rounded-lg object-cover w-full max-w-md sm:max-w-lg"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center space-y-6 font-inter">
                  {/* TITLE */}
                  <div>
                    <h2 className="text-3xl font-bold">Keyboard</h2>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400 mt-2">
                      Comprehensive instruction for students of all ages and
                      skill levels.
                    </p>
                  </div>

                  {/* HIGHLIGHTS */}
                  <div>
                    <h3 className="text-xl font-bold">Curriculum Highlights</h3>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Classical and contemporary techniques",
                        "Music theory and sight reading",
                        "Improvisation and composition",
                        "Performance preparation",
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-[#EC622D] mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SCHEDULE */}
                  {/* <div>
                    <h3 className="text-xl font-bold">Lesson Schedule</h3>
                    <div className="grid gap-4 mt-2 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Beginner</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Mon, Wed: 3–6 PM</p>
                          <p className="text-sm">Sat: 10 AM–1 PM</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">
                            Intermediate/Advanced
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Tue, Thu: 4–7 PM</p>
                          <p className="text-sm">Sat: 2–5 PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div> */}

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact">
                      <Button className="bg-[#EC622D] hover:bg-[#EC622D] w-full sm:w-auto">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/instructors">
                      <Button variant="outline" className="w-full sm:w-auto">
                        Meet the Instructors
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* ================= GUITAR ================= */}
            <TabsContent value="guitar">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="flex justify-center">
                  <img
                    src="https://preview-music-school-website-kzmntsu7nnz4q704nj2d.vusercontent.net/placeholder.svg?height=400&width=60"
                    alt="Guitar"
                    className="rounded-lg object-cover w-full max-w-md sm:max-w-lg"
                  />
                </div>

                <div className="flex flex-col justify-center space-y-6 font-inter">
                  <div>
                    <h2 className="text-3xl font-bold">Guitar</h2>
                    <p className="text-gray-500 md:text-xl mt-2 dark:text-gray-400">
                      Acoustic, electric, and bass guitar for all skill levels.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">Curriculum Highlights</h3>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Proper technique and posture",
                        "Chord progressions and scales",
                        "Music theory for guitarists",
                        "Rock, jazz, blues & classical styles",
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-[#EC622D] mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule */}
                  {/* <div>
                    <h3 className="text-xl font-bold">Lesson Schedule</h3>
                    <div className="grid gap-4 mt-2 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Beginner</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Mon, Wed: 4–7 PM</p>
                          <p className="text-sm">Sat: 11 AM–2 PM</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">
                            Intermediate/Advanced
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Tue, Thu: 5–8 PM</p>
                          <p className="text-sm">Sat: 3–6 PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div> */}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact">
                      <Button className="bg-[#EC622D] hover:bg-[#EC622D] w-full sm:w-auto">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/instructors">
                      <Button variant="outline" className="w-full sm:w-auto">
                        Meet the Instructors
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* ================= ELECTRONIC ================= */}
            <TabsContent value="electronic">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="flex justify-center">
                  <img
                    src="https://preview-music-school-website-kzmntsu7nnz4q704nj2d.vusercontent.net/placeholder.svg?height=400&width=60"
                    alt="Electronic Pads"
                    className="rounded-lg object-cover w-full max-w-md sm:max-w-lg"
                  />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold">Electronic Pads</h2>
                    <p className="text-gray-500 md:text-xl mt-2 dark:text-gray-400">
                      Learn digital instruments, beat-making, and modern music
                      production.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">Curriculum Highlights</h3>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Electronic pad techniques",
                        "Beat creation & rhythm",
                        "DAW basics",
                        "Electronic music production",
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-[#EC622D] mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule */}
                  {/* <div>
                    <h3 className="text-xl font-bold">Lesson Schedule</h3>
                    <div className="grid gap-4 mt-2 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Beginner</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Tue, Thu: 3–6 PM</p>
                          <p className="text-sm">Sun: 10 AM–1 PM</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">
                            Intermediate/Advanced
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Mon, Wed: 5–8 PM</p>
                          <p className="text-sm">Sun: 2–5 PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div> */}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact">
                      <Button className="bg-[#EC622D] hover:bg-[#EC622D] w-full sm:w-auto">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/instructors">
                      <Button variant="outline" className="w-full sm:w-auto">
                        Meet the Instructors
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* ================= VOCALS ================= */}
            <TabsContent value="vocals">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="flex justify-center">
                  <img
                    src="https://preview-music-school-website-kzmntsu7nnz4q704nj2d.vusercontent.net/placeholder.svg?height=400&width=60"
                    alt="Vocals"
                    className="rounded-lg object-cover w-full max-w-md sm:max-w-lg"
                  />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold">Vocals</h2>
                    <p className="text-gray-500 md:text-xl mt-2 dark:text-gray-400">
                      Develop singing technique, breath control, and performance
                      skills.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">Curriculum Highlights</h3>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Breathing & vocal techniques",
                        "Pitch training & ear development",
                        "Range expansion & vocal health",
                        "Performance & stage presence",
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-[#EC622D] mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule */}
                  {/* <div>
                    <h3 className="text-xl font-bold">Lesson Schedule</h3>
                    <div className="grid gap-4 mt-2 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Beginner</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Tue, Thu: 4–7 PM</p>
                          <p className="text-sm">Sat: 10 AM–1 PM</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">
                            Intermediate/Advanced
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Mon, Wed: 5–8 PM</p>
                          <p className="text-sm">Sat: 2–5 PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div> */}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact">
                      <Button className="bg-[#EC622D] hover:bg-[#EC622D] w-full sm:w-auto">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/instructors">
                      <Button variant="outline" className="w-full sm:w-auto">
                        Meet the Instructors
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
