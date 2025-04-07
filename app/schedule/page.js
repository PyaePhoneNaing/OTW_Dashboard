"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeSlots = Array.from({ length: 11 }, (_, i) => i + 8); // 8 AM to 6 PM

const schedule = [
  {
    id: 1,
    title: "Advanced Mathematics",
    day: "Monday",
    startTime: 9,
    duration: 2,
    room: "Room 101",
    type: "Lecture",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Physics Lab",
    day: "Monday",
    startTime: 14,
    duration: 3,
    room: "Lab 3",
    type: "Laboratory",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    title: "World Literature",
    day: "Tuesday",
    startTime: 11,
    duration: 1.5,
    room: "Room 205",
    type: "Seminar",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 4,
    title: "Computer Science",
    day: "Thursday",
    startTime: 13,
    duration: 2,
    room: "Lab 1",
    type: "Practical",
    color: "bg-yellow-100 text-yellow-700",
  },
];

export default function SchedulePage() {
  const [currentWeek, setCurrentWeek] = useState("Week 1");
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:pl-72">
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Class Schedule
              </h1>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Your weekly class schedule and upcoming sessions.
              </p>
            </div>
          </div>

          <Card className="mt-8">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-4 py-3 sm:px-6">
              <div className="flex items-center space-x-4">
                <button className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <ChevronLeftIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </button>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {currentWeek}
                </span>
                <button className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <ChevronRightIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </button>
              </div>
              <button className="btn-primary">Add Class</button>
            </div>

            {/* Mobile Day Selector */}
            <div className="lg:hidden border-b border-gray-200 dark:border-gray-700">
              <div className="flex overflow-x-auto py-2 px-4">
                {weekDays.map((day) => (
                  <button
                    key={day}
                    className={`px-4 py-2 text-sm font-medium rounded-md mr-2 flex-shrink-0 ${
                      selectedDay === day
                        ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile View: Single Day */}
            <div className="lg:hidden relative">
              <div className="flex">
                {/* Time column */}
                <div className="flex-none w-16 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
                  <div className="h-16 flex items-center justify-center text-xs font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                    Time
                  </div>
                  {timeSlots.map((time) => (
                    <div
                      key={time}
                      className="h-16 flex items-center justify-end pr-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700"
                    >
                      {time}:00
                    </div>
                  ))}
                </div>

                {/* Selected Day Column */}
                <div className="flex-1">
                  <div className="h-16 flex items-center justify-center text-xs font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
                    {selectedDay}
                  </div>
                  <div className="relative">
                    {timeSlots.map((time) => (
                      <div
                        key={time}
                        className="h-16 border-b border-gray-200 dark:border-gray-700"
                      ></div>
                    ))}
                    {schedule
                      .filter((item) => item.day === selectedDay)
                      .map((class_) => (
                        <div
                          key={class_.id}
                          className={`absolute left-0 right-0 mx-1 rounded-lg p-2 ${class_.color} dark:bg-opacity-90`}
                          style={{
                            top: `${(class_.startTime - 8) * 4 + 4}rem`,
                            height: `${class_.duration * 4}rem`,
                          }}
                        >
                          <p className="font-medium text-xs">{class_.title}</p>
                          <p className="text-xs">{class_.room}</p>
                          <p className="text-xs">{class_.type}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop View: Full Week */}
            <div className="hidden lg:block relative overflow-x-auto">
              <div className="flex min-w-[800px]">
                {/* Time column */}
                <div className="flex-none w-20 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
                  <div className="h-12 border-b border-gray-200 dark:border-gray-700"></div>
                  {timeSlots.map((time) => (
                    <div
                      key={time}
                      className="h-16 flex items-center justify-end pr-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      {time}:00
                    </div>
                  ))}
                </div>

                {/* Days columns */}
                <div className="flex-1">
                  <div className="grid grid-cols-5 border-b border-gray-200 dark:border-gray-700">
                    {weekDays.map((day) => (
                      <div
                        key={day}
                        className="h-12 flex items-center justify-center text-sm font-medium text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700 last:border-r-0"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="relative grid grid-cols-5">
                    {weekDays.map((day) => (
                      <div
                        key={day}
                        className="relative border-r border-gray-200 dark:border-gray-700 last:border-r-0"
                      >
                        {timeSlots.map((time) => (
                          <div
                            key={time}
                            className="h-16 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                          ></div>
                        ))}
                        {schedule
                          .filter((item) => item.day === day)
                          .map((class_) => (
                            <div
                              key={class_.id}
                              className={`absolute left-0 right-0 mx-1 rounded-lg p-2 ${class_.color} dark:bg-opacity-90`}
                              style={{
                                top: `${(class_.startTime - 8) * 4}rem`,
                                height: `${class_.duration * 4}rem`,
                              }}
                            >
                              <p className="font-medium text-sm">
                                {class_.title}
                              </p>
                              <p className="text-xs">{class_.room}</p>
                              <p className="text-xs">{class_.type}</p>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
