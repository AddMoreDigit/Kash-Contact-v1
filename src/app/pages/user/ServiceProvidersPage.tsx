import { useState } from 'react';
import { toast } from 'sonner';
import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-c93d13tepm';
//import imgRectangle137 from 'figma:asset/2d90d1ffe99df5817a38c395c08ec5116a7be340.png';
//import imgRectangle143 from 'figma:asset/e646802d554bb1fa6ce3ceb35bf48236c77c77e1.png';
//import imgRectangle138 from 'figma:asset/87102388d503206b3b0fb177ad63642a9945094b.png';
//import imgRectangle144 from 'figma:asset/9f1f8c1da3629502bc71901baf4363bbeeeff080.png';
//import imgRectangle139 from 'figma:asset/5d9bf658577635a939c9246246e5a8bf87eb8ec2.png';
//import imgRectangle145 from 'figma:asset/09008cafd958ef228fae370333984be464a418ff.png';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'corporateDashboard' | 'serviceProviders';

interface ServiceProvidersPageProps {
  onNavigate: (page: Page) => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
  onSearch?: (query: string) => void;
  onLogout?: () => void;
}

export function ServiceProvidersPage({ 
  onNavigate, 
  onShowNotifications, 
  hasUnreadNotifications = false, 
  onShowCart,
  onSearch,
  onLogout
}: ServiceProvidersPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const serviceProviders = [
    {
      id: '1',
      name: 'Blue Water Hotel',
      location: 'Durban',
      category: 'accommodation',
      image: '/assets/e646802d554bb1fa6ce3ceb35bf48236c77c77e1.png'
    },
    {
      id: '2',
      name: 'Lekkeslaap',
      location: 'Durban',
      category: 'food service & Motel',
      image: '/assets/9f1f8c1da3629502bc71901baf4363bbeeeff080.png'
    },
    {
      id: '3',
      name: 'Cape town Beach',
      location: 'Cape town',
      category: 'Accommodation',
      image: '/assets/09008cafd958ef228fae370333984be464a418ff.png'
    },
    {
      id: '4',
      name: 'Seaview Lodge',
      location: 'Cape town',
      category: 'accomodation',
      image: '/assets/2d90d1ffe99df5817a38c395c08ec5116a7be340.png'
    },
    {
      id: '5',
      name: 'Tastebites catering',
      location: 'Durban',
      category: 'food service',
      image: '/assets/87102388d503206b3b0fb177ad63642a9945094b.png'
    },
    {
      id: '6',
      name: 'Island paradise',
      location: 'Zanzibar',
      category: 'Accommodation',
      image: '/assets/5d9bf658577635a939c9246246e5a8bf87eb8ec2.png'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <UserSidebar
        activePage="dashboard"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-[60px] bg-white border-b border-gray-300 flex items-center justify-between px-6">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative bg-[#f5f5fa] rounded-xl shadow-[inset_2px_2px_4px_rgba(170,170,204,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent px-4 py-2 font-['SF_Pro_Rounded',sans-serif] text-[#7878ab] text-sm outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#f5f5fa] rounded-full shadow-[2px_2px_4px_rgba(170,170,204,0.5),-2px_-2px_4px_#ffffff] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p250aca00} fill="#7878AB" fillRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Create Button */}
            <button
              onClick={() => onNavigate('createCampaign')}
              className="bg-[#8363f2] hover:bg-[#7354e1] text-white px-6 py-2 rounded-lg font-['Inter',sans-serif] text-[14px] font-medium transition-colors"
            >
              Create
            </button>

            {/* Bell Icon */}
            <button
              onClick={onShowNotifications}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p12cfc680} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              {hasUnreadNotifications && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </button>

            {/* Shopping Cart Icon */}
            <button
              onClick={onShowCart}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3422b400} fill="#202020" />
              </svg>
            </button>

            {/* Profile Avatar */}
            <button 
              onClick={onShowNotifications}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <g clipPath="url(#clip0_8_2090)">
                  <path d={svgPaths.p10fc6980} fill="black" />
                  <path d={svgPaths.p1534e400} fill="#EEEEEE" fillOpacity="0.933333" />
                  <path d={svgPaths.p38192080} fill="#EEEEEE" fillOpacity="0.933333" />
                </g>
                <defs>
                  <clipPath id="clip0_8_2090">
                    <rect fill="white" height="24" width="24" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-gray-50 overflow-auto">
          <div className="p-8">
            {/* Service Providers Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Inter',sans-serif] font-semibold text-[20px] text-gray-900">
                Service Providers
              </h2>
              
              <div className="flex items-center gap-3">
                {/* Filter By Button */}
                <button
                  onClick={() => toast.success('Opening filters')}
                  className="flex items-center gap-2 px-4 py-2 border border-[#8363f2] rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 26 26">
                    <path d={svgPaths.peb16000} stroke="#2D1B69" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  </svg>
                  <span className="font-['Inter',sans-serif] text-[14px] text-black">Filter By</span>
                </button>

                {/* See all Button */}
                <button
                  onClick={() => toast.success('Showing all providers')}
                  className="px-4 py-2 border border-[#8363f2] rounded-lg hover:bg-gray-50 transition-colors font-['Inter',sans-serif] text-[14px] text-black"
                >
                  See all
                </button>
              </div>
            </div>

            {/* Service Provider Cards - 3 Column Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {serviceProviders.map((provider) => (
                <button
                  key={provider.id}
                  onClick={() => onNavigate('serviceDetail')}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow text-left group"
                >
                  <div className="h-[160px] w-full overflow-hidden">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-['Inter',sans-serif] font-semibold text-[16px] text-gray-900 mb-1">
                      {provider.name}
                    </h3>
                    <p className="font-['Inter',sans-serif] text-[12px] text-gray-600">
                      {provider.location} / {provider.category}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center">
              <button
                onClick={() => toast.success('Loading more providers...')}
                className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-50 transition-colors font-['Inter',sans-serif] text-[14px] text-gray-600"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
