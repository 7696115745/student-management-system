"use client";
import { useState } from "react";

const students = [
  { id: 1, name: "Aarav Sharma", roll: "101" },
  { id: 2, name: "Priya Verma", roll: "102" },
  { id: 3, name: "Rohit Singh", roll: "103" },
];

const subjects = ["Mathematics", "Science", "English", "History", "Computer"];

export default function UploadMarks() {
  const [marks, setMarks] = useState({
    student: "",
    subject: "",
    marks: "",
  });

  const handleChange = (e:any) => {
    setMarks({ ...marks, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert(
      `Marks Uploaded:\nStudent: ${marks.student}\nSubject: ${marks.subject}\nMarks: ${marks.marks}`
    );
    setMarks({ student: "", subject: "", marks: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Upload Student Marks
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Select Student */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Student
            </label>
            <select
              name="student"
              value={marks.student}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Student --</option>
              {students.map((student) => (
                <option key={student.id} value={student.name}>
                  {student.roll} - {student.name}
                </option>
              ))}
            </select>
          </div>

          {/* Select Subject */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Subject
            </label>
            <select
              name="subject"
              value={marks.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Subject --</option>
              {subjects.map((sub, idx) => (
                <option key={idx} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          {/* Enter Marks */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Enter Marks
            </label>
            <input
              type="number"
              name="marks"
              value={marks.marks}
              onChange={handleChange}
              required
              min="0"
              max="100"
              placeholder="Enter marks out of 100"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Upload Marks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
