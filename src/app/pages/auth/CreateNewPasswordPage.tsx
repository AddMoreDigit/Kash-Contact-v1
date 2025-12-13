import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import type { Page } from '@/types/page.type';
import { toast } from 'sonner';

interface CreateNewPasswordPageProps {
  onNavigate: (page: Page) => void;
  accountType?: 'user' | 'vendor' | 'corporate';
}

export function CreateNewPasswordPage({ onNavigate }: CreateNewPasswordPageProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleContinue = () => {
    if (!newPassword || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    toast.success('Password reset successfully!');
    setTimeout(() => {
      onNavigate('login');
    }, 1000);
  };

  const handleBack = () => {
    onNavigate('otpVerification');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleContinue();
    }
  };

  return (
    <div className="bg-white relative size-full min-h-screen" data-name="Create New Password">
      {/* Back Button */}
      <div className="absolute left-[50px] top-[24px]">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-[24px] h-[24px] rounded-full border border-black flex items-center justify-center">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path d="M5 1L1 5L5 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-['Inter',sans-serif] text-[14px] text-black">
            back
          </span>
        </button>
      </div>

      {/* Title */}
      <p className="absolute font-['Inter',sans-serif] font-semibold left-1/2 text-[24px] text-black text-center text-nowrap top-[90px] translate-x-[-50%]">
        Create new password
      </p>

      {/* Subtitle */}
      <p className="absolute font-['Inter',sans-serif] font-normal left-1/2 text-[14px] text-black text-center top-[120px] translate-x-[-50%]">
        Please enter email address to rest password
      </p>

      {/* Enter New Password Field */}
      <div className="absolute flex flex-col items-start left-1/2 top-[160px] translate-x-[-50%] w-[420px]">
        <label className="font-['Inter',sans-serif] text-[12px] text-[#555555] mb-1">
          Enter new Password
        </label>
        <div className="relative w-full">
          <input
            type={showNewPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter  password"
            className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          >
            {showNewPassword ? (
              <EyeOff size={18} className="text-gray-600" />
            ) : (
              <Eye size={18} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Confirm New Password Field */}
      <div className="absolute flex flex-col items-start left-1/2 top-[240px] translate-x-[-50%] w-[420px]">
        <label className="font-['Inter',sans-serif] text-[12px] text-[#555555] mb-1">
          Confirm new Password
        </label>
        <div className="relative w-full">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter  password"
            className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          >
            {showConfirmPassword ? (
              <EyeOff size={18} className="text-gray-600" />
            ) : (
              <Eye size={18} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="absolute bg-[#8363f2] flex items-center justify-center left-1/2 rounded-md top-[320px] translate-x-[-50%] h-[40px] w-[180px] hover:bg-[#7354e1] transition-colors"
      >
        <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-white">
          Continue
        </p>
      </button>
    </div>
  );
}