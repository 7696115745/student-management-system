import React from "react";

const StudentRegistrationForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-inter bg-gradient-to-br from-slate-50 to-blue-50   flex items-center justify-center relative  overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Student Registration Form
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              name="student_name"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter student name"
            />
          </div>

          {/* Academic Certificate Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Academic Certificate Name
            </label>
            <input
              type="text"
              name="academic_certificate_name"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter certificate name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="student_email"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="student_phone"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter phone number"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Gender
            </label>
            <select
              name="student_gender"
              className="w-full border rounded-lg px-4 py-2 "
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="date_of_birth"
              className="w-full border rounded-lg px-4 py-2 "
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter category"
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter nationality"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter address"
              rows={3}
            />
          </div>

          {/* Guardian Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Guardian Name
            </label>
            <input
              type="text"
              name="guardian_name"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter guardian name"
            />
          </div>

          {/* Guardian Contact */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Guardian Contact
            </label>
            <input
              type="tel"
              name="guardian_contact"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter guardian contact"
            />
          </div>

          {/* High School Certificate */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              High School Certificate
            </label>
            <input
              type="file"
              name="high_school_certificate"
              className="w-full border rounded-lg px-4 py-2 file:mr-3 file:py-1 file:px-3 file:border file:rounded-lg file:bg-blue-50 file:text-blue-700"
            />
          </div>

          {/* Secondary School Certificate */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Secondary School Certificate
            </label>
            <input
              type="file"
              name="secondary_school_certificate"
              className="w-full border rounded-lg px-4 py-2 file:mr-3 file:py-1 file:px-3 file:border file:rounded-lg file:bg-blue-50 file:text-blue-700"
            />
          </div>

          {/* Academic Course */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Academic Course
            </label>
            <input
              type="text"
              name="academic_course"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter course"
            />
          </div>

          {/* Subject Combination */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Subject Combination
            </label>
            <input
              type="text"
              name="subject_combination"
              className="w-full border rounded-lg px-4 py-2 "
              placeholder="Enter subjects"
            />
          </div>

          {/* Student Photo */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Student Photo
            </label>
            <input
              type="file"
              name="student_photo"
              className="w-full border rounded-lg px-4 py-2 file:mr-3 file:py-1 file:px-3 file:border file:rounded-lg file:bg-blue-50 file:text-blue-700"
            />
          </div>

          {/* Student Signature */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Student Signature
            </label>
            <input
              type="file"
              name="student_signature"
              className="w-full border rounded-lg px-4 py-2 file:mr-3 file:py-1 file:px-3 file:border file:rounded-lg file:bg-blue-50 file:text-blue-700"
            />
          </div>

          {/* Guardian Signature */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Guardian Signature
            </label>
            <input
              type="file"
              name="guardian_signature"
              className="w-full border rounded-lg px-4 py-2 file:mr-3 file:py-1 file:px-3 file:border file:rounded-lg file:bg-blue-50 file:text-blue-700"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg shadow-md transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
