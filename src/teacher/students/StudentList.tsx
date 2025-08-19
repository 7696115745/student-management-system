  
const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    roll: "101",
    class: "10th A",
    email: "aarav@example.com",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Priya Verma",
    roll: "102",
    class: "10th A",
    email: "priya@example.com",
    phone: "9123456789",
  },
  {
    id: 3,
    name: "Rohit Singh",
    roll: "103",
    class: "10th A",
    email: "rohit@example.com",
    phone: "9988776655",
  },
];

export default function StudentList() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Student List
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Roll No</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Class</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="px-4 py-2">{student.roll}</td>
                  <td className="px-4 py-2 font-medium">{student.name}</td>
                  <td className="px-4 py-2">{student.class}</td>
                  <td className="px-4 py-2">{student.email}</td>
                  <td className="px-4 py-2">{student.phone}</td>
                  <td className="px-4 py-2 text-center">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
