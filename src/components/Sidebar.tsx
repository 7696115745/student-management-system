import React, { useState } from "react";
import { FaHome, FaUserGraduate, FaBook, FaFileAlt, FaCog, FaChalkboardTeacher, FaClipboardList, FaBullhorn, FaEnvelope, FaBars, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router";


const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
const user=localStorage.getItem("user")?.valueOf()
  const AdminMenu = [
  { name: "Dashboard", icon: <FaHome />, path: "/" },
  { name: "Manage Students", icon: <FaUserGraduate />, path: "/manage-students" },
  { name: "Manage Teachers", icon: <FaChalkboardTeacher />, path: "/manage-teachers" },
  { name: "Courses", icon: <FaBook />, path: "/courses" },
  { name: "Attendance Reports", icon: <FaClipboardList />, path: "/attendance-reports" },
   { name: "Settings", icon: <FaCog />, path: "/settings" },
];

const TeacherMenu = [
  { name: "Dashboard", icon: <FaHome />, path: "/" },
  { name: "My Subjects", icon: <FaBook />, path: "/teacher-subjects" },
  { name: "Attendance", icon: <FaClipboardList />, path: "/teacher-attendance" },
  { name: "Marks Entry", icon: <FaFileAlt />, path: "/marks-entry" },
  { name: "Messages", icon: <FaEnvelope />, path: "/teacher-messages" },
  { name: "Settings", icon: <FaCog />, path: "/teacher-settings" },
];

const StudentMenu = [
  { name: "Dashboard", icon: <FaHome />, path: "/" },
  { name: "My Subjects", icon: <FaBook />, path: "/my-subjects" },
  { name: "Marks/Results", icon: <FaFileAlt />, path: "/exam/results" },
   { name: "Resources", icon: <FaBook />, path: "/resources" },
   { name: "Announcements", icon: <FaBullhorn />, path: "/announcements" },
];
  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gradient-to-b from-blue-700 to-blue-900 lg:h-screen h-min-screen text-white transition-all duration-300 flex flex-col`}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-blue-600">
        {isOpen && <h1 className="text-xl font-bold">{`${user} Dashboard`}</h1>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-lg"
        >
          <FaBars />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4">
        {(user==="Admin"?AdminMenu:user==="Teacher"?TeacherMenu:user==="Student"?StudentMenu:[]).map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="flex items-center gap-4 px-4 py-3 hover:bg-blue-600 transition-all duration-200"
          >
            <span className="text-lg">{item.icon}</span>
            {isOpen && <span className="text-sm">{item.name}</span>}
          </a>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-blue-600">
        <NavLink
          to="/sign-in"
          className="flex items-center gap-4 px-2 py-2 hover:bg-blue-600 transition-all duration-200"
        >
          <FaSignOutAlt className="text-lg" />
          {isOpen && <span className="text-sm">Logout</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
