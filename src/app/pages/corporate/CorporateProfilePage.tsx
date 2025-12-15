import { useState } from 'react';
import { Edit } from 'lucide-react@0.487.0';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { toast, Toaster } from 'sonner@2.0.3';
import { CorporateSidebar } from '../../components/layout/CorporateSidebar';
import svgPaths from '../../../imports/svg-4r9luip754';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'messageChat' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'myCampaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'viewCampaignDetail' | 'serviceProviders' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'vendorProfile' | 'vendorCampaigns' | 'vendorServices' | 'vendorTransactions' | 'vendorOverview' | 'vendorDrafts' | 'vendorHelp' | 'vendorInvoice' | 'vendorReport' | 'approveBookingRequest' | 'editBooking' | 'corporateDashboard' | 'corporateCampaigns' | 'corporateProfile' | 'corporateCampaignDetail' | 'corporateSchedule' | 'corporateTransactions' | 'corporateVouchers' | 'corporateOverview' | 'corporateDrafts' | 'corporateHelp' | 'corporateGoalsTracker' | 'corporateTransactionsTable';

interface CorporateProfilePageProps {
  onNavigate: (page: Page) => void;
}

export function CorporateProfilePage({ onNavigate }: CorporateProfilePageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const [securityInfo] = useState({
    password: '**********',
    twoFactorAuth: 'Off',
    recoveryEmail: 'Vukonahlayisi@gmail.com',
  });

  const profileCompletion = 50;

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <CorporateSidebar
        activePage="corporateProfile"
        onNavigate={onNavigate}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <div className="h-[88px] border-b border-gray-200 flex items-center px-8 shrink-0 relative">
          {/* Left side - Menu Collapse button */}
          <div className="absolute left-8 top-[24px]">
            <svg className="w-[23px] h-[24px]" fill="none" viewBox="0 0 23 24">
              <path d="M1 1L1 23" stroke="#2D1B69" strokeLinecap="round" strokeWidth="2" />
              <path d={svgPaths.p2692800} fill="#8363F2" />
            </svg>
          </div>

          {/* Center - Search Bar */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative bg-[#f5f5f5] w-[433px] h-[50px] rounded-[50px] border border-gray-300">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-full bg-transparent pl-5 pr-14 font-['Inter',sans-serif] text-[16px] text-gray-700 outline-none placeholder:text-gray-400"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#888" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Create button and Icons */}
          <div className="absolute right-8 flex items-center gap-4">
            {/* Create Button */}
            <button className="bg-[#8363f2] px-6 h-[56px] rounded-[8px] flex items-center justify-center text-white font-['Inter',sans-serif] text-[20px] min-w-[150px]">
              Create
            </button>

            {/* Bell Icon */}
            <button className="w-6 h-6 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 26 26">
                <path d={svgPaths.p12cfc680} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>

            {/* Shopping Cart Icon */}
            <button className="w-6 h-6 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3422b400} fill="#202020" />
              </svg>
            </button>

            {/* Profile Avatar */}
            <button className="w-6 h-6 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <clipPath id="clip0_profile">
                  <rect fill="white" height="24" width="24" />
                </clipPath>
                <g clipPath="url(#clip0_profile)">
                  <path d={svgPaths.p10fc6980} fill="black" />
                  <path d={svgPaths.p1534e400} fill="#EEEEEE" fillOpacity="0.933333" />
                  <path d={svgPaths.p38192080} fill="#EEEEEE" fillOpacity="0.933333" />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="flex-1 overflow-y-auto bg-white px-8 py-6">
          {/* Header Banner */}
          <div className="relative mb-6 rounded-tl-[20px] rounded-tr-[20px] overflow-hidden h-[200px]">
            <ImageWithFallback 
              src="figma:asset/bbde86a05fc5773e3efd28dbbd6d3c31471af107.png"
              alt="Corporate Banner" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Company Name and Edit Button */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black">Add more Digital</h1>
            </div>
            <button 
              onClick={() => toast.success('Edit functionality coming soon')}
              className="font-['Inter',sans-serif] text-[14px] text-[#8363f2] hover:underline flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
          </div>

          {/* Corporate Information Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-['Inter',sans-serif] text-[18px] font-semibold text-black">Corporate information</h2>
              <button 
                onClick={() => toast.success('Edit functionality coming soon')}
                className="font-['Inter',sans-serif] text-[14px] text-[#8363f2] hover:underline flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit
              </button>
            </div>
            
            <div className="space-y-3 font-['Inter',sans-serif] text-[14px] text-gray-700">
              <div>Full names</div>
              <div>Email</div>
              <div>Phone number</div>
              <div>Address</div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
            <h2 className="font-['Inter',sans-serif] text-[18px] font-semibold text-black mb-5">Security</h2>
            
            <div className="space-y-3 font-['Inter',sans-serif] text-[14px]">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Password</span>
                <span className="text-black">{securityInfo.password}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Two-Factor Authentication</span>
                <span className="text-gray-500">{securityInfo.twoFactorAuth}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Recovery Email</span>
                <span className="text-black">{securityInfo.recoveryEmail}</span>
              </div>
            </div>
          </div>

          {/* Complete Your Profile Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="font-['Inter',sans-serif] text-[18px] font-semibold text-black mb-5">Complete Your Profile</h2>
            
            <div className="flex items-start justify-between">
              <div className="space-y-3 flex-1 font-['Inter',sans-serif] text-[14px]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="7" fill="#14AE5C" stroke="#14AE5C" strokeWidth="1" />
                    <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-black">Setup Account <span className="text-gray-500">50%</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="7" fill="#14AE5C" stroke="#14AE5C" strokeWidth="1" />
                    <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-black">Upload your photo <span className="text-gray-500">5%</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="7" fill="#14AE5C" stroke="#14AE5C" strokeWidth="1" />
                    <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-black">Personal information <span className="text-gray-500">5%</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                  <span className="text-black">Location <span className="text-gray-500">0%</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="7" fill="#14AE5C" stroke="#14AE5C" strokeWidth="1" />
                    <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-black">Bank Details <span className="text-[#14AE5C]">100%</span></span>
                </div>
              </div>

              {/* Progress Circle */}
              <div className="relative w-[200px] h-[200px] flex-shrink-0 flex items-center justify-center ml-8">
                {/* Background Circle */}
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="85" fill="none" stroke="#E5E7EB" strokeWidth="16" />
                </svg>
                {/* Progress Circle */}
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 200 200">
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="85" 
                    fill="none" 
                    stroke="#8363F2" 
                    strokeWidth="16"
                    strokeDasharray={`${(profileCompletion / 100) * (2 * Math.PI * 85)} ${2 * Math.PI * 85}`}
                    strokeLinecap="round"
                  />
                </svg>
                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-['Inter',sans-serif] text-[32px] font-semibold text-black">{profileCompletion}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}