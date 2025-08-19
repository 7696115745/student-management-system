 export default function AdminSettings() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Institute Name</label>
          <input className="w-full border rounded-xl px-4 py-2 focus:outline-none" placeholder="Your institute" readOnly />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Support Email</label>
          <input className="w-full border rounded-xl px-4 py-2" placeholder="support@yourdomain.com" readOnly />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Theme</label>
          <div className="flex gap-3">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">Light</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">Dark</span>
          </div>
        </div>
      </div>
    </div>
  );
}