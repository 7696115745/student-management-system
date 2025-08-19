 export default function TeacherCourses() {
  const courses = [
    { title: "Intro to Calculus", desc: "Limits, derivatives, integrals" },
    { title: "Mechanics", desc: "Motion, forces, energy" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <div key={i} className="bg-white border rounded-2xl shadow-sm p-5">
            <div className="h-24 rounded-xl bg-slate-50 mb-4" />
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}