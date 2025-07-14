"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, Star, CheckCircle, Circle, Download, MessageSquare, BookOpen } from "lucide-react"

const courseData = {
  id: 1,
  title: "Complete React Developer Course",
  instructor: "Sarah Johnson",
  description:
    "Master React from basics to advanced concepts including hooks, context, and testing. This comprehensive course will take you from beginner to advanced React developer.",
  thumbnail: "/placeholder.svg?height=300&width=500",
  duration: "40 hours",
  students: 1250,
  rating: 4.8,
  price: "$89",
  level: "Intermediate",
  category: "Web Development",
  enrolled: true,
  progress: 65,
  completedLessons: 18,
  totalLessons: 28,
}

const modules = [
  {
    id: 1,
    title: "Getting Started with React",
    lessons: [
      { id: 1, title: "Introduction to React", duration: "12:30", completed: true },
      { id: 2, title: "Setting up Development Environment", duration: "15:45", completed: true },
      { id: 3, title: "Your First React Component", duration: "18:20", completed: true },
      { id: 4, title: "JSX Fundamentals", duration: "22:10", completed: true },
    ],
  },
  {
    id: 2,
    title: "React Components and Props",
    lessons: [
      { id: 5, title: "Understanding Components", duration: "16:30", completed: true },
      { id: 6, title: "Props and Data Flow", duration: "19:45", completed: true },
      { id: 7, title: "Component Composition", duration: "21:20", completed: false },
      { id: 8, title: "Conditional Rendering", duration: "14:10", completed: false },
    ],
  },
  {
    id: 3,
    title: "State Management and Hooks",
    lessons: [
      { id: 9, title: "useState Hook", duration: "25:30", completed: false },
      { id: 10, title: "useEffect Hook", duration: "28:45", completed: false },
      { id: 11, title: "Custom Hooks", duration: "32:20", completed: false },
      { id: 12, title: "Context API", duration: "35:10", completed: false },
    ],
  },
]

interface CourseDetailProps {
  courseId: string
}

export function CourseDetail({ courseId }: CourseDetailProps) {
  const [activeLesson, setActiveLesson] = useState(7)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-6">
            {/* Course Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Badge className="mb-3">{courseData.category}</Badge>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{courseData.title}</h1>
                  <p className="text-gray-600 mb-4">by {courseData.instructor}</p>
                  <p className="text-gray-700 mb-6">{courseData.description}</p>

                  <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{courseData.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{courseData.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{courseData.rating}</span>
                    </div>
                    <Badge variant="outline">{courseData.level}</Badge>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Course Progress</span>
                      <span>{courseData.progress}% Complete</span>
                    </div>
                    <Progress value={courseData.progress} className="h-2" />
                    <p className="text-sm text-gray-500 mt-1">
                      {courseData.completedLessons} of {courseData.totalLessons} lessons completed
                    </p>
                  </div>
                </div>

                <div>
                  <img
                    src={courseData.thumbnail || "/placeholder.svg"}
                    alt={courseData.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Button className="w-full mb-3">
                    <Play className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resources
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Course Modules */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {modules.map((module) => (
                        <div key={module.id} className="border border-gray-200 rounded-lg">
                          <div className="p-4 bg-gray-50 border-b border-gray-200">
                            <h3 className="font-semibold text-gray-900">{module.title}</h3>
                          </div>
                          <div className="divide-y divide-gray-200">
                            {module.lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className={`p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer ${
                                  activeLesson === lesson.id ? "bg-blue-50 border-l-4 border-blue-500" : ""
                                }`}
                                onClick={() => setActiveLesson(lesson.id)}
                              >
                                <div className="flex items-center space-x-3">
                                  {lesson.completed ? (
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                  ) : (
                                    <Circle className="w-5 h-5 text-gray-400" />
                                  )}
                                  <div>
                                    <p className="font-medium text-gray-900">{lesson.title}</p>
                                    <p className="text-sm text-gray-500">{lesson.duration}</p>
                                  </div>
                                </div>
                                <Button size="sm" variant="ghost">
                                  <Play className="w-4 h-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Instructor */}
                <Card>
                  <CardHeader>
                    <CardTitle>Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">SJ</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{courseData.instructor}</p>
                        <p className="text-sm text-gray-600">Senior React Developer</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Sarah is a senior developer with 8+ years of experience in React and modern web development.
                    </p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message Instructor
                    </Button>
                  </CardContent>
                </Card>

                {/* Course Resources */}
                <Card>
                  <CardHeader>
                    <CardTitle>Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Course Notes
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <Download className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Discussion Forum
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Completed</span>
                        <span className="text-sm font-semibold">
                          {courseData.completedLessons}/{courseData.totalLessons}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Time Spent</span>
                        <span className="text-sm font-semibold">12.5 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Certificates</span>
                        <span className="text-sm font-semibold">0/1</span>
                      </div>
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
