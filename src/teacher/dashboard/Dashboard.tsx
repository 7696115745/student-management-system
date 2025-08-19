 import { FaUsers, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";

export default function TeacherDashboard() {
  const stats = [
    { title: "Total Students", value: "120", icon: <FaUsers /> },
    { title: "Subjects Assigned", value: "3", icon: <FaBookOpen /> },
    { title: "Classes Today", value: "2", icon: <FaChalkboardTeacher /> },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl p-6">
        <h1 className="text-2xl font-bold">Welcome back, Mr. Sharma</h1>
        <p className="opacity-90">Here’s what’s on your schedule.</p>
      </div>

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
        <h2 className="text-lg font-semibold mb-4">Upcoming Classes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="py-2 pr-4">Subject</th>
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Time</th>
                <th className="py-2 pr-4">Room</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 pr-4">Mathematics</td>
                <td className="py-2 pr-4">Aug 14, 2025</td>
                <td className="py-2 pr-4">10:00 AM</td>
                <td className="py-2 pr-4">101</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4">Physics</td>
                <td className="py-2 pr-4">Aug 14, 2025</td>
                <td className="py-2 pr-4">12:00 PM</td>
                <td className="py-2 pr-4">Lab 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
