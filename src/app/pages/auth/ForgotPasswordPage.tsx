import type { Page } from '@/types/page.type';
import { useState } from 'react';
import { toast } from 'sonner';
import { resetPassword } from "aws-amplify/auth";

interface ForgotPasswordPageProps {
  onNavigate: (page: Page) => void;
  onEmailSubmit?: (email: string) => void;
  accountType?: 'user' | 'vendor' | 'corporate';
}

export function ForgotPasswordPage({ onNavigate, onEmailSubmit }: ForgotPasswordPageProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = async () => {
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // AWS Amplify reset password
      await resetPassword({ username: email });
      
      // Call the callback if provided
      if (onEmailSubmit) {
        onEmailSubmit(email);
      }

      toast.success('Verification code sent to your email!');
      setTimeout(() => {
        onNavigate('otpVerification');
      }, 1000);

    } catch (error: any) {
      console.error('Reset password error:', error);
      
      if (error.name === 'UserNotFoundException') {
        toast.error('No account found with this email');
      } else if (error.name === 'InvalidParameterException') {
        toast.error('Invalid email address');
      } else {
        toast.error('Failed to send reset code. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    onNavigate('login');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isSubmitting) {
      handleContinue();
    }
  };

  return (
    <div className="bg-white relative size-full min-h-screen" data-name="Forgot Password">
      {/* Back Button */}
      <div className="absolute left-[50px] top-[24px]">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          disabled={isSubmitting}
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
        Forgot password
      </p>

      {/* Subtitle */}
      <p className="absolute font-['Inter',sans-serif] font-normal left-1/2 text-[14px] text-black text-center top-[120px] translate-x-[-50%]">
        Please enter email address to reset password
      </p>

      {/* Email Field */}
      <div className="absolute flex flex-col items-start left-1/2 top-[160px] translate-x-[-50%] w-[420px]">
        <label className="font-['Inter',sans-serif] text-[12px] text-[#555555] mb-1">
          User Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter user email address"
          disabled={isSubmitting}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors disabled:opacity-50"
        />
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={isSubmitting}
        className="absolute bg-[#8363f2] flex items-center justify-center left-1/2 rounded-md top-[260px] translate-x-[-50%] h-[40px] w-[180px] hover:bg-[#7354e1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-white">
          {isSubmitting ? 'Sending...' : 'Continue'}
        </p>
      </button>
    </div>
  );
}