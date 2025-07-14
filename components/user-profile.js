import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Calendar, MapPin, Award, BookOpen, Clock, TrendingUp, Edit } from "lucide-react"

const achievements = [
  { id: 1, title: "React Master", description: "Completed React Fundamentals", date: "2024-01-15", icon: "🏆" },
  { id: 2, title: "JavaScript Expert", description: "Mastered Advanced JavaScript", date: "2024-01-10", icon: "⭐" },
  { id: 3, title: "UI/UX Designer", description: "Completed Design Principles", date: "2024-01-05", icon: "🎨" },
]

const enrolledCourses = [
  {
    id: 1,
    title: "React Fundamentals",
    progress: 75,
    instructor: "Sarah Johnson",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    progress: 45,
    instructor: "Mike Chen",
    status: "In Progress",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    progress: 100,
    instructor: "Emily Davis",
    status: "Completed",
  },
]

export function UserProfile() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Profile</h1>
              <p className="text-gray-600 dark:text-gray-300">Manage your account and track your progress</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-1">
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">SP</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Suraj Pratap Singh</h2>
                      <p className="text-gray-600 dark:text-gray-300">Student</p>
                      <Badge className="mt-2">Premium Member</Badge>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-sm">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="dark:text-gray-300">suraj.singh@example.com</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="dark:text-gray-300">Joined January 2024</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="dark:text-gray-300">New York, USA</span>
                      </div>
                    </div>

                    <Button className="w-full mt-6">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>

                {/* Stats */}
                <Card className="mt-6 dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="dark:text-white">Learning Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          <span className="text-sm dark:text-gray-300">Courses</span>
                        </div>
                        <span className="font-semibold dark:text-white">12</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-600" />
                          <span className="text-sm dark:text-gray-300">Hours</span>
                        </div>
                        <span className="font-semibold dark:text-white">47</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm dark:text-gray-300">Certificates</span>
                        </div>
                        <span className="font-semibold dark:text-white">3</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-purple-600" />
                          <span className="text-sm dark:text-gray-300">Avg. Progress</span>
                        </div>
                        <span className="font-semibold dark:text-white">68%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="courses" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 dark:bg-gray-800">
                    <TabsTrigger
                      value="courses"
                      className="dark:text-gray-300 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                    >
                      My Courses
                    </TabsTrigger>
                    <TabsTrigger
                      value="settings"
                      className="dark:text-gray-300 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                    >
                      Settings
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="courses" className="mt-6">
                    <Card className="dark:bg-gray-800 dark:border-gray-700">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Enrolled Courses</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {enrolledCourses.map((course) => (
                            <div
                              key={course.id}
                              className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                                <Badge variant={course.status === "Completed" ? "default" : "secondary"}>
                                  {course.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">by {course.instructor}</p>
                              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="settings" className="mt-6">
                    <Card className="dark:bg-gray-800 dark:border-gray-700">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Account Settings</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="firstName" className="dark:text-gray-300">
                                First Name
                              </Label>
                              <Input
                                id="firstName"
                                defaultValue="Suraj"
                                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="lastName" className="dark:text-gray-300">
                                Last Name
                              </Label>
                              <Input
                                id="lastName"
                                defaultValue="Pratap Singh"
                                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="email" className="dark:text-gray-300">
                              Email
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              defaultValue="suraj.singh@example.com"
                              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                          </div>

                          <div>
                            <Label htmlFor="bio" className="dark:text-gray-300">
                              Bio
                            </Label>
                            <Textarea
                              id="bio"
                              placeholder="Tell us about yourself..."
                              defaultValue="Passionate learner interested in web development and design."
                              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                          </div>

                          <div>
                            <Label htmlFor="location" className="dark:text-gray-300">
                              Location
                            </Label>
                            <Input
                              id="location"
                              defaultValue="New York, USA"
                              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                          </div>

                          <Button type="submit">Save Changes</Button>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
