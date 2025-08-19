 const TeacherMessages = () => {
  const messages = [
    { from: 'Admin', subject: 'Exam Schedule Update', content: 'Please note the changes in the mid-term exam dates.', date: '2025-08-10' },
    { from: 'Student: John Doe', subject: 'Doubt in Mathematics', content: 'I need help with the last chapter’s problems.', date: '2025-08-11' },
    { from: 'Student: Jane Smith', subject: 'Assignment Submission', content: 'I have submitted my assignment on the portal.', date: '2025-08-12' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      <div className="bg-white shadow rounded-lg p-4">
        {messages.map((msg, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <h2 className="font-semibold text-lg">{msg.subject}</h2>
            <p className="text-sm text-gray-500">From: {msg.from} • {msg.date}</p>
            <p className="mt-2 text-gray-700">{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherMessages;