 export default function AdminCertificates() {
  const items = [
    { id: "CERT-001", student: "Rahul Sharma", course: "React Basics", date: "Aug 10, 2025" },
    { id: "CERT-002", student: "Priya Mehta", course: "UI/UX Design", date: "Aug 08, 2025" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Certificates</h1>
      <div className="bg-white border rounded-2xl shadow-sm p-6">
        <ul className="divide-y">
          {items.map((it, i) => (
            <li key={i} className="py-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">{it.student}</p>
                <p className="text-sm text-gray-500">{it.course}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{it.id}</p>
                <p className="text-gray-700">{it.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}