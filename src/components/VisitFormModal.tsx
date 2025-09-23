// components/VisitFormModal.tsx
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from './ui/button';

const VisitFormModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('Ganesh Nagar');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    const number = branch === 'Ganesh Nagar' ? '9959733822' : '9502022984';
    const message = `Hello, I would like to book a campus visit to ${branch} branch.\nName: ${name}\nPreferred Date: ${date}\nTime: ${time}`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
          <Dialog.Title className="text-xl font-bold mb-4">Book a Visit</Dialog.Title>
          
          <input type="text" placeholder="Your Name"
            className="w-full mb-3 p-2 border rounded"
            value={name} onChange={(e) => setName(e.target.value)} />

          <select
            className="w-full mb-3 p-2 border rounded"
            value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option>Ganesh Nagar</option>
            <option>Kranthi Colony</option>
          </select>

          <input type="date"
            className="w-full mb-3 p-2 border rounded"
            value={date} onChange={(e) => setDate(e.target.value)} />
          
          <input type="time"
            className="w-full mb-4 p-2 border rounded"
            value={time} onChange={(e) => setTime(e.target.value)} />

          <Button onClick={handleSubmit} className="w-full bg-gold hover:bg-gold/90 text-white">Send via WhatsApp</Button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default VisitFormModal;
