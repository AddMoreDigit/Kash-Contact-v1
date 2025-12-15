import { useState } from 'react';
import { X, Info, Plus } from 'lucide-react';

interface ReplaceContributorDialogProps {
  isOpen: boolean;
  onClose: () => void;
  contributorName: string;
  contributorDetails: string;
  onConfirm: (newMember: string, reason: string, date: string, time: string) => void;
}

export function ReplaceContributorDialog({
  isOpen,
  onClose,
  contributorName,
  contributorDetails,
  onConfirm
}: ReplaceContributorDialogProps) {
  const [newMember, setNewMember] = useState('');
  const [reason, setReason] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(newMember, reason, date, time);
    setNewMember('');
    setReason('');
    setDate('');
    setTime('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb]">
          <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black">Replace Contributor</h2>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-full bg-[#e5e7eb] hover:bg-[#d1d5db] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-[#6b7280]" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          {/* Info Alert */}
          <div className="bg-[#ede9fe] border border-[#c4b5fd] rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#7c3aed] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#5b21b6] mb-1">
                  Select a new Contributor to replace {contributorName} and keep the campaign on track
                </p>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#7c3aed]">
                  This action will restrict their access until reactivated
                </p>
              </div>
            </div>
          </div>

          {/* Contributor Details */}
          <p className="font-['Inter',sans-serif] text-[12px] text-[#374151] mb-4">
            {contributorDetails}
          </p>

          {/* Add Member */}
          <div className="mb-4">
            <label className="block font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-2">
              Add member
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newMember}
                onChange={(e) => setNewMember(e.target.value)}
                placeholder="Search by Username or email"
                className="flex-1 px-3 py-2 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none focus:border-[#8363f2] transition-colors"
              />
              <button className="w-8 h-8 flex items-center justify-center bg-white border border-[#d1d5db] rounded-md hover:bg-[#f9fafb] transition-colors">
                <Plus className="w-4 h-4 text-[#6b7280]" />
              </button>
              <button className="px-4 py-2 bg-[#8363f2] text-white rounded-md font-['Inter',sans-serif] text-[14px] hover:bg-[#7354e1] transition-colors">
                Invite
              </button>
            </div>
          </div>

          {/* Reason */}
          <div className="mb-4">
            <label className="block font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-2">
              Reason
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none focus:border-[#8363f2] transition-colors resize-none"
              placeholder="Enter reason..."
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-2">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] outline-none focus:border-[#8363f2] transition-colors"
              />
            </div>
            <div>
              <label className="block font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-2">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] outline-none focus:border-[#8363f2] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#e5e7eb]">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#d1d5db] bg-white rounded-md font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-[#f9fafb] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-[#1e293b] text-white rounded-md font-['Inter',sans-serif] text-[14px] hover:bg-[#0f172a] transition-colors"
          >
            Yes,Replace
          </button>
        </div>
      </div>
    </div>
  );
}
