import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, GraduationCap, Calendar, FileText, Phone } from 'lucide-react';

interface AdmissionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdmissionPopup = ({ isOpen, onClose }: AdmissionPopupProps) => {
  const [showForm, setShowForm] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('');
  const [parentName, setParentName] = useState('');
  const [mobile, setMobile] = useState('');
  const [branch, setBranch] = useState('');

  const gradeOptions = [
    "Nursery", "LKG", "UKG",
    "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5",
    "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"
  ];

  const documents = [
    "Birth Certificate",
    "Transfer Certificate (if applicable)",
    "Passport size photographs",
    "Previous academic records",
    "Address proof",
    "Parent ID proof"
  ];

  const handleWhatsAppRedirect = () => {
    if (!studentName || !grade || !parentName || !mobile || !branch) {
      alert("Please fill all the fields before proceeding.");
      return;
    }

    const number = branch === "ganesh_nagar" ? "919959733822" : "919502022984";

    const message = `Dear BMRS School Team,

I am the parent of ${studentName}, and I am interested in enrolling them in ${grade} at your ${branch === 'ganesh_nagar' ? 'Ganesh Nagar' : 'Kranthi Colony'} branch.

👨‍👩‍👧 Parent Name: ${parentName}
📞 Contact Number: ${mobile}

Please call me back with the admission details. Thank you.`;

    const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

    setShowForm(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <Card className="max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-gold" />
              <h2 className="text-xl font-bold text-navy">Admissions Open!</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-gray-100">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {showForm ? (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Student's Full Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />

              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              >
                <option value="">Select Grade Applying For</option>
                {gradeOptions.map((g, i) => (
                  <option key={i} value={g}>{g}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Parent/Guardian Name"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />

              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">Select Branch:</p>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="branch"
                      value="ganesh_nagar"
                      checked={branch === 'ganesh_nagar'}
                      onChange={(e) => setBranch(e.target.value)}
                    />
                    <span>Ganesh Nagar</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="branch"
                      value="kranthi_colony"
                      checked={branch === 'kranthi_colony'}
                      onChange={(e) => setBranch(e.target.value)}
                    />
                    <span>Kranthi Colony</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col space-y-3 pt-2">
                <Button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Send Message on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="w-full border-navy text-navy hover:bg-navy hover:text-white"
                >
                  Back
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-gold/10 rounded-lg p-4">
                <h3 className="font-semibold text-navy mb-2">🎓 Grades Offered</h3>
                <p className="text-gray-700">Nursery to Grade X (10th)</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-navy" />
                  <h3 className="font-semibold text-navy">Admission Period</h3>
                </div>
                <p className="text-gray-700">March 2024 - April 2024</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <FileText className="w-4 h-4 text-navy" />
                  <h3 className="font-semibold text-navy">Required Documents</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy/5 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4 text-navy" />
                  <h3 className="font-semibold text-navy">Contact Information</h3>
                </div>
                <p className="text-gray-700 text-sm mb-2">📞 +91 9959733822 (Ganesh Nagar)</p>
                <p className="text-gray-700 text-sm">📞 +91 9502022984 (Kranthi Colony)</p>
              </div>

              <div className="flex flex-col space-y-3 pt-4">
                <Button
                  className="w-full bg-gold hover:bg-gold/90 text-white"
                  onClick={() => setShowForm(true)}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-navy text-navy hover:bg-navy hover:text-white"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdmissionPopup;
