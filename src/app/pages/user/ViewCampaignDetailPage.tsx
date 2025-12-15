import { useState } from 'react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-c93d13tepm';
//import svgPathsOld from '../../../imports/svg-b7s8fpxdl4';
//import imgRectangle115 from 'figma:asset/0e961f9582aec77a34bf07fab9ef41a1b7c868ad.png';
// from 'figma:asset/2d90d1ffe99df5817a38c395c08ec5116a7be340.png';
//import imgRectangle141 from 'figma:asset/87102388d503206b3b0fb177ad63642a9945094b.png';
//import imgEllipse34 from 'figma:asset/e44d5cd688ebcf29969455cdd422abc0ede80023.png';
//import imgEllipse35 from 'figma:asset/4b26bfd150174ba0370dd3bfeef0c80dcb584d88.png';
//import imgEllipse36 from 'figma:asset/d770c99e932e76eba63bc37ec25fdba69d4b4874.png';
import type { Page } from '../../types/navigation';
//type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'selectServices' | 'viewCampaignDetail' | 'helpSupport' | 'serviceProviders';

interface ViewCampaignDetailPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
}

export function ViewCampaignDetailPage({ onNavigate, onLogout, onShowNotifications, hasUnreadNotifications, onShowCart }: ViewCampaignDetailPageProps) {
  const [searchEmail, setSearchEmail] = useState('');

  const members = [
    {
      name: 'Alice',
      status: 'Up to date',
      progress: 75,
      avatar: '/assets/e44d5cd688ebcf29969455cdd422abc0ede80023.png',
    },
    {
      name: 'John',
      status: 'Up to date',
      progress: 100,
      avatar: '/assets/4b26bfd150174ba0370dd3bfeef0c80dcb584d88.png',
    },
    {
      name: 'Jabulani',
      status: 'Pending',
      progress: 0,
      avatar: '/assets/d770c99e932e76eba63bc37ec25fdba69d4b4874.png',
    },
  ];

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <UserSidebar activePage="campaigns" onNavigate={onNavigate} onLogout={onLogout} onShowNotifications={onShowNotifications} hasUnreadNotifications={hasUnreadNotifications} onShowCart={onShowCart} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-[#f9fafb]">
        {/* Top Navbar */}
        <div className="h-[60px] bg-white border-b border-gray-300 flex items-center justify-between px-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative bg-[#f5f5fa] rounded-xl shadow-[inset_2px_2px_4px_rgba(170,170,204,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent px-4 py-2 font-['SF_Pro_Rounded',sans-serif] text-[#7878ab] text-sm outline-none"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#f5f5fa] rounded-full shadow-[2px_2px_4px_rgba(170,170,204,0.5),-2px_-2px_4px_#ffffff] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p250aca00} fill="#7878AB" fillRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Create Button */}
            <button
              onClick={() => onNavigate('serviceProviders')}
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

        {/* Content */}
        <div className="px-8 py-6 max-w-[900px]">
          {/* Hero Image */}
          <div className="mb-6 rounded-[16px] overflow-hidden">
            <img
              src={'/assets/0e961f9582aec77a34bf07fab9ef41a1b7c868ad.png'}
              alt="Cape Town"
              className="w-full h-[248px] object-cover"
            />
          </div>

          {/* Service Provider Section */}
          <div className="bg-white rounded-[16px] p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black">Service Provider</h2>
              <button className="flex items-center gap-2 text-[#8363f2] hover:text-[#7354e1] transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p111a8b00} stroke="#8363F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p149f2980} stroke="#8363F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="font-['Inter',sans-serif] text-[16px]">Edit</span>
              </button>
            </div>

            {/* Seaview Lodge */}
            <div className="flex items-start gap-3 mb-4">
              <img src={'/assets/2d90d1ffe99df5817a38c395c08ec5116a7be340.png'} alt="Seaview Lodge" className="w-[48px] h-[48px] rounded-[8px] object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-['Inter',sans-serif] text-[16px] font-medium text-black">Seaview Lodge</h3>
                  <div className="flex items-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p175bda00} fill="#FFA500" />
                    </svg>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p175bda00} fill="#FFA500" />
                    </svg>
                    <span className="ml-1 font-['Inter',sans-serif] text-[12px] text-[#6b7280]">(24 Reviews)</span>
                  </div>
                </div>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">Cape town | Accommodation</p>
              </div>
            </div>

            {/* TasteBites Catering */}
            <div className="flex items-start gap-3">
              <img src={'/assets/87102388d503206b3b0fb177ad63642a9945094b.png'} alt="TasteBites Catering" className="w-[48px] h-[48px] rounded-[8px] object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-['Inter',sans-serif] text-[16px] font-medium text-black">TasteBites Catering</h3>
                  <div className="flex items-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p175bda00} fill="#FFA500" />
                    </svg>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p175bda00} fill="#FFA500" />
                    </svg>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p175bda00} fill="#FFA500" />
                    </svg>
                    <span className="ml-1 font-['Inter',sans-serif] text-[12px] text-[#6b7280]">(24 Reviews)</span>
                  </div>
                </div>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">Durban | Food</p>
              </div>
            </div>
          </div>

          {/* Campaign Goal Section */}
          <div className="bg-white rounded-[16px] p-6 mb-6">
            <h2 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black mb-4">Campaign Goal</h2>
            
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p15e9a900} fill="#8363F2" />
                </svg>
                <span className="font-['Inter',sans-serif] text-[14px] text-black">Goal-R10 000.00</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',sans-serif] text-[14px] text-black">Contributed -R3 000.00</span>
                <span className="font-['Inter',sans-serif] text-[14px] font-semibold text-black">30%</span>
              </div>
            </div>

            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div className="absolute left-0 top-0 h-full bg-[#8363f2] w-[30%]" />
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p1b99f400} stroke="#8363F2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span className="font-['Inter',sans-serif] text-[14px] text-black">Sep 1</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p1eb53800} fill="#000000" />
              </svg>
              <span className="font-['Inter',sans-serif] text-[14px] text-black">Dec 5, 2025</span>
            </div>
          </div>

          {/* Members Section */}
          <div className="bg-white rounded-[16px] p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black">Members</h2>
              <button 
                onClick={() => onNavigate('contributors')}
                className="px-6 py-2 bg-[#8363f2] hover:bg-[#7354e1] text-white rounded-[8px] font-['Inter',sans-serif] text-[14px] font-medium transition-colors"
              >
                Campaign performance
              </button>
            </div>

            <div className="space-y-4">
              {members.map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <h3 className="font-['Inter',sans-serif] text-[14px] font-medium text-black">{member.name}</h3>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#8363f2]">{member.status}</p>
                      </div>
                    </div>
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#8363f2]"
                        style={{ width: `${member.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="font-['Inter',sans-serif] text-[14px] font-medium text-black w-12 text-right">{member.progress}%</span>
                  <button className="text-[#8363f2] hover:text-[#7354e1] font-['Inter',sans-serif] text-[14px] font-medium transition-colors">
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Invites Members Section */}
          <div className="bg-white rounded-[16px] p-6 mb-6">
            <h2 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black mb-4">Invites Members</h2>
            
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search by Username or email"
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  className="w-full h-[48px] px-4 pr-12 border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[14px] text-black outline-none focus:border-[#8363f2]"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
              </div>
              <button className="px-6 py-3 bg-[#8363f2] hover:bg-[#7354e1] text-white rounded-[8px] font-['Inter',sans-serif] text-[16px] font-medium transition-colors">
                Invite
              </button>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => onNavigate('campaigns')}
              className="px-8 py-3 border border-gray-300 bg-white hover:bg-gray-50 text-black rounded-[8px] font-['Inter',sans-serif] text-[16px] font-medium transition-colors"
            >
              Back
            </button>
            <button className="px-8 py-3 bg-[#8363f2] hover:bg-[#7354e1] text-white rounded-[8px] font-['Inter',sans-serif] text-[16px] font-medium transition-colors">
              Pause Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}