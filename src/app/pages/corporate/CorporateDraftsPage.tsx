import { useState } from 'react';
import { Users, Home } from 'lucide-react@0.487.0';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { CorporateSidebar } from '../../components/layout/CorporateSidebar';
import svgPaths from '../../../imports/svg-c7wojshvr9';

type Page = 'corporateDashboard' | 'corporateCampaigns' | 'corporateProfile' | 'corporateCampaignDetail' | 'corporateSchedule' | 'corporateHelp' | 'corporateDrafts';

interface CorporateDraftsPageProps {
  onNavigate: (page: Page) => void;
}

const draftCampaigns = [
  {
    id: 1,
    title: 'Magalies park getaway weekend',
    image: 'https://images.unsplash.com/photo-1757839939502-afa95e78dd60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhbGllcyUyMGhvdGVsJTIwcmVzb3J0fGVufDF8fHx8MTc2MzA5MDQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 2,
    reviews: 34,
    status: 'Draft',
    serviceProvider: 'Magalies Hotel',
    goal: 'R10 000.00',
    membersAdded: 3,
    step: 3,
    totalSteps: 5
  },
  {
    id: 2,
    title: 'Magalies park getaway weekend',
    image: 'https://images.unsplash.com/photo-1757839939502-afa95e78dd60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhbGllcyUyMGhvdGVsJTIwcmVzb3J0fGVufDF8fHx8MTc2MzA5MDQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 2,
    reviews: 34,
    status: 'Draft',
    serviceProvider: 'Magalies Hotel',
    goal: 'R10 000.00',
    membersAdded: 3,
    step: 2,
    totalSteps: 5
  },
  {
    id: 3,
    title: 'Gold reef city team building',
    image: 'https://images.unsplash.com/photo-1568557175160-8faa21f27bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcmVlZiUyMGNpdHklMjB0aGVtZSUyMHBhcmt8ZW58MXx8fHwxNzYzMDkwNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    reviews: 100,
    status: 'Draft',
    serviceProvider: 'Magalies Hotel',
    goal: 'R18 000.00',
    membersAdded: 8,
    step: 1,
    totalSteps: 5
  }
];

export function CorporateDraftsPage({ onNavigate }: CorporateDraftsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-[#FFA500]' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={svgPaths.p1577e200} />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <CorporateSidebar
        activePage="corporateDrafts"
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
              <path d={svgPaths.p2c866000} fill="#8363F2" />
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

        {/* Drafts Content */}
        <div className="flex-1 overflow-y-auto bg-white px-8 py-6">
          <h1 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black mb-2">Save as draft</h1>
          <p className="font-['Inter',sans-serif] text-[14px] text-gray-600 mb-6">
            These are the campaigns you've started but not completed, continue editing to fishing and launch your campaign
          </p>

          <div className="space-y-4">
            {draftCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
                <div className="flex gap-4">
                  {/* Campaign Image */}
                  <ImageWithFallback
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-28 h-24 rounded-lg object-cover flex-shrink-0"
                  />

                  {/* Campaign Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-['Inter',sans-serif] text-[16px] font-semibold text-black mb-1.5">{campaign.title}</h3>
                        <div className="flex items-center gap-2">
                          {renderStars(campaign.rating)}
                          <span className="font-['Inter',sans-serif] text-[12px] text-gray-500">({campaign.reviews} Reviews)</span>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-[#f0ebff] text-[#8363f2] rounded-md font-['Inter',sans-serif] text-[12px] flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p6587e00} fill="currentColor" />
                        </svg>
                        {campaign.status}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div className="flex items-center gap-2 font-['Inter',sans-serif] text-[14px] text-gray-700">
                        <Home className="w-4 h-4 text-[#8363f2]" />
                        <span>Service Providers|{campaign.serviceProvider}</span>
                      </div>
                      <div className="flex items-center gap-2 font-['Inter',sans-serif] text-[14px] text-gray-700">
                        <svg className="w-4 h-4 text-[#8363f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Goal-{campaign.goal}</span>
                      </div>
                      <div className="flex items-center gap-2 font-['Inter',sans-serif] text-[14px] text-gray-700">
                        <Users className="w-4 h-4 text-[#8363f2]" />
                        <span>Member added so far({campaign.membersAdded})</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-['Inter',sans-serif] text-[13px] text-gray-600">Step {campaign.step} of {campaign.totalSteps}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#8363f2] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(campaign.step / campaign.totalSteps) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <button className="px-6 py-2 font-['Inter',sans-serif] text-[14px] text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Back
                      </button>
                      <button className="px-6 py-2 font-['Inter',sans-serif] text-[14px] bg-[#8363f2] text-white rounded-lg hover:bg-[#7354e1] transition-colors">
                        Continue editing
                      </button>
                      <button className="px-6 py-2 font-['Inter',sans-serif] text-[14px] text-[#f63232] hover:bg-red-50 rounded-lg transition-colors">
                        Delete Draft
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}