 
export default function StudentMarks() {
  const rows = [
    { subject: "Mathematics", marks: "88/100", grade: "A" },
    { subject: "Science", marks: "92/100", grade: "A+" },
    { subject: "English", marks: "81/100", grade: "B+" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Marks / Results</h1>
      <div className="bg-white border rounded-2xl shadow-sm p-6 overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-3 pr-4">Subject</th>
              <th className="py-3 pr-4">Marks</th>
              <th className="py-3 pr-4">Grade</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-3 pr-4 font-medium">{r.subject}</td>
                <td className="py-3 pr-4">{r.marks}</td>
                <td className="py-3 pr-4">{r.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}