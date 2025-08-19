  
const StudentContent = () => {
  const studentInfo = {
    name: "Rahul Sharma",
    rollNo: "STU-2025-001",
    class: "10th Grade - A",
    profilePic: "https://i.pravatar.cc/40",
    overallPercentage: 87,
  };

  const subjects = [
    {
      name: "Mathematics",
      teacher: "Amit Verma",
      email: "amit.verma@school.com",
      phone: "+91 98765 43210",
      marks: "88/100",
      grade: "A",
    },
    {
      name: "Science",
      teacher: "Priya Sharma",
      email: "priya.sharma@school.com",
      phone: "+91 98765 43211",
      marks: "92/100",
      grade: "A+",
    },
    {
      name: "English",
      teacher: "Vikram Singh",
      email: "vikram.singh@school.com",
      phone: "+91 98765 43212",
      marks: "81/100",
      grade: "B+",
    },
    {
      name: "Social Studies",
      teacher: "Anjali Kapoor",
      email: "anjali.kapoor@school.com",
      phone: "+91 98765 43213",
      marks: "85/100",
      grade: "A",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Student Info */}
      <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-6">
        <img
          src={studentInfo.profilePic}
          alt="Student"
          className="w-24 h-24 rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold">{studentInfo.name}</h1>
          <p className="text-gray-600">{studentInfo.rollNo}</p>
          <p className="text-gray-600">{studentInfo.class}</p>
          <span className="inline-block mt-2 px-4 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
            Overall: {studentInfo.overallPercentage}%
          </span>
        </div>
      </div>

      {/* Subjects Table */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Subjects & Marks</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border border-gray-200">Subject</th>
                 <th className="p-3 border border-gray-200">Marks</th>
                <th className="p-3 border border-gray-200">Grade</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="p-3 border border-gray-200">{subject.name}</td>
                 <td className="p-3 border border-gray-200">{subject.marks}</td>
                  <td className="p-3 border border-gray-200 font-semibold">
                    {subject.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentContent;
