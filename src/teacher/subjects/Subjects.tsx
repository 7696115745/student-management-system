 import { useNavigate } from "react-router";
export default function TeacherSubjects() {
  const navigate=useNavigate()
  const list = [
    { subject: "Mathematics", code: "MATH-101", students: 42 },
    { subject: "Physics", code: "PHY-201", students: 38 },
    { subject: "Algebra", code: "ALG-110", students: 40 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">My Subjects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {list.map((it, i) => (
          <div key={i} className="bg-white border rounded-2xl shadow-sm p-5 cursor-pointer" onClick={()=>navigate("/student-list")}>
            <h3 className="font-semibold text-gray-800">{it.subject}</h3>
            <p className="text-sm text-gray-500">{it.code}</p>
            <div className="mt-4 text-sm text-gray-600">Students: <span className="font-medium text-gray-800">{it.students}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}