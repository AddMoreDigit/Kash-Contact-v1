import { useState } from 'react';
import { X, Info } from 'lucide-react';

interface RefundContributorDialogProps {
  isOpen: boolean;
  onClose: () => void;
  contributorName: string;
  refundAmount: number;
  onConfirm: (reason: string, date: string, time: string) => void;
}

export function RefundContributorDialog({
  isOpen,
  onClose,
  contributorName,
  refundAmount,
  onConfirm
}: RefundContributorDialogProps) {
  const [reason, setReason] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(reason, date, time);
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
          <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black">Refund Contributor</h2>
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
          <div className="bg-[#dbeafe] border border-[#93c5fd] rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#1e40af] mb-1">
                  You're about to Issue a refund to {contributorName}
                </p>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#2563eb]">
                  This action will restrict their access until reactivated
                </p>
              </div>
            </div>
          </div>

          {/* Refund Amount */}
          <p className="font-['Inter',sans-serif] text-[14px] text-[#374151] mb-4">
            You about to refund R{refundAmount.toFixed(2)}
          </p>

          {/* Reason for Refund */}
          <div className="mb-4">
            <label className="block font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-2">
              Reason for Refund
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none focus:border-[#8363f2] transition-colors resize-none"
              placeholder="Enter reason for refund..."
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
            className="px-4 py-2 bg-[#10b981] text-white rounded-md font-['Inter',sans-serif] text-[14px] hover:bg-[#059669] transition-colors"
          >
            Yes,Refund
          </button>
        </div>
      </div>
    </div>
  );
}
