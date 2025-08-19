 
export default function StudentSubjects() {
  const rows = [
    { name: "Mathematics", teacher: "Amit Verma", email: "amit.verma@school.com", phone: "+91 98765 43210" },
    { name: "Science", teacher: "Priya Sharma", email: "priya.sharma@school.com", phone: "+91 98765 43211" },
    { name: "English", teacher: "Vikram Singh", email: "vikram.singh@school.com", phone: "+91 98765 43212" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Subjects</h1>
      <div className="bg-white border rounded-2xl shadow-sm p-6 overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-3 pr-4">Subject</th>
              <th className="py-3 pr-4">Teacher</th>
              <th className="py-3 pr-4">Email</th>
              <th className="py-3 pr-4">Phone</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-3 pr-4 font-medium">{r.name}</td>
                <td className="py-3 pr-4">{r.teacher}</td>
                <td className="py-3 pr-4">{r.email}</td>
                <td className="py-3 pr-4">{r.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}