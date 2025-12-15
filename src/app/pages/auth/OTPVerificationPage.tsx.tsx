// import type { Page } from '@/types/page.type';
// import { useState, useRef, useEffect } from 'react';
// import { toast } from 'sonner';
// import { Logo } from './components/layout';
// import { confirmSignUp, resendSignUpCode } from "aws-amplify/auth";

// interface OTPVerificationPageProps {
//   onNavigate: (page: Page) => void;
//   isSignupFlow?: boolean;
//   accountType?: 'user' | 'vendor' | 'corporate';
//   userEmail?: string;
// }

// export function OTPVerificationPage({ 
//   onNavigate, 
//   isSignupFlow = true, 
//   accountType = 'user', 
//   userEmail = 'john*********@gmail.com' 
// }: OTPVerificationPageProps) {
//   // Change to 6 digits for AWS Amplify
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [timer, setTimer] = useState(59);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isResending, setIsResending] = useState(false);
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

//   useEffect(() => {
//     inputRefs.current[0]?.focus();
    
//     const interval = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(interval);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

  
//     return () => clearInterval(interval);
//   }, [userEmail]);

//   const handleChange = (index: number, value: string) => {
//     if (!/^\d*$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value.slice(-1);
//     setOtp(newOtp);

//     // Auto-focus next input (now up to index 5 for 6 digits)
//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }
    
//     // Auto-submit when last digit is entered
//     if (index === 5 && value) {
//       handleVerify();
//     }
//   };

//   const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e: React.ClipboardEvent) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData('text').slice(0, 6); // Now 6 digits
//     if (!/^\d+$/.test(pastedData)) return;

//     const newOtp = [...otp];
//     pastedData.split('').forEach((char, index) => {
//       if (index < 6) newOtp[index] = char;
//     });
//     setOtp(newOtp);

//     const nextIndex = Math.min(pastedData.length, 5);
//     inputRefs.current[nextIndex]?.focus();
//   };

//   const handleVerify = async () => {
//     const otpValue = otp.join('');
    
//     // Now check for 6 digits instead of 5
//     if (otpValue.length !== 6) {
//       toast.error('Please enter all 6 digits');
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // AWS Amplify confirm signup
//       await confirmSignUp({
//         username: userEmail.replace('*********', ''), // Remove mask if present
//         confirmationCode: otpValue
//       });

//       toast.success('Email verified successfully!');
      
//       setTimeout(() => {
//         if (isSignupFlow) {
//           onNavigate('signupSuccess');
//         } else {
//           onNavigate('createNewPassword');
//         }
//       }, 1000);

//     } catch (error: any) {
//       console.error('Verification error:', error);
      
//       if (error.name === 'CodeMismatchException') {
//         toast.error('Invalid verification code');
//       } else if (error.name === 'ExpiredCodeException') {
//         toast.error('Verification code has expired');
//       } else if (error.name === 'NotAuthorizedException') {
//         toast.error('User is already confirmed');
//         setTimeout(() => onNavigate('login'), 1000);
//       } else {
//         toast.error('Verification failed. Please try again.');
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleResendCode = async () => {
//     if (timer > 0) return;
    
//     setIsResending(true);
//     try {
//       await resendSignUpCode({ 
//         username: userEmail.replace('*********', '') // Remove mask
//       });
//       toast.success('A new code has been sent to your email');
//       setTimer(120);
//       setOtp(['', '', '', '', '', '']);
//       inputRefs.current[0]?.focus();
//     } catch (error: any) {
//       console.error('Resend error:', error);
//       toast.error('Failed to resend code');
//     } finally {
//       setIsResending(false);
//     }
//   };

//   const handleBack = () => {
//     if (isSignupFlow) {
//       onNavigate('vendorSignup');
//     } else {
//       onNavigate('forgotPassword');
//     }
//   };

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

  

//   // If password reset flow, use simple centered layout
//   if (!isSignupFlow) {
//     return (
//       <div className="bg-white relative size-full min-h-screen" data-name="OTP Verification">
//         {/* Back Button */}
//         <div className="absolute left-[50px] top-[24px]">
//           <button
//             onClick={handleBack}
//             className="flex items-center gap-2 hover:opacity-80 transition-opacity"
//           >
//             <div className="w-[24px] h-[24px] rounded-full border border-black flex items-center justify-center">
//               <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
//                 <path d="M5 1L1 5L5 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </div>
//             <span className="font-['Inter',sans-serif] text-[14px] text-black">
//               back
//             </span>
//           </button>
//         </div>

//         {/* Title */}
//         <p className="absolute font-['Inter',sans-serif] font-semibold left-1/2 text-[24px] text-black text-center text-nowrap top-[90px] translate-x-[-50%]">
//           OTP verification
//         </p>

//         {/* Subtitle - Updated to say 6 digits */}
//         <p className="absolute font-['Inter',sans-serif] font-normal left-1/2 text-[14px] text-black text-center top-[120px] translate-x-[-50%]">
//           Please enter 6 digits sent to your email to proceed
//         </p>

//         {/* OTP Input Fields - Now 6 inputs */}
//         <div className="absolute flex gap-[15px] items-center left-1/2 top-[150px] translate-x-[-50%]">
//           {otp.map((digit, index) => (
//             <div key={index} className="relative">
//               <input
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 type="text"
//                 inputMode="numeric"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 onPaste={handlePaste}
//                 disabled={isSubmitting}
//                 className="w-[45px] h-[45px] border border-gray-300 rounded-md text-center text-xl font-medium outline-none focus:border-[#8363f2] transition-colors disabled:opacity-50"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Verification Code Label and Timer */}
//         <div className="absolute left-1/2 top-[220px] translate-x-[-50%] flex items-center justify-between w-[300px]">
//           <p className="font-['Inter',sans-serif] text-[12px] text-[#2b2929]">
//             Enter verification Code
//           </p>
//           <p className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#2b2929]">
//             {formatTime(timer)}
//           </p>
//         </div>

//         {/* Verify Button */}
//         <button
//           onClick={handleVerify}
//           disabled={isSubmitting || otp.some(d => !d)}
//           className="absolute bg-[#8363f2] flex items-center justify-center left-1/2 rounded-md top-[260px] translate-x-[-50%] h-[40px] w-[180px] hover:bg-[#7354e1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-white">
//             {isSubmitting ? 'Verifying...' : 'Verify'}
//           </p>
//         </button>

//         {/* Retry Button */}
//         <button
//           onClick={handleResendCode}
//           disabled={timer > 0 || isResending}
//           className={`absolute flex items-center justify-center left-1/2 rounded-md top-[310px] translate-x-[-50%] h-[40px] w-[180px] transition-colors ${
//             timer > 0 || isResending
//               ? 'bg-gray-300 cursor-not-allowed' 
//               : 'bg-[#8363f2] hover:bg-[#7354e1]'
//           }`}
//         >
//           <p className={`font-['Inter',sans-serif] font-semibold text-[14px] ${timer > 0 || isResending ? 'text-gray-500' : 'text-white'}`}>
//             {isResending ? 'Sending...' : timer > 0 ? `Resend (${timer}s)` : 'Resend'}
//           </p>
//         </button>
//       </div>
//     );
//   }

//   // Signup flow - use split layout
//   return (
//     <div className="bg-white flex w-full min-h-screen">
//       {/* Left Section - Purple Background */}
//       <div className="w-[49%] bg-[#E5DEFF] relative flex flex-col py-8 px-12">
//         <button
//           onClick={handleBack}
//           className="flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity"
//         >
//           <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center">
//             <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
//               <path d="M9 1L1 9L9 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </div>
//           <span className="text-black text-base">back</span>
//         </button>

//         <div className="bg-black flex-1 flex flex-col justify-center px-12 rounded-lg">
//           <h1 className="text-white text-6xl mb-6">Verification</h1>
//           {/* Updated text for 6 digits */}
//           <p className="text-white text-lg">
//             Please enter the 6-digit code sent to your email.
//           </p>
//         </div>
//       </div>

//       {/* Right Section - White Background */}
//       <div className="w-[51%] bg-white flex flex-col items-center py-12 px-16 pb-32 relative overflow-hidden">
//         <div className="mb-12">
//           <Logo className="h-10" />
//         </div>

//         <div className="w-full max-w-md">
//           <h2 className="text-3xl text-black mb-4 text-center">
//             OTP verification
//           </h2>

//           <p className="text-gray-600 text-sm mb-10 text-center">
//             A 6-digit code has been sent to {userEmail}.
//           </p>

//           {/* OTP Input Fields - Now 6 inputs */}
//           <div className="flex gap-4 mb-8 justify-center">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 type="text"
//                 inputMode="numeric"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 onPaste={handlePaste}
//                 disabled={isSubmitting}
//                 className="w-12 h-12 border border-gray-400 rounded-md text-center text-xl outline-none focus:border-[#8363f2] transition-colors disabled:opacity-50"
//               />
//             ))}
//           </div>

//           <p className="text-black text-base mb-10 text-center">
//             {formatTime(timer)}
//           </p>

//           <button
//             onClick={handleVerify}
//             disabled={isSubmitting || otp.some(d => !d)}
//             className="w-full bg-[#8363f2] text-white py-3 rounded-md text-base text-center hover:bg-[#7354e1] transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isSubmitting ? 'Verifying...' : 'Verify'}
//           </button>

//           <p className="text-center text-sm text-gray-600">
//             Didn't receive code?{' '}
//             <button
//               onClick={handleResendCode}
//               disabled={timer > 0 || isResending}
//               className={`${timer > 0 || isResending ? 'text-gray-400 cursor-not-allowed' : 'text-[#8363f2] hover:underline cursor-pointer'}`}
//             >
//               {isResending ? 'Sending...' : timer > 0 ? `Resend (${timer}s)` : 'Resend'}
//             </button>
//           </p>
//         </div>

//         {/* Purple Gradient Bottom Right */}
//         <div className="absolute bottom-0 right-0 w-full h-64 pointer-events-none overflow-hidden">
//           <svg viewBox="0 0 624 330" fill="none" className="absolute -bottom-10 -right-20 w-[800px] h-auto" preserveAspectRatio="none">
//             <path d="M4 400.181C4 364.45 27.6277 333.026 61.953 323.103L132 302.855L272.5 260.855L1257.13 4.98589C1310.06 -8.76888 1366.32 6.38745 1405.18 44.8692L1439.55 78.9141C1442.4 81.7313 1444 85.5687 1444 89.5723V508.355H4V400.181Z" fill="url(#gradient)" />
//             <defs>
//               <linearGradient id="gradient" x1="4" y1="268" x2="1444" y2="268" gradientUnits="userSpaceOnUse">
//                 <stop offset="0.474" stopColor="#7954FB" />
//                 <stop offset="1" stopColor="#2D1B69" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }
import type { Page } from '@/types/page.type';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { Logo } from './components/layout';
import { confirmSignUp, resendSignUpCode, resetPassword, confirmResetPassword } from "aws-amplify/auth";

interface OTPVerificationPageProps {
  onNavigate: (page: Page) => void;
  isSignupFlow?: boolean;
  accountType?: 'user' | 'vendor' | 'corporate';
  userEmail?: string;
}

export function OTPVerificationPage({ 
  onNavigate, 
  isSignupFlow = true, 
  accountType = 'user', 
  userEmail = 'john*********@gmail.com' 
}: OTPVerificationPageProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(300);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
    
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [userEmail]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'Enter' && index === 5) {
      handleVerify();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

// const handleVerify = async () => {
//   const otpValue = otp.join('');
  
//   if (otpValue.length !== 6) {
//     toast.error('Please enter all 6 digits');
//     return;
//   }

//   setIsSubmitting(true);

//   try {
//     if (isSignupFlow) {
//       // For signup verification
//       await confirmSignUp({
//         username: userEmail.replace('*********', ''), 
//         confirmationCode: otpValue
//       });

//       toast.success('Email verified successfully!');
      
//       setTimeout(() => {
//         onNavigate('signupSuccess');
//       }, 1000);
//     } else {
//       // For password reset - JUST VERIFY, DON'T SUBMIT NEW PASSWORD
//       const email = userEmail.replace('*********', '');
      
//       // Store the verification code
//       localStorage.setItem('resetPasswordCode', otpValue);
//       localStorage.setItem('resetPasswordEmail', email);
      
//       // Optional: You could add an API call here to verify the code
//       // without actually resetting the password
      
//       toast.success('Code verified! Set your new password.');
      
//       setTimeout(() => {
//         onNavigate('createNewPassword');
//       }, 1000);
//     }

//   } catch (error: any) {
//     console.error('Verification error:', error);
    
//     if (error.name === 'CodeMismatchException') {
//       toast.error('Invalid verification code');
//     } else if (error.name === 'ExpiredCodeException') {
//       toast.error('Verification code has expired. Please request a new one.');
//       setOtp(['', '', '', '', '', '']);
//       setTimer(0);
//     } else if (error.name === 'NotAuthorizedException') {
//       toast.error('User is already confirmed');
//       setTimeout(() => onNavigate('login'), 1000);
//     } else if (error.name === 'LimitExceededException') {
//       toast.error('Too many attempts. Please wait a few minutes and try again.');
//       // Disable further attempts for a while
//       setTimer(300); // Reset timer to 5 minutes
//     } else {
//       toast.error('Verification failed. Please try again.');
//     }
//   } finally {
//     setIsSubmitting(false);
//   }
// };

const handleVerify = async () => {
  const otpValue = otp.join('');
  
  if (otpValue.length !== 6) {
    toast.error('Please enter all 6 digits');
    return;
  }

  setIsSubmitting(true);

  try {
    // DEBUG LOGS
    console.log('DEBUG: Attempting verification with:', {
      username: userEmail.replace('*********', ''),
      emailDisplay: userEmail,
      otpEntered: otpValue,
      otpExpected: '010265', // Replace with actual received code
      isSignupFlow: isSignupFlow,
      timestamp: new Date().toISOString()
    });

    if (isSignupFlow) {
      // For signup verification
      const confirmParams = {
        username: userEmail.replace('*********', ''), 
        confirmationCode: otpValue
      };
      
      console.log('DEBUG: Calling confirmSignUp with:', confirmParams);
      
      await confirmSignUp(confirmParams);

      toast.success('Email verified successfully!');
      
      setTimeout(() => {
        onNavigate('signupSuccess');
      }, 1000);
    } else {
      // For password reset - use a test approach
      const email = userEmail.replace('*********', '');
      const testPassword = "TestPassword123!";
      
      console.log('DEBUG: Password reset flow for email:', email);
      console.log('DEBUG: Using OTP:', otpValue);
      
      // Store for CreateNewPasswordPage to use
      localStorage.setItem('resetPasswordCode', otpValue);
      localStorage.setItem('resetPasswordEmail', email);
      localStorage.setItem('resetPasswordTimestamp', Date.now().toString());
      
      toast.success('Code accepted. Please set your new password.');
      
      setTimeout(() => {
        onNavigate('createNewPassword');
      }, 1000);
    }

  } catch (error: any) {
    console.error('Verification error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      time: new Date().toISOString()
    });
    
    // Check for specific Cognito errors
    if (error.name === 'CodeMismatchException') {
      // Show the actual code entered vs expected (for debugging)
      console.log('Code mismatch - Entered:', otp.join(''), 'Expected format: 6 digits');
      toast.error('Invalid verification code. Please check and try again.');
    } else if (error.name === 'ExpiredCodeException') {
      toast.error('Verification code has expired. Please request a new one.');
      setOtp(['', '', '', '', '', '']);
      setTimer(0);
    } else if (error.name === 'NotAuthorizedException') {
      toast.error('User is already confirmed or not found.');
      setTimeout(() => onNavigate('login'), 1000);
    } else if (error.name === 'UserNotFoundException') {
      toast.error('User not found. Please check your email.');
    } else if (error.name === 'InvalidParameterException') {
      toast.error('Invalid parameters. Please try again.');
    } else {
      toast.error(`Verification failed: ${error.message || 'Please try again.'}`);
    }
  } finally {
    setIsSubmitting(false);
  }
};

  const handleResendCode = async () => {
    if (timer > 0) return;
    
    setIsResending(true);
    try {
      if (isSignupFlow) {
        await resendSignUpCode({ 
          username: userEmail.replace('*********', '')
        });
      } else {
        await resetPassword({ username: userEmail.replace('*********', '') });
      }
      
      toast.success('A new code has been sent to your email');
      setTimer(300);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } catch (error: any) {
      console.error('Resend error:', error);
      toast.error('Failed to resend code. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  const handleBack = () => {
    if (isSignupFlow) {
      onNavigate('vendorSignup');
    } else {
      onNavigate('forgotPassword');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Rest of your JSX remains exactly the same...
  // If password reset flow, use simple centered layout
  if (!isSignupFlow) {
    return (
      <div className="bg-white relative size-full min-h-screen" data-name="OTP Verification">
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
          OTP verification
        </p>

        {/* Subtitle */}
        <p className="absolute font-['Inter',sans-serif] font-normal left-1/2 text-[14px] text-black text-center top-[120px] translate-x-[-50%]">
          Please enter 6 digits sent to your email to proceed
        </p>

        {/* OTP Input Fields */}
        <div className="absolute flex gap-[15px] items-center left-1/2 top-[150px] translate-x-[-50%]">
          {otp.map((digit, index) => (
            <div key={index} className="relative">
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                disabled={isSubmitting}
                className="w-[45px] h-[45px] border border-gray-300 rounded-md text-center text-xl font-medium outline-none focus:border-[#8363f2] transition-colors disabled:opacity-50"
              />
            </div>
          ))}
        </div>

        {/* Verification Code Label and Timer */}
        <div className="absolute left-1/2 top-[220px] translate-x-[-50%] flex items-center justify-between w-[300px]">
          <p className="font-['Inter',sans-serif] text-[12px] text-[#2b2929]">
            Code expires in: {formatTime(timer)}
          </p>
          <p className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#2b2929]">
            {formatTime(timer)}
          </p>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={isSubmitting || otp.some(d => !d)}
          className="absolute bg-[#8363f2] flex items-center justify-center left-1/2 rounded-md top-[260px] translate-x-[-50%] h-[40px] w-[180px] hover:bg-[#7354e1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <p className="font-['Inter',sans-serif] font-semibold text-[14px] text-white">
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </p>
        </button>

        {/* Retry Button */}
        <button
          onClick={handleResendCode}
          disabled={timer > 0 || isResending}
          className={`cursor-pointer absolute flex items-center justify-center left-1/2 rounded-md top-[310px] translate-x-[-50%] h-[40px] w-[180px] transition-colors ${
            timer > 0 || isResending
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-[#8363f2] hover:bg-[#7354e1]'
          }`}
        >
          <p className={`font-['Inter',sans-serif] font-semibold text-[14px] ${timer > 0 || isResending ? 'text-gray-500' : 'text-white'}`}>
            {isResending ? 'Sending...' : timer > 0 ? `Resend (${formatTime(timer)})` : 'Resend'}
          </p>
        </button>
      </div>
    );
  }

  // Signup flow - use split layout
  return (
    <div className="bg-white flex w-full min-h-screen">
      {/* Left Section - Purple Background */}
      <div className="w-[49%] bg-[#E5DEFF] relative flex flex-col py-8 px-12">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity"
          disabled={isSubmitting}
        >
          <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M9 1L1 9L9 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-black text-base">back</span>
        </button>

        <div className="bg-black flex-1 flex flex-col justify-center px-12 rounded-lg">
          <h1 className="text-white text-6xl mb-6">Verification</h1>
          <p className="text-white text-lg">
            Please enter the 6-digit code sent to your email.
          </p>
        </div>
      </div>

      {/* Right Section - White Background */}
      <div className="w-[51%] bg-white flex flex-col items-center py-12 px-16 pb-32 relative overflow-hidden">
        <div className="mb-12">
          <Logo className="h-10" />
        </div>

        <div className="w-full max-w-md">
          <h2 className="text-3xl text-black mb-4 text-center">
            OTP verification
          </h2>

          <p className="text-gray-600 text-sm mb-10 text-center">
            A 6-digit code has been sent to {userEmail}.<br />
            Code expires in: {formatTime(timer)}
          </p>

          {/* OTP Input Fields */}
          <div className="flex gap-4 mb-8 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                disabled={isSubmitting}
                className="w-12 h-12 border border-gray-400 rounded-md text-center text-xl outline-none focus:border-[#8363f2] transition-colors disabled:opacity-50"
              />
            ))}
          </div>

          <p className="text-black text-base mb-10 text-center">
            {formatTime(timer)}
          </p>

          <button
            onClick={handleVerify}
            disabled={isSubmitting || otp.some(d => !d)}
            className="w-full bg-[#8363f2] text-white py-3 rounded-md text-base text-center hover:bg-[#7354e1] transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </button>

          <p className="text-center text-sm text-gray-600">
            Didn't receive code?{' '}
            <button
              onClick={handleResendCode}
              disabled={timer > 0 || isResending}
              className={`${timer > 0 || isResending ? 'text-gray-400 cursor-not-allowed' : 'text-[#8363f2] hover:underline cursor-pointer'}`}
            >
              {isResending ? 'Sending...' : timer > 0 ? `Resend (${formatTime(timer)})` : 'Resend'}
            </button>
          </p>
        </div>

        {/* Purple Gradient Bottom Right */}
        <div className="absolute bottom-0 right-0 w-full h-64 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 624 330" fill="none" className="absolute -bottom-10 -right-20 w-[800px] h-auto" preserveAspectRatio="none">
            <path d="M4 400.181C4 364.45 27.6277 333.026 61.953 323.103L132 302.855L272.5 260.855L1257.13 4.98589C1310.06 -8.76888 1366.32 6.38745 1405.18 44.8692L1439.55 78.9141C1442.4 81.7313 1444 85.5687 1444 89.5723V508.355H4V400.181Z" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="4" y1="268" x2="1444" y2="268" gradientUnits="userSpaceOnUse">
                <stop offset="0.474" stopColor="#7954FB" />
                <stop offset="1" stopColor="#2D1B69" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}