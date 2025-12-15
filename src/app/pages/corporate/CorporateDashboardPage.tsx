import { Download, Share2 } from 'lucide-react';
import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';
import svgPaths from '../../../imports/svg-c93d13tepm';
import { CorporateSidebar } from '../../components/layout/CorporateSidebar';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'messageChat' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'myCampaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'viewCampaignDetail' | 'serviceProviders' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'vendorProfile' | 'vendorCampaigns' | 'vendorServices' | 'vendorTransactions' | 'vendorOverview' | 'vendorDrafts' | 'vendorHelp' | 'vendorInvoice' | 'vendorReport' | 'approveBookingRequest' | 'editBooking' | 'corporateDashboard' | 'corporateCampaigns' | 'corporateProfile' | 'corporateCampaignDetail' | 'corporateSchedule' | 'corporateTransactions' | 'corporateVouchers' | 'corporateOverview' | 'corporateDrafts' | 'corporateHelp' | 'corporateGoalsTracker' | 'corporateTransactionsTable';

interface CorporateDashboardPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
}

const contributionData = [
  { month: 'Jan', amount: 2000 },
  { month: 'Feb', amount: 3000 },
  { month: 'Mar', amount: 3500 },
  { month: 'Apr', amount: 5000 },
  { month: 'May', amount: 4000 },
  { month: 'Jun', amount: 6000 },
  { month: 'Jul', amount: 7000 },
  { month: 'Aug', amount: 7500 },
  { month: 'Sep', amount: 8000 },
  { month: 'Oct', amount: 9000 },
  { month: 'Nov', amount: 10000 },
];

export function CorporateDashboardPage({ onNavigate, onLogout }: CorporateDashboardPageProps) {
  const handleDownloadReport = () => {
    toast.success('Report downloaded successfully');
  };

  const handleShareImpact = () => {
    toast.success('Impact report shared successfully');
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <CorporateSidebar onNavigate={onNavigate} onLogout={onLogout} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-white">
        {/* Welcome Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Inter',sans-serif] text-[16px] text-black">Welcome back/addmore digital</h1>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleDownloadReport}
                className="flex items-center gap-2 px-4 py-2 text-[13px] border border-[#8363f2] text-[#8363f2] rounded-lg hover:bg-purple-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Report</span>
              </button>
              <button 
                onClick={handleShareImpact}
                className="flex items-center gap-2 px-4 py-2 text-[13px] border border-[#8363f2] text-[#8363f2] rounded-lg hover:bg-purple-50 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Impact</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {/* Total Contribution */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="font-['Inter',sans-serif] text-[13px] text-gray-600 mb-2">Total contribution</div>
              <div className="font-['Inter',sans-serif] text-[20px] font-semibold text-black mb-1">R42 000.00</div>
              <div className="font-['Inter',sans-serif] text-[11px] text-green-600">+73% vs last month</div>
            </div>

            {/* Campaigns Sponsored */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="font-['Inter',sans-serif] text-[13px] text-gray-600 mb-2">Campaigns Sponsored</div>
              <div className="font-['Inter',sans-serif] text-[20px] font-semibold text-black mb-1">5</div>
              <div className="font-['Inter',sans-serif] text-[11px] text-[#8363f2]">75% towards goal</div>
            </div>

            {/* Beneficiaries Supported */}
            <div className="bg-[#7c3aed] rounded-lg p-5">
              <div className="font-['Inter',sans-serif] text-[13px] text-white mb-2">Beneficiaries Supported</div>
              <div className="font-['Inter',sans-serif] text-[40px] font-semibold text-white leading-none">120</div>
            </div>

            {/* Vendors Involved */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="font-['Inter',sans-serif] text-[13px] text-gray-600 mb-2">Vendors Involved</div>
              <div className="font-['Inter',sans-serif] text-[20px] font-semibold text-black">3</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Impact Cards */}
              <div>
                <h2 className="font-['Inter',sans-serif] text-[15px] font-medium text-black mb-4">Impact</h2>
                <div className="grid grid-cols-2 gap-4">
                  {/* Trips Funded */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#ede9fe] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#8363f2]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-['Inter',sans-serif] text-[11px] text-gray-600">Trips Funded</div>
                        <div className="font-['Inter',sans-serif] text-[18px] font-semibold text-black">5</div>
                      </div>
                    </div>
                  </div>

                  {/* Nights Sponsored */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#ede9fe] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#8363f2]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-['Inter',sans-serif] text-[11px] text-gray-600">Nights Sponsored</div>
                        <div className="font-['Inter',sans-serif] text-[18px] font-semibold text-black">150</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contribution Over Time */}
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <h3 className="font-['Inter',sans-serif] text-[15px] font-medium text-black mb-4">Contribution Over Time</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart data={contributionData}>
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#c4b5fd" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#c4b5fd" stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fontSize: 11, fill: '#6b7280' }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 11, fill: '#6b7280' }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value / 1000}k`}
                    />
                    <Tooltip 
                      formatter={(value) => [`R${value}`, 'Amount']}
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: '1px solid #e5e7eb',
                        fontSize: '12px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#8b5cf6" 
                      strokeWidth={2}
                      fill="url(#colorAmount)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right Column - Contribution Distribution */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <h3 className="font-['Inter',sans-serif] text-[15px] font-medium text-black mb-6">Contribution Distribution</h3>
              
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-56 h-56">
                  <svg width="224" height="224" viewBox="0 0 224 224">
                    {/* Accommodation - 45% (Dark Purple) */}
                    <circle
                      cx="112"
                      cy="112"
                      r="85"
                      fill="none"
                      stroke="#5B21B6"
                      strokeWidth="30"
                      strokeDasharray={`${2 * Math.PI * 85 * 0.45} ${2 * Math.PI * 85}`}
                      strokeDashoffset="0"
                      transform="rotate(-90 112 112)"
                    />
                    
                    {/* Transport - 30% (Medium Purple) */}
                    <circle
                      cx="112"
                      cy="112"
                      r="85"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="30"
                      strokeDasharray={`${2 * Math.PI * 85 * 0.30} ${2 * Math.PI * 85}`}
                      strokeDashoffset={`-${2 * Math.PI * 85 * 0.45}`}
                      transform="rotate(-90 112 112)"
                    />
                    
                    {/* Foods - 25% (Light Purple) */}
                    <circle
                      cx="112"
                      cy="112"
                      r="85"
                      fill="none"
                      stroke="#C4B5FD"
                      strokeWidth="30"
                      strokeDasharray={`${2 * Math.PI * 85 * 0.25} ${2 * Math.PI * 85}`}
                      strokeDashoffset={`-${2 * Math.PI * 85 * 0.75}`}
                      transform="rotate(-90 112 112)"
                    />
                  </svg>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100"
                    alt="Accommodation"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#5B21B6] flex-shrink-0"></div>
                    <span className="font-['Inter',sans-serif] text-[13px] text-gray-700">Accommodation</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100"
                    alt="Transport"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#8B5CF6] flex-shrink-0"></div>
                    <span className="font-['Inter',sans-serif] text-[13px] text-gray-700">Transport</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100"
                    alt="Foods"
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#C4B5FD] flex-shrink-0"></div>
                    <span className="font-['Inter',sans-serif] text-[13px] text-gray-700">Foods</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}