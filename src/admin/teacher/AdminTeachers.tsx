  export default function AdminTeachers() {
  const rows = [
    { name: "Rahul Sharma", email: "rahul@college.edu", course: "B.Sc. IT", status: "Active" },
    { name: "Priya Mehta", email: "priya@college.edu", course: "B.A. English", status: "Active" },
    { name: "Amit Kumar", email: "amit@college.edu", course: "B.Com", status: "Pending" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Students</h1>
      <div className="bg-white border rounded-2xl shadow-sm p-6 overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-3 pr-4">Name</th>
              <th className="py-3 pr-4">Email</th>
              <th className="py-3 pr-4">Course</th>
              <th className="py-3 pr-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-3 pr-4 font-medium">{r.name}</td>
                <td className="py-3 pr-4">{r.email}</td>
                <td className="py-3 pr-4">{r.course}</td>
                <td className="py-3 pr-4"><span className={`px-2 py-0.5 rounded-full text-xs ${r.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}