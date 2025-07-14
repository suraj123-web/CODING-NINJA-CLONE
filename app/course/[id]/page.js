import { CourseDetail } from "@/components/course-detail"

export default function CourseDetailPage({ params }) {
  return <CourseDetail courseId={params.id} />
}
