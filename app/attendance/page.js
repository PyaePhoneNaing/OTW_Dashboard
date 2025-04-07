"use client";

import Card from "@/components/Card";
import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const attendanceData = [
  {
    id: 1,
    course: "Advanced Mathematics",
    totalClasses: 45,
    attended: 42,
    percentage: 93.33,
    status: "Excellent",
    lastAttendance: "2024-04-05",
  },
  {
    id: 2,
    course: "Physics 101",
    totalClasses: 38,
    attended: 32,
    percentage: 84.21,
    status: "Good",
    lastAttendance: "2024-04-06",
  },
  {
    id: 3,
    course: "World Literature",
    totalClasses: 30,
    attended: 23,
    percentage: 76.67,
    status: "Warning",
    lastAttendance: "2024-04-04",
  },
  {
    id: 4,
    course: "Computer Science",
    totalClasses: 40,
    attended: 38,
    percentage: 95.0,
    status: "Excellent",
    lastAttendance: "2024-04-06",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Excellent":
      return "text-green-700 bg-green-50";
    case "Good":
      return "text-blue-700 bg-blue-50";
    case "Warning":
      return "text-yellow-700 bg-yellow-50";
    default:
      return "text-gray-700 bg-gray-50";
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "Excellent":
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    case "Good":
      return <CheckCircleIcon className="h-5 w-5 text-blue-500" />;
    case "Warning":
      return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
    default:
      return <XCircleIcon className="h-5 w-5 text-red-500" />;
  }
};

export default function AttendancePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:pl-72">
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Attendance
              </h1>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Track your attendance and performance across all courses.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0">
              <button className="btn-secondary">Download Report</button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attendanceData.map((record) => (
              <Card key={record.id}>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {record.course}
                  </h3>
                  <dl className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Total Classes
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {record.totalClasses}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Classes Attended
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {record.attended}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Attendance Rate
                      </span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {record.percentage}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-primary-600"
                        style={{ width: `${record.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Last attended: {record.lastAttendance}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
