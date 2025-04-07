"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import {
  PaperAirplaneIcon,
  ArrowLeftIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const contacts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Mathematics Professor",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    online: true,
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Physics Professor",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    online: false,
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    role: "Literature Professor",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    online: true,
  },
];

const messages = [
  {
    id: 1,
    content: "Hello! Do you have any questions about the upcoming assignment?",
    sender: "Dr. Sarah Johnson",
    timestamp: "10:30 AM",
    type: "received",
  },
  {
    id: 2,
    content:
      "Yes, I was wondering about the deadline for the calculus project.",
    sender: "You",
    timestamp: "10:32 AM",
    type: "sent",
  },
  {
    id: 3,
    content:
      "The deadline is next Friday at 11:59 PM. Make sure to include all the required sections.",
    sender: "Dr. Sarah Johnson",
    timestamp: "10:35 AM",
    type: "received",
  },
];

export default function MessagesPage() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Add message sending logic here
    setNewMessage("");
  };

  // Effect to update isMobileView on window resize
  useEffect(() => {
    // Set initial value
    setIsMobileView(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to go back to contacts list in mobile view
  const handleBackToContacts = () => {
    setSelectedContact(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:pl-72">
      <main className="py-4 md:py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Hide heading on mobile when in chat view */}
          {(!isMobileView || !selectedContact) && (
            <div className="sm:flex sm:items-center mb-4">
              <div className="sm:flex-auto">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Messages
                </h1>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  Chat with your professors and classmates.
                </p>
              </div>
            </div>
          )}

          <Card className="overflow-hidden md:mt-8">
            <div className="flex h-[calc(100vh-120px)] md:h-[600px]">
              {/* Contacts sidebar - hidden on mobile when chat is open */}
              <div
                className={`${
                  isMobileView && selectedContact ? "hidden" : "block"
                } w-full md:w-72 border-r border-gray-200 dark:border-gray-700`}
              >
                <div className="p-4 sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10">
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="input-primary w-full rounded-full bg-gray-100 dark:bg-gray-700 px-4 py-2 text-sm"
                  />
                </div>
                <div className="overflow-y-auto h-[calc(100%-4rem)]">
                  {contacts.map((contact) => (
                    <button
                      key={contact.id}
                      onClick={() => setSelectedContact(contact)}
                      className="w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-700 flex items-center"
                    >
                      <div className="relative">
                        <img
                          src={contact.avatar}
                          alt={contact.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        {contact.online && (
                          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white dark:ring-gray-800" />
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between items-baseline">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {contact.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            10:42 AM
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {contact.role}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat area - full screen on mobile when chat is open */}
              <div
                className={`${
                  isMobileView && !selectedContact ? "hidden" : "flex"
                } flex-1 flex-col`}
              >
                {selectedContact ? (
                  <>
                    {/* Chat header */}
                    <div className="border-b border-gray-200 dark:border-gray-700 p-3 flex items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
                      {isMobileView && (
                        <button
                          onClick={handleBackToContacts}
                          className="mr-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <ArrowLeftIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </button>
                      )}
                      <div className="relative">
                        <img
                          src={selectedContact.avatar}
                          alt={selectedContact.name}
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        {selectedContact.online && (
                          <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white dark:ring-gray-800" />
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {selectedContact.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {selectedContact.online ? "Online" : "Offline"}
                        </p>
                      </div>
                      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.type === "sent"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          {message.type === "received" && (
                            <img
                              src={selectedContact.avatar}
                              alt={selectedContact.name}
                              className="h-8 w-8 rounded-full mr-2 self-end mb-1 hidden sm:block"
                            />
                          )}
                          <div
                            className={`rounded-lg px-4 py-2 max-w-[75%] ${
                              message.type === "sent"
                                ? "bg-primary-600 text-white rounded-br-none"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p
                              className={`text-xs mt-1 ${
                                message.type === "sent"
                                  ? "text-primary-100"
                                  : "text-gray-500 dark:text-gray-400"
                              }`}
                            >
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message input */}
                    <div className="border-t border-gray-200 dark:border-gray-700 p-3">
                      <div className="flex space-x-2 items-center">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Message..."
                          className="input-primary flex-1 rounded-full bg-gray-100 dark:bg-gray-700 px-4 py-2 text-sm"
                        />
                        <button
                          onClick={handleSendMessage}
                          className="p-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white"
                        >
                          <PaperAirplaneIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-1 items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      Select a contact to start messaging
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
