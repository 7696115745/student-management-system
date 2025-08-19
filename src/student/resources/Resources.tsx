 
export default function StudentResources() {
  const files = [
    { title: "Algebra Notes.pdf", size: "1.2 MB" },
    { title: "Physics Lab Manual.pdf", size: "900 KB" },
    { title: "English Essays.zip", size: "2.1 MB" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Resources</h1>
      <div className="bg-white border rounded-2xl shadow-sm p-6">
        <ul className="divide-y">
          {files.map((f, i) => (
            <li key={i} className="py-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">{f.title}</p>
                <p className="text-sm text-gray-500">{f.size}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">View</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}