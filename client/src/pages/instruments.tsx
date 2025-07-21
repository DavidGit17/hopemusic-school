import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"

export default function Instruments() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="w-full py-12 md:py-24 flex justify-center  lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Instruments</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our comprehensive music programs and find the perfect instrument to express yourself
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24  flex justify-center lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="keyboard" className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full">
              <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
              <TabsTrigger value="guitar">Guitar</TabsTrigger>
              <TabsTrigger value="electronic">Electronic Pads</TabsTrigger>
              <TabsTrigger value="vocals">Vocals</TabsTrigger>
            </TabsList>
            <TabsContent value="keyboard" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-center justify-center">
                  <img
                    src="https://preview-music-school-website-kzmntsu7nnz4q704nj2d.vusercontent.net/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Piano and Keyboard"
                    className="rounded-lg object-cover w-full max-w-md sm:max-w-lg"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Keyboard & Piano</h2>
                    <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                      Our keyboard and piano program offers comprehensive instruction for students of all ages and skill
                      levels.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Curriculum Highlights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Classical and contemporary techniques</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Music theory and sight reading</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Improvisation and composition</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Performance preparation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Lesson Schedule</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Beginner</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Mon, Wed: 3:00 PM - 6:00 PM</p>
                          <p className="text-sm">Sat: 10:00 AM - 1:00 PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Intermediate/Advanced</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Tue, Thu: 4:00 PM - 7:00 PM</p>
                          <p className="text-sm">Sat: 2:00 PM - 5:00 PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link to="/contact">
                      <Button className="bg-[#EC622D] hover:bg-[#EC622D]">Get Started</Button>
                    </Link>
                    <Link to="/instructors">
                      <Button variant="outline">Meet the Instructors</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="guitar" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Guitar"
                    className="rounded-lg object-cover w-full max-w-md sm:max-w-lg"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Guitar</h2>
                    <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                      Our guitar program covers acoustic, electric, and bass guitar for students of all skill levels.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Curriculum Highlights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Proper technique and posture</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Chord progressions and scales</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Music theory for guitarists</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Various styles: rock, jazz, blues, classical</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Lesson Schedule</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Beginner</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Mon, Wed: 4:00 PM - 7:00 PM</p>
                          <p className="text-sm">Sat: 11:00 AM - 2:00 PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Intermediate/Advanced</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Tue, Thu: 5:00 PM - 8:00 PM</p>
                          <p className="text-sm">Sat: 3:00 PM - 6:00 PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link to="/contact">
                      <Button className="bg-[#EC622D] hover:bg-[#EC622D]">Get Started</Button>
                    </Link>
                    <Link to="/instructors">
                      <Button variant="outline">Meet the Instructors</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="electronic" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Electronic Pads"
                    className="rounded-lg object-cover w-full max-w-md sm:max-w-lg"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Electronic Pads</h2>
                    <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                      Our electronic music program focuses on digital instruments, beat-making, and music production.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Curriculum Highlights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Electronic pad techniques</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Beat creation and rhythm</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Digital audio workstation basics</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Electronic music production</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Lesson Schedule</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Beginner</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Tue, Thu: 3:00 PM - 6:00 PM</p>
                          <p className="text-sm">Sun: 10:00 AM - 1:00 PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Intermediate/Advanced</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Mon, Wed: 5:00 PM - 8:00 PM</p>
                          <p className="text-sm">Sun: 2:00 PM - 5:00 PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link to="/contact">
                      <Button className="bg-[#EC622D] hover:bg-[#EC622D]">Get Started</Button>
                    </Link>
                    <Link to="/instructors">
                      <Button variant="outline">Meet the Instructors</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="vocals" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Vocals"
                    className="rounded-lg object-cover w-full max-w-md sm:max-w-lg"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Vocals</h2>
                    <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                      Our vocal program develops singing technique, breath control, and performance skills for all
                      musical styles.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Curriculum Highlights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Proper breathing and vocal techniques</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Pitch training and ear development</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Range expansion and vocal health</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-[#EC622D]" />
                        <span>Performance and stage presence</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Lesson Schedule</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Beginner</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Tue, Thu: 4:00 PM - 7:00 PM</p>
                          <p className="text-sm">Sat: 10:00 AM - 1:00 PM</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Intermediate/Advanced</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-sm">Mon, Wed: 5:00 PM - 8:00 PM</p>
                          <p className="text-sm">Sat: 2:00 PM - 5:00 PM</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link to="/contact">
                      <Button className="bg-[#EC622D] hover:bg-[#EC622D]">Get Started</Button>
                    </Link>
                    <Link to="/instructors">
                      <Button variant="outline">Meet the Instructors</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

