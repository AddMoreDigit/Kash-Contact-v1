import { useState, useEffect } from 'react';
import { CorporateSidebar } from '../../components/layout/CorporateSidebar';
import { toast, Toaster } from 'sonner@2.0.3';
import svgPaths from '../../../imports/svg-y9b8zn00t2';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'messageChat' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'myCampaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'viewCampaignDetail' | 'serviceProviders' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'vendorProfile' | 'vendorCampaigns' | 'vendorServices' | 'vendorTransactions' | 'vendorOverview' | 'vendorDrafts' | 'vendorHelp' | 'vendorInvoice' | 'vendorReport' | 'approveBookingRequest' | 'editBooking' | 'corporateDashboard' | 'corporateCampaigns' | 'corporateProfile' | 'corporateCampaignDetail' | 'corporateSchedule' | 'corporateTransactions' | 'corporateVouchers' | 'corporateOverview' | 'corporateDrafts' | 'corporateHelp' | 'corporateGoalsTracker' | 'corporateTransactionsTable';

interface CorporateCampaignsPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
}

const initialCampaigns = [
  {
    id: 1,
    title: 'Swiss Adventure',
    image: 'https://images.unsplash.com/photo-1607552351758-c39d62acb258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMG1vdW50YWlucyUyMGxha2UlMjB0ZW50fGVufDF8fHx8MTc2MzA5MDQ1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Active',
    progress: 70,
    goal: 25000,
    contributed: 10000,
    vendors: ['Blue Hotel', 'Best\'s Dining', 'Sky Games'],
    detailsMonths: 3,
    detailsCount1: 9,
    detailsCount2: 150,
    impactMonths: 3,
    impactCount1: 9,
    impactCount2: 150,
    timeline: 'Nov 15 ,2025-Feb 10,2025'
  },
  {
    id: 2,
    title: 'Cape Town Trip',
    image: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzYzMDU1OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Active',
    progress: 70,
    goal: 25000,
    contributed: 10000,
    vendors: ['Blue Hotel', 'Best\'s Dining', 'Sky Games'],
    detailsMonths: 3,
    detailsCount1: 9,
    detailsCount2: 150,
    impactMonths: 3,
    impactCount1: 9,
    impactCount2: 150,
    timeline: 'Nov 15 ,2025-Feb 10,2025'
  },
  {
    id: 3,
    title: 'Durban South Coast',
    image: 'https://images.unsplash.com/photo-1549109783-6be1845ed596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBwb29sJTIwcGFsbSUyMHRyZWVzfGVufDF8fHx8MTc2MzA5MDQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Active',
    progress: 70,
    goal: 25000,
    contributed: 10000,
    vendors: ['Blue Hotel', 'Best\'s Dining', 'Sky Games'],
    detailsMonths: 3,
    detailsCount1: 9,
    detailsCount2: 150,
    impactMonths: 3,
    impactCount1: 9,
    impactCount2: 150,
    timeline: 'Nov 15 ,2025-Feb 10,2025'
  }
];

export function CorporateCampaignsPage({ onNavigate, onLogout }: CorporateCampaignsPageProps) {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedCampaigns = localStorage.getItem('corporateCampaigns');
    if (savedCampaigns) {
      setCampaigns(JSON.parse(savedCampaigns));
    } else {
      setCampaigns(initialCampaigns);
      localStorage.setItem('corporateCampaigns', JSON.stringify(initialCampaigns));
    }
  }, []);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <CorporateSidebar
        activePage="corporateCampaigns"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <div className="h-[88px] border-b border-gray-200 flex items-center px-8 shrink-0 relative">
          {/* Left side - Menu Collapse button */}
          <div className="absolute left-8 top-[40px]">
            <svg className="w-[23px] h-[24px]" fill="none" viewBox="0 0 23 24">
              <path d="M1 1L1 23" stroke="#2D1B69" strokeLinecap="round" strokeWidth="2" />
              <path d={svgPaths.p2692800} fill="#8363F2" />
            </svg>
          </div>

          {/* Center - Search Bar */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative bg-[#f5f5fa] w-[360px] h-[64px] rounded-[20px] shadow-[-2px_-2px_4px_0px_inset_rgba(255,255,255,0.5),2px_2px_4px_0px_inset_rgba(170,170,204,0.25),5px_5px_10px_0px_inset_rgba(170,170,204,0.5),-5px_-5px_10px_0px_inset_#ffffff]">
              <input
                type="text"
                placeholder="Search "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-full bg-transparent px-8 font-['SF_Pro_Rounded',sans-serif] text-[24px] text-[#7878ab] opacity-60 outline-none placeholder:text-[#7878ab] placeholder:opacity-60"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-[#f5f5fa] rounded-full shadow-[5px_5px_10px_0px_rgba(170,170,204,0.5),-5px_-5px_10px_0px_#ffffff] flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p250aca00} fill="#7878AB" fillRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side - Create button and Icons */}
          <div className="absolute right-8 flex items-center gap-6">
            {/* Create Button */}
            <button className="bg-[#8363f2] px-6 h-[56px] rounded-[8px] flex items-center justify-center text-white font-['Inter',sans-serif] text-[20px] min-w-[150px]">
              Create
            </button>

            {/* App Registration Icon */}
            <button className="w-6 h-6 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <mask height="24" id="mask0_31_189" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' as const }} width="24" x="0" y="0">
                  <rect fill="#D9D9D9" height="24" width="24" />
                </mask>
                <g mask="url(#mask0_31_189)">
                  <path d={svgPaths.pb95a080} fill="black" />
                </g>
              </svg>
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

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-white px-8 py-6">
          {/* Header with filters */}
          <div className="flex items-center gap-4 mb-6">
            <h1 className="font-['Inter',sans-serif] text-[20px] font-semibold text-black">Active Campaigns</h1>
            
            <select className="px-4 py-2 text-[13px] font-['Inter',sans-serif] border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Members</option>
              <option>Active Campaigns</option>
              <option>Completed</option>
            </select>

            <select className="px-4 py-2 text-[13px] font-['Inter',sans-serif] border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Date Range</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>

            <select className="px-4 py-2 text-[13px] font-['Inter',sans-serif] border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Category</option>
              <option>Team Building</option>
              <option>Conference</option>
            </select>
          </div>

          {/* Campaign Cards Grid */}
          <div className="grid grid-cols-3 gap-5">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                {/* Campaign Image */}
                <div className="relative h-[140px]">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Tent/Camping Icon Overlay */}
                  <div className="absolute top-3 left-3">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
                      <path d="M12 2L2 22h20L12 2z" fill="#FF9500" stroke="#FF9500" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M12 2v20M2 22l10-8m10 8L12 14" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3">
                  {/* Title and Status */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-['Inter',sans-serif] text-[15px] font-semibold text-black">{campaign.title}</h3>
                    <div className="px-2 py-0.5 bg-[#22c55e] rounded text-white font-['Inter',sans-serif] text-[11px] font-medium">
                      {campaign.status}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="h-1.5 bg-gray-200 rounded-full mb-1.5 overflow-hidden">
                      <div
                        className="h-full bg-[#7c3aed] rounded-full"
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-['Inter',sans-serif] text-[11px] text-gray-600">
                        R{campaign.contributed.toLocaleString()} 000/ R{campaign.goal.toLocaleString()} 000
                      </span>
                      <span className="font-['Inter',sans-serif] text-[11px] font-semibold text-black">{campaign.progress}%</span>
                    </div>
                  </div>

                  {/* Vendors Involved */}
                  <div className="mb-3">
                    <h4 className="font-['Inter',sans-serif] text-[12px] font-semibold text-black mb-1.5">Vendors Involved</h4>
                    <div className="space-y-0.5">
                      {campaign.vendors.map((vendor, index) => (
                        <div key={index} className="font-['Inter',sans-serif] text-[11px] text-gray-600">
                          {vendor}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details and Impact */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {/* Details */}
                    <div>
                      <h4 className="font-['Inter',sans-serif] text-[12px] font-semibold text-black mb-1.5">Details</h4>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d={svgPaths.p44baf00} />
                          </svg>
                          <span className="font-['Inter',sans-serif] text-[11px] text-gray-600">{campaign.detailsMonths} Months</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d={svgPaths.p7a05b80} />
                          </svg>
                          <span className="font-['Inter',sans-serif] text-[11px] text-gray-600">{campaign.detailsCount1}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d={svgPaths.p7a05b80} />
                          </svg>
                          <span className="font-['Inter',sans-serif] text-[11px] text-gray-600">{campaign.detailsCount2}</span>
                        </div>
                      </div>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="font-['Inter',sans-serif] text-[12px] font-semibold text-black mb-1.5">Impact</h4>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d={svgPaths.p44baf00} />
                          </svg>
                          <span className="font-['Inter',sans-serif] text-[11px] text-gray-600">{campaign.impactMonths} Months</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d={svgPaths.p7a05b80} />
                          </svg>
                          <span className="font-['Inter',sans-serif] text-[11px] text-gray-600">{campaign.impactCount1}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d={svgPaths.p7a05b80} />
                          </svg>
                          <span className="font-['Inter',sans-serif] text-[11px] text-gray-600">{campaign.impactCount2}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-3">
                    <h4 className="font-['Inter',sans-serif] text-[12px] font-semibold text-black mb-1.5">Timeline</h4>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d={svgPaths.p44baf00} />
                      </svg>
                      <span className="font-['Inter',sans-serif] text-[11px] text-gray-600">{campaign.timeline}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onNavigate('corporateCampaignDetail')}
                      className="py-2 font-['Inter',sans-serif] text-[12px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        localStorage.setItem('selectedCampaign', JSON.stringify(campaign));
                        toast.success('Campaign selected for editing');
                      }}
                      className="py-2 font-['Inter',sans-serif] text-[12px] font-medium bg-[#7c3aed] text-white rounded-md hover:bg-[#6d28d9] transition-colors"
                    >
                      Edit Campaign
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}