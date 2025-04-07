"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import {
  AcademicCapIcon,
  ClockIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    name: "Total Courses",
    value: "8",
    icon: AcademicCapIcon,
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Attendance Rate",
    value: "98.5%",
    icon: ClockIcon,
    change: "+1.25%",
    changeType: "positive",
  },
  {
    name: "Assignments Due",
    value: "3",
    icon: DocumentTextIcon,
    change: "-2",
    changeType: "negative",
  },
  {
    name: "Study Groups",
    value: "4",
    icon: UserGroupIcon,
    change: "+2",
    changeType: "positive",
  },
];

const upcomingAssignments = [
  {
    id: 1,
    title: "Mathematics Assignment",
    dueDate: "2024-04-10",
    course: "Advanced Mathematics",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Physics Lab Report",
    dueDate: "2024-04-12",
    course: "Physics 101",
    status: "Not Started",
  },
  {
    id: 3,
    title: "Literature Essay",
    dueDate: "2024-04-15",
    course: "World Literature",
    status: "In Progress",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Dashboard
            </h1>

            {/* Stats */}
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.name} className="px-4 py-5">
                  <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <stat.icon className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2" />
                      {stat.name}
                    </div>
                  </dt>
                  <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-primary-600 dark:text-primary-400">
                      {stat.value}
                    </div>
                    {stat.change && (
                      <div
                        className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 ${
                          stat.changeType === "positive"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {stat.change}
                      </div>
                    )}
                  </dd>
                </Card>
              ))}
            </dl>

            {/* Upcoming Assignments */}
            <div className="mt-8">
              <Card title="Upcoming Assignments">
                <div className="mt-4">
                  <div className="flow-root">
                    <ul
                      role="list"
                      className="-my-5 divide-y divide-gray-200 dark:divide-gray-700"
                    >
                      {upcomingAssignments.map((assignment) => (
                        <li key={assignment.id} className="py-5">
                          <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                {assignment.title}
                              </p>
                              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                {assignment.course}
                              </p>
                            </div>
                            <div className="flex flex-col items-end">
                              <p className="text-sm text-gray-900 dark:text-white">
                                Due: {assignment.dueDate}
                              </p>
                              <p
                                className={`mt-1 text-xs ${
                                  assignment.status === "In Progress"
                                    ? "text-yellow-600 dark:text-yellow-400"
                                    : "text-red-600 dark:text-red-400"
                                }`}
                              >
                                {assignment.status}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-700 dark:hover:bg-primary-600"
                    >
                      View all assignments
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
