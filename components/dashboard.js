import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Award, TrendingUp, Play, Calendar } from "lucide-react"

const recentCourses = [
  {
    id: 1,
    title: "React Fundamentals",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    thumbnail: "/placeholder.svg?height=120&width=200",
    instructor: "Sarah Johnson",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    thumbnail: "/placeholder.svg?height=120&width=200",
    instructor: "Mike Chen",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    progress: 90,
    totalLessons: 16,
    completedLessons: 14,
    thumbnail: "/placeholder.svg?height=120&width=200",
    instructor: "Emily Davis",
  },
]

const upcomingAssignments = [
  {
    id: 1,
    title: "React Component Assignment",
    course: "React Fundamentals",
    dueDate: "2024-01-20",
    status: "pending",
  },
  {
    id: 2,
    title: "JavaScript Quiz",
    course: "Advanced JavaScript",
    dueDate: "2024-01-22",
    status: "pending",
  },
]

export function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, Suraj!</h1>
              <p className="text-gray-600 dark:text-gray-300">Continue your learning journey</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Enrolled Courses</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
                    </div>
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Hours Learned</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">47</p>
                    </div>
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Certificates</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
                    </div>
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Avg. Progress</p>
                      <p className="text-3xl font-bold text-gray-900 dark:text-white">68%</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Continue Learning */}
              <div className="lg:col-span-2">
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 dark:text-white">
                      <Play className="w-5 h-5" />
                      <span>Continue Learning</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {recentCourses.map((course) => (
                        <div
                          key={course.id}
                          className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <img
                            src={course.thumbnail || "/placeholder.svg"}
                            alt={course.title}
                            className="w-20 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">by {course.instructor}</p>
                            <div className="mt-2">
                              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                                <span>
                                  {course.completedLessons}/{course.totalLessons} lessons
                                </span>
                                <span>{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                          </div>
                          <Button size="sm">Continue</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Assignments */}
              <div>
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 dark:text-white">
                      <Calendar className="w-5 h-5" />
                      <span>Upcoming</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAssignments.map((assignment) => (
                        <div
                          key={assignment.id}
                          className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                        >
                          <h4 className="font-medium text-gray-900 dark:text-white">{assignment.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{assignment.course}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Due: {assignment.dueDate}</span>
                            <span className="px-2 py-1 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                              Pending
                            </span>
                          </div>
                        </div>
                      ))}

                      <Button
                        variant="outline"
                        className="w-full bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        View All Assignments
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="mt-6 dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="dark:text-white">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Browse Courses
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Study Time
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        View Certificates
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
