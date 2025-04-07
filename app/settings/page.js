"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { useTheme } from "../context/ThemeContext";

const settingsSections = [
  {
    id: "appearance",
    title: "Appearance",
    description: "Customize your interface preferences.",
    options: [
      {
        id: "dark_mode",
        label: "Dark Mode",
        description: "Toggle between light and dark themes",
      },
    ],
  },
  {
    id: "profile",
    title: "Profile Settings",
    description: "Update your personal information and profile settings.",
    fields: [
      {
        id: "name",
        label: "Full Name",
        type: "text",
        placeholder: "John Doe",
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "john@example.com",
      },
      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "+1 (555) 000-0000",
      },
    ],
  },
  {
    id: "notifications",
    title: "Notification Preferences",
    description: "Manage how you receive notifications.",
    options: [
      {
        id: "email_notifications",
        label: "Email Notifications",
        description: "Receive notifications via email",
      },
      {
        id: "assignment_reminders",
        label: "Assignment Reminders",
        description: "Get reminded about upcoming assignments",
      },
      {
        id: "course_updates",
        label: "Course Updates",
        description: "Receive updates about your enrolled courses",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Settings",
    description: "Control your privacy and security preferences.",
    options: [
      {
        id: "profile_visibility",
        label: "Profile Visibility",
        description: "Make your profile visible to other students",
      },
      {
        id: "activity_status",
        label: "Activity Status",
        description: "Show when you're online",
      },
    ],
  },
];

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email_notifications: true,
    assignment_reminders: true,
    course_updates: false,
  });

  const [privacy, setPrivacy] = useState({
    profile_visibility: true,
    activity_status: true,
  });

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 000-0000",
  });

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleNotificationToggle = (setting) => {
    setNotifications((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handlePrivacyToggle = (setting) => {
    setPrivacy((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:pl-72">
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Settings
              </h1>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Manage your account settings and preferences.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {/* Appearance Settings */}
            <Card>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {settingsSections[0].title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {settingsSections[0].description}
                </p>
                <div className="mt-6">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="dark_mode"
                        name="dark_mode"
                        type="checkbox"
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                    </div>
                    <div className="ml-3">
                      <label
                        htmlFor="dark_mode"
                        className="text-sm font-medium text-gray-700 dark:text-gray-200"
                      >
                        Dark Mode
                      </label>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Toggle between light and dark themes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Profile Settings */}
            <Card>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {settingsSections[1].title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {settingsSections[1].description}
                </p>
                <div className="mt-6 space-y-6">
                  {settingsSections[1].fields.map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.id}
                        id={field.id}
                        className="input-primary mt-1 block w-full dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        placeholder={field.placeholder}
                        value={profile[field.id]}
                        onChange={(e) =>
                          handleProfileChange(field.id, e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Notification Settings */}
            <Card>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {settingsSections[2].title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {settingsSections[2].description}
                </p>
                <div className="mt-6 space-y-4">
                  {settingsSections[2].options.map((option) => (
                    <div key={option.id} className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id={option.id}
                          name={option.id}
                          type="checkbox"
                          checked={notifications[option.id]}
                          onChange={() => handleNotificationToggle(option.id)}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label
                          htmlFor={option.id}
                          className="text-sm font-medium text-gray-700 dark:text-gray-200"
                        >
                          {option.label}
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Privacy Settings */}
            <Card>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {settingsSections[3].title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {settingsSections[3].description}
                </p>
                <div className="mt-6 space-y-4">
                  {settingsSections[3].options.map((option) => (
                    <div key={option.id} className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id={option.id}
                          name={option.id}
                          type="checkbox"
                          checked={privacy[option.id]}
                          onChange={() => handlePrivacyToggle(option.id)}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label
                          htmlFor={option.id}
                          className="text-sm font-medium text-gray-700 dark:text-gray-200"
                        >
                          {option.label}
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="flex justify-end space-x-3">
              <button className="btn-secondary dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Cancel
              </button>
              <button className="btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
