 export default function AdminCourses() {
  const cards = [
    { title: "React Basics", desc: "Components, props, hooks" },
    { title: "Node.js API", desc: "REST patterns & auth" },
    { title: "UI/UX Design", desc: "Foundations & Figma" },
    { title: "Databases 101", desc: "SQL & NoSQL" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <div key={i} className="bg-white border rounded-2xl shadow-sm p-5">
            <div className="h-24 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 mb-4" />
            <h3 className="font-semibold text-gray-800">{c.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
