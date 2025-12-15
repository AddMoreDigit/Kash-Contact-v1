import { useState } from 'react';
import { Calendar, AlignJustify } from 'lucide-react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-c93d13tepm';
//import svgPathsSearch from '../../../imports/svg-balext371s';
// import imgRectangle115 from 'figma:asset/0e961f9582aec77a34bf07fab9ef41a1b7c868ad.png';
// import imgRectangle120 from 'figma:asset/61798ab28bf7b93c89df5d8aaefacc49a0f1de1d.png';
// import imgEllipse34 from 'figma:asset/2fc4b373dd85a6869cf572c5f63c4cccb3cd1ec0.png';
// import imgEllipse35 from 'figma:asset/6d6828c6accb3c6c74ecaf7d5c9614b0fa026e28.png';
// import imgEllipse36 from 'figma:asset/14e5699a8399d12dd79e85db4e560c982e664a8c.png';
// import imgEllipse37 from 'figma:asset/7c725d2e94b4ad503c42f0fe908638a5861386b4.png';

const imgRectangle115 = new URL(
  '../../../assets/0e961f9582aec77a34bf07fab9ef41a1b7c868ad.png',
  import.meta.url
).href;

const imgRectangle120 = new URL(
  '../../../assets/61798ab28bf7b93c89df5d8aaefacc49a0f1de1d.png',
  import.meta.url
).href;

const imgEllipse34 = new URL(
  '../../../assets/2fc4b373dd85a6869cf572c5f63c4cccb3cd1ec0.png',
  import.meta.url
).href;

const imgEllipse35 = new URL(
  '../../../assets/6d6828c6accb3c6c74ecaf7d5c9614b0fa026e28.png',
  import.meta.url
).href;

const imgEllipse36 = new URL(
  '../../../assets/14e5699a8399d12dd79e85db4e560c982e664a8c.png',
  import.meta.url
).href;

const imgEllipse37 = new URL(
  '../../../assets/7c725d2e94b4ad503c42f0fe908638a5861386b4.png',
  import.meta.url
).href;
import type { Page } from '../../types/navigation';

interface CampaignsPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
}

interface Campaign {
  id: number;
  title: string;
  image: string;
  serviceProvider: string;
  catering?: string;
  startDate: string;
  endDate: string;
  goal: number;
  contributed: number;
  members: string[];
  buttonText: string;
  buttonClass: string;
  status?: 'Pending' | 'Approved';
}

export function CampaignsPage({ onNavigate, onLogout, onShowNotifications, hasUnreadNotifications, onShowCart }: CampaignsPageProps) {
  // Load campaigns from localStorage
  const loadCampaigns = (): Campaign[] => {
    const staticCampaigns: Campaign[] = [
      {
        id: 1,
        title: 'Cape Town Gateway Weekend',
        image: imgRectangle115,
        serviceProvider: 'Seaview Lodge',
        catering: 'Tasteless Catering',
        startDate: 'Sep 1',
        endDate: 'Dec 5, 2025',
        goal: 10000.00,
        contributed: 3000.00,
        members: [imgEllipse34, imgEllipse35, imgEllipse36, imgEllipse37],
        buttonText: 'Contribute',
        buttonClass: 'bg-[#2d1b69]',
        status: 'Approved'
      },
      {
        id: 2,
        title: 'Durban Beach Escape',
        image: imgRectangle120,
        serviceProvider: 'Seaview Lodge',
        catering: 'TasteBiles Catering',
        startDate: 'Sep 1',
        endDate: 'Dec 5, 2025',
        goal: 20000.00,
        contributed: 13000.00,
        members: [imgEllipse34, imgEllipse35, imgEllipse36, imgEllipse37],
        buttonText: 'Manage',
        buttonClass: 'bg-[#2d1b69]',
        status: 'Approved'
      }
    ];

    const storedCampaigns = localStorage.getItem('activeCampaigns');
    if (storedCampaigns) {
      const dynamicCampaigns = JSON.parse(storedCampaigns);
      return [...dynamicCampaigns, ...staticCampaigns];
    }
    
    return staticCampaigns;
  };

  const [campaigns] = useState<Campaign[]>(loadCampaigns());

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <UserSidebar activePage="campaigns" onNavigate={onNavigate} onLogout={onLogout} onShowNotifications={onShowNotifications} hasUnreadNotifications={hasUnreadNotifications} onShowCart={onShowCart} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
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
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black mb-1">Campaigns</h1>
              <p className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">Here are your ongoing campaigns</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => onNavigate('campaignSchedule')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Calendar size={20} className="text-gray-600" />
              </button>
              <button className="px-4 py-2 flex items-center gap-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <AlignJustify size={16} className="text-gray-600" />
                <span className="font-['Inter',sans-serif] text-[14px] text-black">Sort by</span>
              </button>
            </div>
          </div>

          {/* Campaign Cards */}
          <div className="space-y-6">
            {campaigns.map((campaign) => {
              const percentage = Math.round((campaign.contributed / campaign.goal) * 100);
              
              return (
                <div key={campaign.id} className="bg-white rounded-[12px] border border-gray-200 overflow-hidden">
                  {/* Campaign Image */}
                  <div className="relative h-[200px]">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Campaign Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h2 className="font-['Inter',sans-serif] text-[18px] font-semibold text-black">{campaign.title}</h2>
                          {campaign.status && (
                            <span className={`px-3 py-1 rounded-full font-['Inter',sans-serif] text-[12px] font-medium ${
                              campaign.status === 'Pending' 
                                ? 'bg-[#fef3c7] text-[#92400e]' 
                                : 'bg-[#d1fae5] text-[#065f46]'
                            }`}>
                              {campaign.status}
                            </span>
                          )}
                        </div>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">Service Provider</p>
                      </div>
                      <button
                        onClick={() => onNavigate(campaign.buttonText === 'Contribute' ? 'contribute' : 'viewCampaignDetail')}
                        className={`${campaign.buttonClass} hover:opacity-90 text-white px-6 py-2 rounded-[8px] font-['Inter',sans-serif] text-[14px] font-medium transition-opacity`}
                      >
                        {campaign.buttonText}
                      </button>
                    </div>

                    {/* Service Providers */}
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p16e84200} fill="#2D1B69" />
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[12px] text-black">{campaign.serviceProvider}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p11da5e30} fill="#2D1B69" />
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[12px] text-black">{campaign.catering}</span>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p1a23c500} fill="#2D1B69" />
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[12px] text-black">Campaign Members</span>
                        <div className="flex -space-x-2 ml-1">
                          {campaign.members.map((member, idx) => (
                            <img
                              key={idx}
                              src={member}
                              alt=""
                              className="w-6 h-6 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p1b99f400} stroke="#2D1B69" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      <span className="font-['Inter',sans-serif] text-[12px] text-black">
                        {campaign.startDate} - Dec 5, 2025
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p15e9a900} fill="#8363F2" />
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[12px] text-black">
                          Goal-R{campaign.goal.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', ' ')}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`absolute left-0 top-0 h-full ${
                              campaign.id === 1 ? 'bg-[#8363f2]' : 'bg-[#f5a623]'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>

                      <span className="font-['Inter',sans-serif] text-[12px] text-black">
                        Contributed -R{campaign.contributed.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', ' ')}
                      </span>

                      <span className="font-['Inter',sans-serif] text-[12px] font-medium text-black ml-2">
                        {percentage}%
                      </span>

                      <button
                        onClick={() => onNavigate('viewCampaignDetail')}
                        className="px-5 py-2 border border-[#2d1b69] text-[#2d1b69] rounded-[8px] font-['Inter',sans-serif] text-[14px] font-medium hover:bg-[#2d1b69] hover:text-white transition-colors"
                      >
                        View Campaign
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}