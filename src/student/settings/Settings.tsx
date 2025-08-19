import React from "react";

export default function StudentSettings() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input className="w-full border rounded-xl px-4 py-2" placeholder="Rahul Sharma" readOnly />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input className="w-full border rounded-xl px-4 py-2" placeholder="student@school.com" readOnly />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Class</label>
          <input className="w-full border rounded-xl px-4 py-2" placeholder="10th A" readOnly />
        </div>
      </div>
    </div>
  );
}