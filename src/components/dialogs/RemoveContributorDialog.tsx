import { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface RemoveContributorDialogProps {
  isOpen: boolean;
  onClose: () => void;
  contributorName: string;
  contributorDetails: string;
  onConfirm: (reason: string) => void;
}

export function RemoveContributorDialog({
  isOpen,
  onClose,
  contributorName,
  contributorDetails,
  onConfirm
}: RemoveContributorDialogProps) {
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(reason);
    setReason('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb]">
          <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black">Remove Contributor</h2>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-full bg-[#e5e7eb] hover:bg-[#d1d5db] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-[#6b7280]" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          {/* Warning Alert */}
          <div className="bg-[#fee2e2] border border-[#fca5a5] rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-['Inter',sans-serif] text-[14px] font-medium text-[#991b1b] mb-1">
                  Are you sure you want to remove this member?
                </p>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#dc2626]">
                  This action will restrict their access until reactivated
                </p>
              </div>
            </div>
          </div>

          {/* Contributor Details */}
          <p className="font-['Inter',sans-serif] text-[12px] text-[#374151] mb-4">
            {contributorDetails}
          </p>

          {/* Reason Input */}
          <div>
            <label className="block font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-2">
              Reason
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none focus:border-[#8363f2] transition-colors resize-none"
              placeholder="Enter reason for removal..."
            />
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
            className="px-4 py-2 bg-[#dc2626] text-white rounded-md font-['Inter',sans-serif] text-[14px] hover:bg-[#b91c1c] transition-colors"
          >
            Yes,Remove
          </button>
        </div>
      </div>
    </div>
  );
}
