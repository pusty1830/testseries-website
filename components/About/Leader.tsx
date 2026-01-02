"use client";

import { Mail, MessageCircle, User } from "lucide-react";

/* ===== MOCK TEACHERS DATA ===== */
const teachers = [
  {
    id: "t1",
    name: "Ms. Sharma",
    subject: "Physics",
    email: "sharma@edu.com",
    phone: "+91 9876543210",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHf338YDMJyBF_wc1SwlEbWC7l5bQBSlRX5w&s" // Placeholder image
  },
  {
    id: "t2",
    name: "Mr. Gupta",
    subject: "Mathematics",
    email: "gupta@edu.com",
    phone: "+91 9123456780",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42O7-8dvq3G0wqNYM-oNyveKWO9KVcByj2w&s" // Placeholder image
  },
  {
    id: "t3",
    name: "Ms. Singh",
    subject: "Chemistry",
    email: "singh@edu.com",
    phone: "+91 9988776655",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapJERkiyJQyDWSVfOG4-2YKWzGpAxls_KCA&s" // Placeholder image
  },
];

export default function TeachersPage() {
  return (
    <div className="p-6 bg-gray-100 ">
      {/* Page Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Teachers</h1>
        <p className="text-gray-600">Connect with your course instructors</p>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-4">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-between hover:shadow-lg transition"
          >
            {/* Teacher Avatar and Info */}
            <div className="flex flex-col items-center gap-3 mb-5">
              <img
                src={teacher.avatar}
                alt={teacher.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <h2 className="text-xl font-semibold">{teacher.name}</h2>
              <p className="text-sm text-gray-500">{teacher.subject}</p>
            </div>

            {/* Contact Info */}
          

            {/* Action Buttons */}
            <div className="flex gap-3 w-full justify-center">
              <a
                href={`mailto:${teacher.email}`}
                className="flex-1 flex items-center justify-center gap-2 bg-[#00778B] text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                <Mail size={16} /> Email
              </a>
              <button className="flex-1 flex items-center justify-center gap-2 border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-gray-50">
                <MessageCircle size={16} /> Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
