import { FaUsers, FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";

export default function TeacherContent() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-6 shadow-md">
        <h1 className="text-2xl font-bold">Welcome back, Mr. Sharma 👋</h1>
        <p className="text-sm opacity-90">Here’s what’s happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Total Students */}
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <FaUsers className="text-blue-500 text-2xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Students</p>
              <h2 className="text-xl font-bold">120</h2>
            </div>
          </div>
        </div>

        {/* Total Classes */}
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-4 rounded-full">
              <FaChalkboardTeacher className="text-green-500 text-2xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Classes</p>
              <h2 className="text-xl font-bold">8</h2>
            </div>
          </div>
        </div>

        {/* Subjects Assigned */}
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-100 p-4 rounded-full">
              <FaBookOpen className="text-yellow-500 text-2xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Subjects Assigned</p>
              <h2 className="text-xl font-bold">3</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Classes */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Upcoming Classes</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2">Subject</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Time</th>
              <th className="pb-2">Classroom</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td>Mathematics</td>
              <td>Aug 14, 2025</td>
              <td>10:00 AM</td>
              <td>Room 101</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td>Physics</td>
              <td>Aug 14, 2025</td>
              <td>12:00 PM</td>
              <td>Lab 3</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="flex justify-between text-sm">
            <span>Graded Assignment: Algebra</span>
            <span className="text-gray-500">2 hrs ago</span>
          </li>
          <li className="flex justify-between text-sm">
            <span>Uploaded Notes: Newton’s Laws</span>
            <span className="text-gray-500">Yesterday</span>
          </li>
          <li className="flex justify-between text-sm">
            <span>Held Class: Quantum Physics</span>
            <span className="text-gray-500">2 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
