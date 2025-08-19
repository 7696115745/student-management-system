 

const StudentAnnouncement = () => {
  const announcements = [
    {
      title: 'Semester Exam Schedule Released',
      date: 'Aug 13, 2025',
      description: 'The final semester examination schedule is now available. Please check the Exams section for details.'
    },
    {
      title: 'Guest Lecture by Dr. Mehra',
      date: 'Aug 10, 2025',
      description: 'Join us for an insightful guest lecture on AI trends in education by Dr. Mehra at 3 PM in the auditorium.'
    },
    {
      title: 'Library Renovation Completed',
      date: 'Aug 5, 2025',
      description: 'The library renovation is complete. Students and faculty are welcome to visit and explore the new facilities.'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Announcements</h1>
      <div className="space-y-5">
        {announcements.map((item, index) => (
          <div key={index} className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-blue-700">{item.title}</h2>
            <p className="text-sm text-gray-500">Posted on: {item.date}</p>
            <p className="mt-3 text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentAnnouncement;
