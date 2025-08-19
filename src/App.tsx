import { BrowserRouter as Router,Route,Routes } from "react-router"
import Dashboard from "./pages/dashboard/Dashboard"
import Sign_in from "./pages/auth/Sign_in"
import Signup from "./pages/auth/Signup"
import Forgot_Password from "./pages/auth/Forgot_Password"
import Otp_Verification from "./pages/auth/Otp_Verification"
import Reset_Password from "./pages/auth/Reset_Password"
import StudentRegistrationForm from "./components/StudentRegistrationForm"
import AdminStudents from "./admin/students/AdminStudents"
import AdminTeachers from "./admin/teacher/AdminTeachers"
import TeacherAttendanceReport from "./admin/attendance/TeacherAttendanceReport"
import AdminSettings from "./admin/settings/Settings"
import AdminCourses from "./admin/courses/Courses"
import TeacherSubjects from "./teacher/subjects/Subjects"
import StudentList from "./teacher/students/StudentList"
import { TeacherAttendancePage } from "./teacher/attendance/Attendance"
import UploadMarks from "./teacher/marks/Marks"
import TeacherMessages from "./teacher/messages/Messages"
import TeacherSettings from "./teacher/settings/Settings"
import StudentSubjects from "./student/my-subjects/My_subjects"
import StudentMarks from "./student/marks/Marks"
import StudentResources from "./student/resources/Resources"
import StudentAnnouncement from "./student/announcements/Announcements"
function App() {
   return (
   <>
    <Router>
      <Routes>
   <Route  path="/" element={<Dashboard/>}/>
   <Route  path="/sign-in" element={<Sign_in/>}/>
   <Route  path="/signup" element={<Signup/>}/>
   <Route  path="/forgot-password" element={<Forgot_Password/>}/>
   <Route  path="/otp-verification" element={<Otp_Verification/>}/>
   <Route  path="/reset-password" element={<Reset_Password/>}/>
   <Route  path="/student-registration" element={<StudentRegistrationForm/>}/>
   <Route  path="/manage-students" element={<AdminStudents/>}/>
   <Route  path="/manage-teachers" element={<AdminTeachers/>}/>
   <Route  path="/attendance-reports" element={<TeacherAttendanceReport/>}/>
   <Route  path="/settings" element={<AdminSettings/>}/>
   <Route  path="/courses" element={<AdminCourses/>}/>
   <Route  path="/teacher-subjects" element={<TeacherSubjects/>}/>
   <Route  path="/student-list" element={<StudentList/>}/>
   <Route  path="/teacher-attendance" element={<TeacherAttendancePage/>}/>
   <Route  path="/marks-entry" element={<UploadMarks/>}/>
   <Route  path="/teacher-messages" element={<TeacherMessages/>}/>
   <Route  path="/teacher-settings" element={<TeacherSettings/>}/>
   <Route  path="/my-subjects" element={<StudentSubjects/>}/>
   <Route  path="/exam/results" element={<StudentMarks/>}/>
   <Route  path="/resources" element={<StudentResources/>}/>
   <Route  path="/announcements" element={<StudentAnnouncement/>}/>
        </Routes>
   </Router>
  
   </>
    )
 }
 
 export default App