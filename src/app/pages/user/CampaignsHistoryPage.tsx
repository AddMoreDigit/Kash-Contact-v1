import { UserSidebar } from '../../components/layout/UserSidebar';
import { Users } from 'lucide-react';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'corporateDashboard' | 'serviceProviders';

interface CampaignsHistoryPageProps {
  onNavigate: (page: Page) => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
  onLogout?: () => void;
}

interface Campaign {
  id: number;
  name: string;
  goal: number;
  contributed: number;
  startDate: string;
  endDate: string;
  members: number;
}

export function CampaignsHistoryPage({
  onNavigate,
  onShowNotifications,
  hasUnreadNotifications,
  onShowCart,
  onLogout
}: CampaignsHistoryPageProps) {
  const campaigns: Campaign[] = [
    {
      id: 1,
      name: 'Tanzania Trip',
      goal: 40000.00,
      contributed: 40000.00,
      startDate: 'Feb 2',
      endDate: 'June 5, 2025',
      members: 5
    },
    {
      id: 2,
      name: 'Durban July',
      goal: 25000.00,
      contributed: 21000.00,
      startDate: 'Feb 2',
      endDate: 'June 5, 2025',
      members: 3
    },
    {
      id: 3,
      name: 'Cape town weekend',
      goal: 40000.00,
      contributed: 9000.00,
      startDate: 'Feb 2',
      endDate: 'June 5, 2025',
      members: 4
    }
  ];

  const getProgressPercentage = (contributed: number, goal: number) => {
    return Math.round((contributed / goal) * 100);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage === 100) return '#8363f2';
    if (percentage >= 80) return '#1e293b';
    return '#1e293b';
  };

  return (
    <div className="flex min-h-screen bg-[#f9fafb]">
      <UserSidebar
        activePage="campaigns"
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <div className="flex-1 flex flex-col">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-[#f9fafb] p-6">
          <div className="max-w-[800px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-['Inter',sans-serif] text-[20px] font-medium text-black">Campaigns history</h1>
              <button className="px-4 py-2 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-[#f9fafb] transition-colors">
                History
              </button>
            </div>

            {/* Campaigns List */}
            <div className="space-y-4">
              {campaigns.map((campaign) => {
                const percentage = getProgressPercentage(campaign.contributed, campaign.goal);
                const progressColor = getProgressColor(percentage);

                return (
                  <div
                    key={campaign.id}
                    className="bg-white rounded-lg border border-[#e5e7eb] p-5 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => onNavigate('viewCampaignDetail')}
                  >
                    {/* Campaign Name and Members */}
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black">{campaign.name}</h2>
                      <div className="flex items-center gap-1.5 text-[#6b7280]">
                        <Users className="w-4 h-4" />
                        <span className="font-['Inter',sans-serif] text-[12px]">Campaigns members ({campaign.members})</span>
                      </div>
                    </div>

                    {/* Goal and Contributed */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">
                          {percentage === 100 ? 'Goal' : 'Target'} <span className="text-black font-medium">R{campaign.goal.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </span>
                      </div>
                      <span className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">
                        Contributed <span className="text-black font-medium">R{campaign.contributed.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative mb-3">
                      <div className="w-full bg-[#e5e7eb] h-2 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${percentage}%`,
                            backgroundColor: progressColor
                          }}
                        />
                      </div>
                      <span 
                        className="absolute -top-1 font-['Inter',sans-serif] text-[11px] font-medium text-[#1f2937]"
                        style={{ left: `${Math.min(percentage, 95)}%`, transform: 'translateX(-50%)' }}
                      >
                        {percentage}%
                      </span>
                    </div>

                    {/* Date Range */}
                    <div className="flex items-center gap-2 text-[#6b7280]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
                        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
                        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                      </svg>
                      <span className="font-['Inter',sans-serif] text-[12px]">{campaign.startDate}</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-['Inter',sans-serif] text-[12px]">{campaign.endDate}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
