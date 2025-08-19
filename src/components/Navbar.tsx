import { FaBell, FaSearch } from "react-icons/fa";
import AdminContent from "./AdminContent";
import TeacherContent from "./TeacherContent";
import StudentContent from "./StudentContent";

export default function Navbar() {
  const user = localStorage.getItem("user")?.valueOf()
   return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow flex items-center justify-between px-6 py-3">
        {/* Left - Search */}
        <div className="flex items-center gap-3 w-full max-w-md bg-gray-100 px-3 py-2 rounded-lg">
          <FaSearch className="text-gray-500" />
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full"
          />
        </div>

        {/* Right - Notifications & Profile */}
        <div className="flex items-center gap-6">
          <button className="relative">
            <FaBell className="text-gray-600 text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="hidden md:block font-semibold">{""}</span>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 p-6 overflow-auto">
        {
          user === "Admin" ? (<AdminContent />) : user === "Teacher" ? (<TeacherContent />) : <StudentContent />
        }
      </main>
    </div>
  );
}
