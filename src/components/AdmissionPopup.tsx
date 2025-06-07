
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, GraduationCap, Calendar, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdmissionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdmissionPopup = ({ isOpen, onClose }: AdmissionPopupProps) => {
  if (!isOpen) return null;

  const documents = [
    "Birth Certificate",
    "Transfer Certificate (if applicable)",
    "Passport size photographs",
    "Previous academic records",
    "Address proof",
    "Parent ID proof"
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <Card className="max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-gold" />
              <h2 className="text-xl font-bold text-navy">Admissions Open!</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

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
              <p className="text-gray-700 text-sm mb-2">📞 +91 9959733822</p>
              <p className="text-gray-700 text-sm">💬 WhatsApp: +91 9959733822</p>
            </div>

            <div className="flex flex-col space-y-3 pt-4">
              <Link to="/contact" onClick={onClose}>
                <Button className="w-full bg-gold hover:bg-gold/90 text-white">
                  Apply Now
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="w-full border-navy text-navy hover:bg-navy hover:text-white"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdmissionPopup;
