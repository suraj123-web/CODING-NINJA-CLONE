import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, Star, Filter } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Complete React Developer Course",
    instructor: "Sarah Johnson",
    description: "Master React from basics to advanced concepts including hooks, context, and testing.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "40 hours",
    students: 1250,
    rating: 4.8,
    price: "$89",
    level: "Intermediate",
    category: "Web Development",
    enrolled: true,
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    instructor: "Mike Chen",
    description: "Deep dive into JavaScript ES6+, async programming, and modern development patterns.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "35 hours",
    students: 890,
    rating: 4.7,
    price: "$79",
    level: "Advanced",
    category: "Programming",
    enrolled: true,
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    instructor: "Emily Davis",
    description: "Learn design principles, user research, prototyping, and modern design tools.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "25 hours",
    students: 2100,
    rating: 4.9,
    price: "$69",
    level: "Beginner",
    category: "Design",
    enrolled: false,
  },
  {
    id: 4,
    title: "Node.js Backend Development",
    instructor: "Alex Rodriguez",
    description: "Build scalable backend applications with Node.js, Express, and MongoDB.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "45 hours",
    students: 756,
    rating: 4.6,
    price: "$99",
    level: "Intermediate",
    category: "Backend",
    enrolled: false,
  },
  {
    id: 5,
    title: "Python for Data Science",
    instructor: "Dr. Lisa Wang",
    description: "Learn Python programming for data analysis, visualization, and machine learning.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "50 hours",
    students: 1800,
    rating: 4.8,
    price: "$109",
    level: "Beginner",
    category: "Data Science",
    enrolled: false,
  },
  {
    id: 6,
    title: "Mobile App Development with React Native",
    instructor: "James Wilson",
    description: "Create cross-platform mobile apps using React Native and modern development tools.",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "38 hours",
    students: 920,
    rating: 4.7,
    price: "$94",
    level: "Intermediate",
    category: "Mobile Development",
    enrolled: false,
  },
]

export function CourseCatalog() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Course Catalog</h1>
              <p className="text-gray-600 dark:text-gray-300">Discover and enroll in new courses</p>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-8 border dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search courses..."
                    className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="data">Data Science</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <Filter className="w-4 h-4" />
                  <span>More Filters</span>
                </Button>
              </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="relative">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    {course.enrolled && <Badge className="absolute top-3 right-3 bg-green-600">Enrolled</Badge>}
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="mb-2 dark:bg-gray-700 dark:text-gray-300">
                        {course.category}
                      </Badge>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{course.price}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight dark:text-white">{course.title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-300">by {course.instructor}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{course.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                        {course.level}
                      </Badge>
                      <Button size="sm" variant={course.enrolled ? "outline" : "default"}>
                        {course.enrolled ? "Continue" : "Enroll Now"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
