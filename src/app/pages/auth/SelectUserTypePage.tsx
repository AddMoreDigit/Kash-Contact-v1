import type { Page } from '@/types/page.type';
import { User, Building2, Briefcase } from 'lucide-react';
import { Logo } from './components/layout';

interface SelectUserTypePageProps {
  onNavigate: (page: Page) => void;
  onSelectUserType: (type: 'user' | 'vendor' | 'corporate') => void;
}

export function SelectUserTypePage({ onNavigate, onSelectUserType }: SelectUserTypePageProps) {
  const handleSelectType = (type: 'user' | 'vendor' | 'corporate') => {
    onSelectUserType(type);
    onNavigate('login');
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="mb-12">
        <Logo className="h-10" />
      </div>

      {/* Title */}
      <h1 className="mb-3 text-center">Welcome to Kash Contact</h1>
      <p className="text-gray-600 mb-12 text-center max-w-md">
        Please select your account type to continue
      </p>

      {/* User Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* User Card */}
        <button
          onClick={() => handleSelectType('user')}
          className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#8363f2] hover:shadow-lg transition-all group cursor-pointer"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#8363f2] transition-colors">
              <User className="w-10 h-10 text-[#8363f2] group-hover:text-white transition-colors" />
            </div>
            <h2 className="mb-3 text-gray-900">User</h2>
            <p className="text-gray-600 text-sm">
              Individual users who want to create and contribute to campaigns
            </p>
          </div>
        </button>

        {/* Vendor Card */}
        <button
          onClick={() => handleSelectType('vendor')}
          className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#8363f2] hover:shadow-lg transition-all group cursor-pointer"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#8363f2] transition-colors">
              <Briefcase className="w-10 h-10 text-[#8363f2] group-hover:text-white transition-colors" />
            </div>
            <h2 className="mb-3 text-gray-900">Vendor</h2>
            <p className="text-gray-600 text-sm">
              Service providers who offer accommodation, activities, and more
            </p>
          </div>
        </button>

        {/* Corporate Card */}
        <button
          onClick={() => handleSelectType('corporate')}
          className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#8363f2] hover:shadow-lg transition-all group cursor-pointer"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#8363f2] transition-colors">
              <Building2 className="w-10 h-10 text-[#8363f2] group-hover:text-white transition-colors" />
            </div>
            <h2 className="mb-3 text-gray-900">Corporate</h2>
            <p className="text-gray-600 text-sm">
              Companies managing team events and corporate campaigns
            </p>
          </div>
        </button>
      </div>

      {/* Footer Text */}
      <p className="text-gray-500 text-sm mt-12">
        Don&apos;t have an account?{' '}
        <button
          onClick={() => onNavigate('signup')}
          className="text-[#8363f2] hover:underline cursor-pointer"
        >
          Sign up here
        </button>
      </p>
    </div>
  );
}
