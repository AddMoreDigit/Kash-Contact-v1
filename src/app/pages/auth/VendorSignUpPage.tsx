import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import type { Page } from '@/types/page.type';
import { toast } from 'sonner';
import { Logo } from './components/layout';
import { signUp, resendSignUpCode } from "aws-amplify/auth";

interface VendorSignUpPageProps {
  onNavigate: (page: Page) => void;
  onSignUp?: (userData: VendorSignUpData) => void;
  accountType?: 'user' | 'vendor' | 'corporate';
  onCreateAccount?: (email: string) => void;
}

export interface VendorSignUpData {
  businessName: string;
  businessEmail: string;
  password: string;
  acceptedTerms: boolean;
  accountType: 'user' | 'vendor' | 'corporate';
}

export function VendorSignUpPage({ onNavigate, onSignUp, accountType = 'vendor', onCreateAccount }: VendorSignUpPageProps) {
  const [businessName, setBusinessName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<{
    businessName?: string;
    businessEmail?: string;
    password?: string;
    terms?: string;
  }>({});

  // Dynamic text based on account type
  const getAccountTypeText = () => {
    switch (accountType) {
      case 'user':
        return 'User';
      case 'vendor':
        return 'Vendor';
      case 'corporate':
        return 'Corporate';
      default:
        return 'Vendor';
    }
  };

  const getNameFieldLabel = () => {
    switch (accountType) {
      case 'user':
        return 'Full Name';
      case 'vendor':
        return 'Business Name';
      case 'corporate':
        return 'Company Name';
      default:
        return 'Business Name';
    }
  };

  const getEmailFieldLabel = () => {
    switch (accountType) {
      case 'user':
        return 'Email Address';
      case 'vendor':
        return 'Business Email Address';
      case 'corporate':
        return 'Corporate Email Address';
      default:
        return 'Business Email Address';
    }
  };

  const getNamePlaceholder = () => {
    switch (accountType) {
      case 'user':
        return 'Enter full name';
      case 'vendor':
        return 'Enter business name';
      case 'corporate':
        return 'Enter company name';
      default:
        return 'Enter business name';
    }
  };

  const getEmailPlaceholder = () => {
    switch (accountType) {
      case 'user':
        return 'Enter email address';
      case 'vendor':
        return 'Enter business email address';
      case 'corporate':
        return 'Enter corporate email address';
      default:
        return 'Enter business email address';
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!businessName.trim()) {
      newErrors.businessName = `${getNameFieldLabel()} is required`;
    }

    if (!businessEmail.trim()) {
      newErrors.businessEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!acceptedTerms) {
      newErrors.terms = 'You must accept the policy and terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }



    try {

      const { isSignUpComplete } = await signUp({
        username: businessEmail,
        password: password,
        options: {
          userAttributes: {
            email: businessEmail,
            // Try without 'custom:' prefix since fullname is a standard attribute
            fullname: businessName,
            "custom:accountType": accountType
          },
          autoSignIn: true
        }
      });

      if (!isSignUpComplete) {
        toast.success('Account created! Please check your email for verification.');
        onNavigate('otpVerification');
      } else {
        toast.success('Account created successfully!');
        onNavigate('login');
      }

    } catch (error: any) {
      console.error('Signup error:', error);

      if (error.name === 'UsernameExistsException') {
        toast.error('An account with this email already exists');
      } else {
        toast.error('Signup failed. Please try again.');
      }
    }
  };

  const handleBack = () => {
    onNavigate('signup');
  };

  return (
    <div className="bg-white flex w-full min-h-screen">
      {/* Left Section - Purple Background */}
      <div className="w-[49%] bg-[#E5DEFF] relative flex flex-col py-8 px-12">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
            >
              <path
                d="M9 1L1 9L9 17"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-black text-base">back</span>
        </button>

        {/* Black Panel */}
        <div className="bg-black flex-1 flex flex-col justify-center px-12 rounded-lg">
          <h1 className="text-white text-4xl mb-4">Hi</h1>
          <h2 className="text-white text-6xl mb-6">Sign up</h2>
          <p className="text-white text-lg">
            Please continue signing up as {getAccountTypeText()}
          </p>
        </div>
      </div>

      {/* Right Section - White Background */}
      <div className="w-[51%] bg-white flex flex-col items-center py-12 px-16 pb-32 relative overflow-hidden mt-20">
        {/* Logo */}
        <div className="mb-12">
          <Logo className="h-10" />
        </div>

        {/* Form */}
        <div className="w-full max-w-md">
          <h2 className="text-3xl text-black mb-8 text-center">
            Create Account
          </h2>

          {/* Business Name */}
          <div className="mb-6">
            <label className="text-sm text-gray-700 mb-2 block">
              {getNameFieldLabel()} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => {
                setBusinessName(e.target.value);
                if (errors.businessName) {
                  setErrors({ ...errors, businessName: undefined });
                }
              }}
              placeholder={getNamePlaceholder()}
              className="w-full px-4 py-3 border border-gray-400 rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors"
            />
            {errors.businessName && (
              <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>
            )}
          </div>

          {/* Business Email */}
          <div className="mb-6">
            <label className="text-sm text-gray-700 mb-2 block">
              {getEmailFieldLabel()} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={businessEmail}
              onChange={(e) => {
                setBusinessEmail(e.target.value);
                if (errors.businessEmail) {
                  setErrors({ ...errors, businessEmail: undefined });
                }
              }}
              placeholder={getEmailPlaceholder()}
              className="w-full px-4 py-3 border border-gray-400 rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors"
            />
            {errors.businessEmail && (
              <p className="text-red-500 text-xs mt-1">{errors.businessEmail}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm text-gray-700 mb-2 block">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors({ ...errors, password: undefined });
                  }
                }}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-400 rounded-md text-sm outline-none focus:border-[#8363f2] transition-colors pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-600 cursor-pointer" />
                ) : (
                  <Eye size={18} className="text-gray-600 cursor-pointer" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="mb-6 flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => {
                setAcceptedTerms(e.target.checked);
                if (errors.terms) {
                  setErrors({ ...errors, terms: undefined });
                }
              }}
              className="w-4 h-4 mt-0.5 accent-[#8363f2] cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
              I accept the policy and terms
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-xs -mt-4 mb-4">{errors.terms}</p>
          )}

          {/* Sign Up Button */}
          <button
            onClick={handleSignUp}
            className="w-full bg-[#8363f2] text-white py-3 rounded-md text-base text-center hover:bg-[#7354e1] transition-colors mb-6 cursor-pointer"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => onNavigate('login')}
              className="text-[#8363f2] underline hover:opacity-80 transition-opacity cursor-pointer"
            >
              Login here
            </button>
          </p>
        </div>

        {/* Purple Gradient Bottom Right */}
        <div className="absolute bottom-0 right-0 w-full h-64 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 624 330"
            fill="none"
            className="absolute -bottom-10 -right-20 w-[800px] h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M4 400.181C4 364.45 27.6277 333.026 61.953 323.103L132 302.855L272.5 260.855L1257.13 4.98589C1310.06 -8.76888 1366.32 6.38745 1405.18 44.8692L1439.55 78.9141C1442.4 81.7313 1444 85.5687 1444 89.5723V508.355H4V400.181Z"
              fill="url(#gradient)"
            />
            <defs>
              <linearGradient
                id="gradient"
                x1="4"
                y1="268"
                x2="1444"
                y2="268"
                gradientUnits="userSpaceOnUse"
              >
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