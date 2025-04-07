"use client";

import Card from "@/components/Card";
import {
  BookOpenIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const courses = [
  {
    id: 1,
    title: "Advanced Mathematics",
    description: "Complex analysis, differential equations, and linear algebra",
    instructor: "Dr. Sarah Johnson",
    duration: "16 weeks",
    students: 45,
    progress: 75,
  },
  {
    id: 2,
    title: "Physics 101",
    description: "Introduction to mechanics, thermodynamics, and waves",
    instructor: "Prof. Michael Chen",
    duration: "14 weeks",
    students: 60,
    progress: 60,
  },
  {
    id: 3,
    title: "World Literature",
    description:
      "Exploring classic and contemporary literature from around the world",
    instructor: "Dr. Emily Williams",
    duration: "12 weeks",
    students: 35,
    progress: 40,
  },
  {
    id: 4,
    title: "Computer Science Fundamentals",
    description: "Programming basics, algorithms, and data structures",
    instructor: "Prof. James Wilson",
    duration: "15 weeks",
    students: 55,
    progress: 80,
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:pl-72">
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Courses
              </h1>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Browse through your enrolled courses and track your progress.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0">
              <button className="btn-primary">Browse All Courses</button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {course.description}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Progress:
                      </span>
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-primary-600"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <dl className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Instructor
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {course.instructor}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Duration
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {course.duration}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
