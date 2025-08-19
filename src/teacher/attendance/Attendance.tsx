export const TeacherAttendancePage = () => {
  const attendanceRecords = [
    { date: 'Aug 1, 2025', status: 'Present' },
    { date: 'Aug 2, 2025', status: 'Absent' },
    { date: 'Aug 3, 2025', status: 'Present' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Attendance</h1>
      <table className="min-w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="bg-blue-100">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{record.date}</td>
              <td className={`px-4 py-2 ${record.status === 'Present' ? 'text-green-600' : 'text-red-600'}`}>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
