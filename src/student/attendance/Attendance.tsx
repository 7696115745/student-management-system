import React from "react";

export default function StudentAttendance() {
  const rows = [
    { date: "Aug 01, 2025", status: "Present" },
    { date: "Aug 02, 2025", status: "Absent" },
    { date: "Aug 03, 2025", status: "Present" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Attendance</h1>
      <div className="bg-white border rounded-2xl shadow-sm p-6 overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-3 pr-4">Date</th>
              <th className="py-3 pr-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-3 pr-4 font-medium">{r.date}</td>
                <td className="py-3 pr-4"><span className={`px-2 py-0.5 rounded-full text-xs ${r.status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-rose-100 text-rose-700'}`}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}