 
const TeacherAttendanceReport = () => {
   const attendanceData = [
    { id: 1, name: "Rajesh Kumar", subject: "Mathematics", date: "2025-08-18", status: "Present" },
    { id: 2, name: "Neha Sharma", subject: "English", date: "2025-08-18", status: "Absent" },
    { id: 3, name: "Amit Verma", subject: "Physics", date: "2025-08-18", status: "Present" },
    { id: 4, name: "Priya Singh", subject: "Biology", date: "2025-08-18", status: "Leave" },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Teacher Attendance Report</h1>

       <div className="mb-6 flex flex-wrap gap-4">
        <input
          type="date"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Subjects</option>
          <option value="Maths">Mathematics</option>
          <option value="English">English</option>
          <option value="Physics">Physics</option>
          <option value="Biology">Biology</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Filter
        </button>
      </div>

       <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Teacher Name</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr
                key={record.id}
                className={`border-b hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-3">{record.id}</td>
                <td className="px-4 py-3">{record.name}</td>
                <td className="px-4 py-3">{record.subject}</td>
                <td className="px-4 py-3">{record.date}</td>
                <td
                  className={`px-4 py-3 font-semibold ${
                    record.status === "Present"
                      ? "text-green-600"
                      : record.status === "Absent"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherAttendanceReport;
