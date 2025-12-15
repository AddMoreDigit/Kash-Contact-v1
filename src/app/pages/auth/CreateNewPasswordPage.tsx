// import { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import type { Page } from '@/types/page.type';
// import { toast } from 'sonner';

// interface CreateNewPasswordPageProps {
//   onNavigate: (page: Page) => void;
//   accountType?: 'user' | 'vendor' | 'corporate';
// }

// export function CreateNewPasswordPage({ onNavigate }: CreateNewPasswordPageProps) {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleContinue = () => {
//     if (!newPassword || !confirmPassword) {
//       toast.error('Please fill in all fields');
//       return;
//     }

//     if (newPassword.length < 8) {
//       toast.error('Password must be at least 8 characters');
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     toast.success('Password reset successfully!');
//     setTimeout(() => {
//       onNavigate('login');
//     }, 1000);
//   };

//   const handleBack = () => {
//     onNavigate('otpVerification');
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter') {
//       handleContinue();
//     }
//   };

//   return (
//     <div className="bg-white relative size-full min-h-screen" data-name="Create New Password">
//       {/* Back Button */}
//       <div className="absolute left-[50px] top-[24px]">
//         <button
//           onClick={handleBack}
//           className="flex items-center gap-2 hover:opacity-80 transition-opacity"
//         >
//           <div className="w-[24px] h-[24px] rounded-full border border-black flex items-center justify-center">
//             <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
//               <path d="M5 1L1 5L5 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </div>
//           <span className="font-['Inter',sans-serif] text-[14px] text-black">
//             back
//           </span>
//         </button>
//       </div>

//       {/* Title */}
//       <p className="absolute font-['Inter',sans-serif] font-semibold left-1/2 text-[24px] text-black text-center text-nowrap top-[90px] translate-x-[-50%]">
//         Create new password
//       </p>

//       {/* Subtitle */}
//       <p className="absolute font-['Inter',sans-serif] font-normal left-1/2 text-[14px] text-black text-center top-[120px] translate-x-[-50%]">
//         Please enter email address to rest password
//       </p>

//       {/* Enter New Password Field */}
//       <div className="absolute flex flex-col items-start left-1/2 top-[160px] translate-x-[-50%] w-[420px]">
//         <label className="font-['Inter',sans-serif] text-[12px] text-[#555555] mb-1">
//           Enter new Password
//         </label>
//         <div className="relative w-full">
//           <input
//             type={showNewPassword ? 'text' : 'password'}
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Enter  password"
//             className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors"
//           />
//           <button
//             type="button"
//             onClick={() => setShowNewPassword(!showNewPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
//           >
//             {showNewPassword ? (
//               <EyeOff size={18} className="text-gray-600" />
//             ) : (
//               <Eye size={18} className="text-gray-600" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Confirm New Password Field */}
//       <div className="absolute flex flex-col items-start left-1/2 top-[240px] translate-x-[-50%] w-[420px]">
//         <label className="font-['Inter',sans-serif] text-[12px] text-[#555555] mb-1">
//           Confirm new Password
//         </label>
//         <div className="relative w-full">
//           <input
//             type={showConfirmPassword ? 'text' : 'password'}
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Enter  password"
//             className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors"
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
//           >
//             {showConfirmPassword ? (
//               <EyeOff size={18} className="text-gray-600" />
//             ) : (
//               <Eye size={18} className="text-gray-600" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Continue Button */}
//       <button
//         onClick={handleContinue}
//         className="absolute bg-[#8363f2] flex items-center justify-center left-1/2 rounded-md top-[320px] translate-x-[-50%] h-[40px] w-[180px] hover:bg-[#7354e1] transition-colors"
//       >
//         <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-white">
//           Continue
//         </p>
//       </button>
//     </div>
//   );
// }
import { useState } from 'react';
import { Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react';
import type { Page } from '@/types/page.type';
import { toast } from 'sonner';
import { confirmResetPassword } from "aws-amplify/auth";

interface CreateNewPasswordPageProps {
  onNavigate: (page: Page) => void;
  accountType?: 'user' | 'vendor' | 'corporate';
}

export function CreateNewPasswordPage({ onNavigate }: CreateNewPasswordPageProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContinue = async () => {
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

    setIsSubmitting(true);

    try {
      // Get stored email and code from localStorage
      const email = localStorage.getItem('resetPasswordEmail');
      const code = localStorage.getItem('resetPasswordCode');
      
      if (!email || !code) {
        toast.error('Session expired. Please start over.');
        onNavigate('forgotPassword');
        return;
      }

      // AWS Amplify confirm reset password
      await confirmResetPassword({
        username: email,
        newPassword: newPassword,
        confirmationCode: code
      });

      setIsSuccess(true);
      toast.success('Password reset successfully!');
      
      // Clean up localStorage
      localStorage.removeItem('resetPasswordCode');
      localStorage.removeItem('resetPasswordEmail');
      
      setTimeout(() => {
        onNavigate('login');
      }, 1000);

    } catch (error: any) {
      console.error('Reset password error:', error);
      
      if (error.name === 'CodeMismatchException') {
        toast.error('Invalid verification code');
      } else if (error.name === 'ExpiredCodeException') {
        toast.error('Verification code has expired');
        onNavigate('forgotPassword');
      } else if (error.name === 'InvalidPasswordException') {
        toast.error('Password does not meet requirements');
      } else {
        toast.error('Failed to reset password. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    onNavigate('otpVerification');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isSubmitting && !isSuccess) {
      handleContinue();
    }
  };

  // Calculate top positions based on success state
  const topPosition = isSuccess ? '200px' : '160px';
  const confirmTopPosition = isSuccess ? '280px' : '240px';
  const buttonTopPosition = isSuccess ? '360px' : '320px';

  return (
    <div className="bg-white relative size-full min-h-screen" data-name="Create New Password">
      {/* Back Button */}
      <div className="absolute left-[50px] top-[24px]">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          disabled={isSubmitting || isSuccess}
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
        Please create a new password for your account
      </p>

      {/* Success Message */}
      {isSuccess && (
        <div className="absolute left-1/2 top-[150px] translate-x-[-50%] w-[420px] mb-4 p-3 bg-green-50 text-green-600 rounded-md flex items-center gap-2">
          <CheckCircle className="h-5 w-5" />
          <span>Password reset successful! Redirecting to login...</span>
        </div>
      )}

      {/* Enter New Password Field */}
      <div className="absolute flex flex-col items-start left-1/2 translate-x-[-50%] w-[420px]" style={{ top: topPosition }}>
        <label className="font-['Inter',sans-serif] text-[12px] text-[#555555] mb-1">
          Enter new Password
        </label>
        <div className="relative w-full">
          <input
            type={showNewPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter password"
            disabled={isSubmitting || isSuccess}
            className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors disabled:opacity-50"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            disabled={isSubmitting || isSuccess}
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity disabled:opacity-50"
          >
            {showNewPassword ? (
              <EyeOff size={18} className="text-gray-600 cursor-pointer" />
            ) : (
              <Eye size={18} className="text-gray-600 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Confirm New Password Field */}
      <div className="absolute flex flex-col items-start left-1/2 translate-x-[-50%] w-[420px]" style={{ top: confirmTopPosition }}>
        <label className="font-['Inter',sans-serif] text-[12px] text-[#555555] mb-1">
          Confirm new Password
        </label>
        <div className="relative w-full">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Confirm password"
            disabled={isSubmitting || isSuccess}
            className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors disabled:opacity-50"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            disabled={isSubmitting || isSuccess}
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity disabled:opacity-50"
          >
            {showConfirmPassword ? (
              <EyeOff size={18} className="text-gray-600 cursor-pointer"/>
            ) : (
              <Eye size={18} className="text-gray-600 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={isSubmitting || isSuccess}
        className="absolute bg-[#8363f2] flex items-center justify-center left-1/2 rounded-md translate-x-[-50%] h-[40px] w-[180px] hover:bg-[#7354e1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ top: buttonTopPosition }}
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin text-white" />
        ) : isSuccess ? (
          <CheckCircle className="h-5 w-5 text-white" />
        ) : (
          <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-white cursor-pointer">
            Continue
          </p>
        )}
      </button>
    </div>
  );
}