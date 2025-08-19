 import { FaUserGraduate, FaBook, FaCertificate, FaChalkboardTeacher } from "react-icons/fa";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Students", value: "1,245", icon: <FaUserGraduate /> },
    { title: "Active Courses", value: "56", icon: <FaBook /> },
    { title: "Certificates Issued", value: "324", icon: <FaCertificate /> },
    { title: "Teachers", value: "42", icon: <FaChalkboardTeacher /> },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500">Overview of platform statistics</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border rounded-2xl shadow-sm p-5 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100 text-gray-700 text-2xl">{s.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{s.title}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b pb-3"><span>New student registered</span><span className="px-2 py-0.5 text-green-700 bg-green-100 rounded-full">Completed</span></li>
            <li className="flex justify-between border-b pb-3"><span>Added course: UI Design</span><span className="px-2 py-0.5 text-blue-700 bg-blue-100 rounded-full">Live</span></li>
            <li className="flex justify-between"><span>Certificate batch exported</span><span className="px-2 py-0.5 text-amber-700 bg-amber-100 rounded-full">Queued</span></li>
          </ul>
        </div>
        <div className="bg-white border rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">System Notes</h2>
          <div className="space-y-3 text-gray-600 text-sm">
            <p>• Maintenance window on Aug 20, 10–12 PM.</p>
            <p>• New roles can be added from Settings → Roles.</p>
            <p>• Keep course covers under 1MB for faster loads.</p>
          </div>
        </div>
      </div>
    </div>)}