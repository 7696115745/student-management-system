import React from "react";

const AdminContent: React.FC = () => {
  const stats = [
    { title: "Total Students", value: "1,245", color: "bg-blue-500" },
    { title: "Total Teachers", value: "220", color: "bg-pink-500" },
    { title: "Courses", value: "32", color: "bg-green-500" },
    { title: "Certificates Issued", value: "540", color: "bg-purple-500" },
    { title: "Pending Approvals", value: "8", color: "bg-red-500" },
  ];

  const recentStudents = [
    { name: "Rahul Sharma", course: "B.Sc. IT", date: "2025-08-10" },
    { name: "Priya Mehta", course: "B.A. English", date: "2025-08-09" },
    { name: "Amit Kumar", course: "B.Com", date: "2025-08-08" },
  ];

  const announcements = [
    "Orientation program for new batch starts 20th Aug.",
    "Exam schedule will be released on 25th Aug.",
    "Library will remain closed on 15th Aug for maintenance.",
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} text-white p-6 rounded-lg shadow-md`}
          >
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Registrations */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Recent Registrations</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Course</th>
              <th className="p-3 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentStudents.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border-b">{student.name}</td>
                <td className="p-3 border-b">{student.course}</td>
                <td className="p-3 border-b">{student.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
    </div>
  );
};

export default AdminContent;
