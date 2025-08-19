 import { FaBookOpen, FaFileAlt, FaClipboardList } from "react-icons/fa";

export default function StudentDashboard() {
  const stats = [
    { title: "Enrolled Subjects", value: "6", icon: <FaBookOpen /> },
    { title: "Marks Avg.", value: "87%", icon: <FaFileAlt /> },
    { title: "Attendance", value: "93%", icon: <FaClipboardList /> },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border rounded-2xl shadow-sm p-6 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100 text-gray-700 text-2xl">{s.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{s.title}</p>
              <p className="text-xl font-bold">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Today</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Mathematics – 10:00 AM, Room 101</li>
          <li>• English – 12:00 PM, Room 204</li>
        </ul>
      </div>
    </div>
  );
}