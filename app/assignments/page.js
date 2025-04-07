"use client";

import { useState } from "react";
import Card from "@/components/Card";
import {
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const assignments = [
  {
    id: 1,
    title: "Calculus Assignment 3",
    course: "Advanced Mathematics",
    dueDate: "2024-04-15",
    status: "In Progress",
    progress: 65,
    description: "Complete problems 1-10 from Chapter 4 on Integration.",
  },
  {
    id: 2,
    title: "Physics Lab Report",
    course: "Physics 101",
    dueDate: "2024-04-12",
    status: "Not Started",
    progress: 0,
    description: "Write a detailed report on the pendulum experiment.",
  },
  {
    id: 3,
    title: "Literature Essay",
    course: "World Literature",
    dueDate: "2024-04-20",
    status: "Completed",
    progress: 100,
    description:
      "Write a 2000-word essay on the themes in Shakespeare's Macbeth.",
  },
  {
    id: 4,
    title: "Programming Project",
    course: "Computer Science",
    dueDate: "2024-04-18",
    status: "In Progress",
    progress: 80,
    description: "Implement a basic web application using React and Node.js.",
  },
];

const filters = [
  { name: "All", value: "all" },
  { name: "In Progress", value: "in-progress" },
  { name: "Not Started", value: "not-started" },
  { name: "Completed", value: "completed" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "text-green-700 bg-green-50";
    case "In Progress":
      return "text-yellow-700 bg-yellow-50";
    case "Not Started":
      return "text-red-700 bg-red-50";
    default:
      return "text-gray-700 bg-gray-50";
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "Completed":
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    case "In Progress":
      return <ClockIcon className="h-5 w-5 text-yellow-500" />;
    case "Not Started":
      return <ExclamationCircleIcon className="h-5 w-5 text-red-500" />;
    default:
      return null;
  }
};

export default function AssignmentsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredAssignments = assignments.filter((assignment) => {
    if (activeFilter === "all") return true;
    return assignment.status.toLowerCase().replace(" ", "-") === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:pl-72">
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Assignments
              </h1>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Track and manage your course assignments.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button className="btn-primary">Create Assignment</button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-4">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <div className="flex space-x-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setActiveFilter(filter.value)}
                      className={`px-3 py-1 rounded-md text-sm font-medium ${
                        activeFilter === filter.value
                          ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-100"
                          : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Assignments Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAssignments.map((assignment) => (
              <Card key={assignment.id} className="overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {assignment.title}
                    </h3>
                    {getStatusIcon(assignment.status)}
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {assignment.course}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    {assignment.description}
                  </p>

                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        Progress
                      </span>
                      <span className="text-sm font-medium text-primary-600">
                        {assignment.progress}%
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-primary-600"
                          style={{ width: `${assignment.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        Due: {assignment.dueDate}
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                        assignment.status
                      )}`}
                    >
                      {assignment.status}
                    </span>
                  </div>

                  <div className="mt-6">
                    <button className="w-full btn-secondary">
                      View Details
                    </button>
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
