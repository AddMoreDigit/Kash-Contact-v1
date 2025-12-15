import { useState } from 'react';
import { User, Store, Building2, ChevronRight } from 'lucide-react';
import type { Page } from '@/types/page.type';
import { Logo } from './components/layout';

interface SignUpPageProps {
  onNavigate: (page: Page) => void;
  onSignUp?: (accountType: 'user' | 'vendor' | 'corporate') => void;
}

export function SignUpPage({ onNavigate, onSignUp }: SignUpPageProps) {
  const [selectedType, setSelectedType] = useState<'user' | 'vendor' | 'corporate' | null>(null);

  const handleSelectType = (type: 'user' | 'vendor' | 'corporate') => {
    setSelectedType(type);
    // Navigate to detailed signup page for all account types
    setTimeout(() => {
      if (onSignUp) {
        onSignUp(type);
      }
    }, 300);
  };

  console.log('selectedType',selectedType);

  const handleBack = () => {
    onNavigate('selectUserType');
  };

  return (
    <div className="bg-white flex w-full min-h-screen">
      {/* Left Section - Purple Background */}
      <div className="w-[49%] bg-[#E5DEFF] relative flex flex-col py-8 px-12">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity cursor-pointer"
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
            Please select your account type to continue
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
          {/* <h2 className="text-3xl text-black mb-8 text-center">
            Sign Up
          </h2> */}

          {/* Account Type Options */}
          <div className="space-y-4">
            {/* As User */}
            <button
              onClick={() => handleSelectType('user')}
              className="w-full p-4 rounded-2xl bg-[#E5DEFF] border border-transparent transition-all flex items-center justify-between group hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <User size={24} className="text-[#8363F2]" />
                </div>
                <div className="text-left">
                  <h3 className="text-[#8363F2] mb-0.5" style={{ fontSize: '15px' }}>As User</h3>
                  <p className="text-[#8363F2]" style={{ fontSize: '12px' }}>
                    Create or join savings groups to reach your financial goal together.
                  </p>
                </div>
              </div>
              <ChevronRight size={20} className="text-[#8363F2]" />
            </button>

            {/* As Vendor */}
            <button
              onClick={() => handleSelectType('vendor')}
              className="w-full p-4 rounded-2xl bg-white border border-gray-200 transition-all flex items-center justify-between group hover:border-[#8363F2] hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#030213] flex items-center justify-center">
                  <Store size={24} className="text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-gray-900 mb-0.5" style={{ fontSize: '15px' }}>As Vendor</h3>
                  <p className="text-gray-600" style={{ fontSize: '12px' }}>
                    Offer your services or product to savings groups and get paid securely.
                  </p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400 group-hover:text-[#8363F2]" />
            </button>

            {/* As Corporate */}
            <button
              onClick={() => handleSelectType('corporate')}
              className="w-full p-4 rounded-2xl bg-white border border-gray-200 transition-all flex items-center justify-between group hover:border-[#8363F2] hover:shadow-md  cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#030213] flex items-center justify-center">
                  <Building2 size={24} className="text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-gray-900 mb-0.5" style={{ fontSize: '15px' }}>As Corporate</h3>
                  <p className="text-gray-600" style={{ fontSize: '12px' }}>
                    Manage multiples group and campaigns with advanced business tool.
                  </p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400 group-hover:text-[#8363F2]" />
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-8">
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