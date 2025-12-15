import { useState } from 'react';
import { Search, Filter, Users } from 'lucide-react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import { RemoveContributorDialog } from '../../components/dialogs/RemoveContributorDialog';
import { ReplaceContributorDialog } from '../../components/dialogs/ReplaceContributorDialog';
import { RefundContributorDialog } from '../../components/dialogs/RefundContributorDialog';
//import svgPaths from '../../../imports/svg-c93d13tepm';
//import imgEllipse81 from 'figma:asset/a38e09f349af3cdf8495e0f6372c393c37a6f63a.png';
//import imgEllipse95 from 'figma:asset/9f04bb2572ad50fe735025822908a2a8e26f385f.png';
//import imgEllipse104 from 'figma:asset/8728437952d5fa1c460c00bc34d1eadd9a0faa94.png';

import type { Page } from '../../types/navigation';
//type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'corporateDashboard' | 'serviceProviders';

interface ContributorsPageProps {
  onNavigate: (page: Page) => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
  onLogout?: () => void;
}

interface Contributor {
  id: number;
  name: string;
  avatar: string;
  status: 'On Track' | 'Completed' | 'Critical';
  progress: number;
  goal: number;
  paid: number;
  daysLeft: number;
  missed: number;
}

export function ContributorsPage({
  onNavigate,
  onShowNotifications,
  hasUnreadNotifications,
  onShowCart,
  onLogout
}: ContributorsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedContributor, setSelectedContributor] = useState<Contributor | null>(null);
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [showReplaceDialog, setShowReplaceDialog] = useState(false);
  const [showRefundDialog, setShowRefundDialog] = useState(false);

  const campaignGoal = 10000;
  const totalContributed = 3000;
  const daysLeft = 50;
  const totalMembers = 6;
  const progress = Math.round((totalContributed / campaignGoal) * 100);

  const contributors: Contributor[] = [
    {
      id: 1,
      name: 'Devine Bila',
      avatar: '/assets/a38e09f349af3cdf8495e0f6372c393c37a6f63a.png',
      status: 'On Track',
      progress: 74,
      goal: 5000,
      paid: 2000,
      daysLeft: 21,
      missed: 1
    },
    {
      id: 2,
      name: 'Matimu SA',
      avatar: '/assets/9f04bb2572ad50fe735025822908a2a8e26f385f.png',
      status: 'Completed',
      progress: 100,
      goal: 5000,
      paid: 5000,
      daysLeft: 0,
      missed: 0
    },
    {
      id: 3,
      name: 'Devine Bila',
      avatar: '/assets/8728437952d5fa1c460c00bc34d1eadd9a0faa94.png',
      status: 'Critical',
      progress: 65,
      goal: 5000,
      paid: 1000,
      daysLeft: 21,
      missed: 1
    },
    {
      id: 4,
      name: 'Devine Bila',
      avatar: '/assets/a38e09f349af3cdf8495e0f6372c393c37a6f63a.png',
      status: 'On Track',
      progress: 74,
      goal: 5000,
      paid: 2000,
      daysLeft: 21,
      missed: 1
    },
    {
      id: 5,
      name: 'Devine Bila',
      avatar: '/assets/9f04bb2572ad50fe735025822908a2a8e26f385f.png',
      status: 'On Track',
      progress: 74,
      goal: 5000,
      paid: 2000,
      daysLeft: 21,
      missed: 1
    },
    {
      id: 6,
      name: 'Devine Bila',
      avatar: '/assets/8728437952d5fa1c460c00bc34d1eadd9a0faa94.png',
      status: 'On Track',
      progress: 74,
      goal: 5000,
      paid: 2000,
      daysLeft: 21,
      missed: 1
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Track':
        return 'bg-[#d4edda] text-[#155724]';
      case 'Completed':
        return 'bg-[#e5d4ff] text-[#6200ee]';
      case 'Critical':
        return 'bg-[#f8d7da] text-[#721c24]';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return '#10b981';
      case 'Critical':
        return '#dc3545';
      default:
        return '#8363f2';
    }
  };

  const CircularProgress = ({ progress, size = 120, strokeWidth = 10, status = 'On Track' }: { progress: number; size?: number; strokeWidth?: number; status?: string }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
    const color = getProgressColor(status);

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-['Inter',sans-serif] text-[20px] font-semibold text-[#1a1a1a]">{progress}%</span>
        </div>
      </div>
    );
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
          <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-['Inter',sans-serif] text-[20px] font-medium text-black">Contributors</h1>
              <button
                onClick={() => onNavigate('viewCampaignDetail')}
                className="w-8 h-8 rounded-full bg-[#e5e7eb] hover:bg-[#d1d5db] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 max-w-[400px] relative">
                <input
                  type="text"
                  placeholder="Search by Name or Campaign"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-white border border-[#d1d5db] rounded-lg font-['Inter',sans-serif] text-[14px] text-[#374151] placeholder:text-[#9ca3af] outline-none focus:border-[#8363f2] transition-colors"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 bg-white border border-[#d1d5db] rounded-lg font-['Inter',sans-serif] text-[14px] text-[#374151] flex items-center gap-2 hover:bg-[#f9fafb] transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <button className="px-4 py-2 bg-white border border-[#d1d5db] rounded-lg font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-[#f9fafb] transition-colors">
                Sort by
              </button>
            </div>

            {/* Campaign Contribution Progress */}
            <div className="bg-white rounded-lg border border-[#e5e7eb] p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black">Campaign Contribution Progress</h2>
                <div className="flex items-center gap-2 text-[#8363f2]">
                  <Users className="w-4 h-4" />
                  <span className="font-['Inter',sans-serif] text-[14px] font-medium">{totalMembers} Members</span>
                </div>
              </div>

              <div className="flex items-start gap-8">
                {/* Large circular progress */}
                <div className="flex-shrink-0">
                  <CircularProgress progress={progress} size={100} strokeWidth={12} />
                </div>

                <div className="flex-1 space-y-4">
                  {/* Goal */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8363f2]" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-['Inter',sans-serif] text-[14px] text-[#374151]">Goal R{campaignGoal.toLocaleString()}.00</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-[#e5e7eb] h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#8363f2] rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Days to go */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#8363f2]" fill="none" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className="font-['Inter',sans-serif] text-[14px] text-[#374151]">{daysLeft} days to go!</span>
                  </div>

                  {/* Contributed */}
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#10b981]" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-['Inter',sans-serif] text-[14px] text-[#374151]">Contributed R{totalContributed.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Success message */}
              <div className="mt-6 bg-[#d1f4e0] border border-[#7bc96f] rounded-lg p-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-[#10b981] flex-shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-['Inter',sans-serif] text-[14px] text-[#155724]">
                  Keep going Team! You're {progress}% up to reach your goal
                </span>
              </div>
            </div>

            {/* Individual Campaign Tracking */}
            <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black mb-4">Individual Campaign Tracking</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {contributors.map((contributor) => (
                <div
                  key={contributor.id}
                  className="bg-white rounded-lg border border-[#e5e7eb] p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => onNavigate('contributorDetail')}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="font-['Inter',sans-serif] text-[14px] font-medium text-black">{contributor.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-md font-['Inter',sans-serif] text-[11px] font-medium ${getStatusColor(contributor.status)}`}>
                      {contributor.status}
                    </span>
                  </div>

                  <div className="flex justify-center mb-4">
                    <CircularProgress progress={contributor.progress} size={80} strokeWidth={8} status={contributor.status} />
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-[12px]">
                      <div className="flex items-center gap-1 text-[#6b7280]">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span className="font-['Inter',sans-serif]">Goal R{contributor.goal.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#6b7280]">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-['Inter',sans-serif]">Paid R{contributor.paid.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[12px]">
                      <span className="font-['Inter',sans-serif] text-[#6b7280]">{contributor.daysLeft} Days Left</span>
                      <span className="font-['Inter',sans-serif] text-[#dc3545]">Missed {contributor.missed}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedContributor(contributor);
                        setShowRemoveDialog(true);
                      }}
                      className="flex-1 px-3 py-1.5 border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[12px] text-[#374151] hover:bg-[#f9fafb] transition-colors"
                    >
                      Remove
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedContributor(contributor);
                        setShowReplaceDialog(true);
                      }}
                      className="flex-1 px-3 py-1.5 border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[12px] text-[#374151] hover:bg-[#f9fafb] transition-colors"
                    >
                      Replace
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedContributor(contributor);
                        setShowRefundDialog(true);
                      }}
                      className="flex-1 px-3 py-1.5 bg-[#8363f2] text-white rounded-md font-['Inter',sans-serif] text-[12px] hover:bg-[#7354e1] transition-colors"
                    >
                      Refund
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center">
              <button className="px-6 py-2 border border-[#d1d5db] bg-white rounded-lg font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-[#f9fafb] transition-colors">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      {selectedContributor && (
        <>
          <RemoveContributorDialog
            isOpen={showRemoveDialog}
            onClose={() => setShowRemoveDialog(false)}
            contributorName={selectedContributor.name}
            contributorDetails={`${selectedContributor.name} Has Missed ${selectedContributor.missed} Payment, Putting the campaign at Risk`}
            onConfirm={(reason) => {
              console.log('Remove contributor:', selectedContributor.name, 'Reason:', reason);
              // Handle remove logic here
            }}
          />

          <ReplaceContributorDialog
            isOpen={showReplaceDialog}
            onClose={() => setShowReplaceDialog(false)}
            contributorName={selectedContributor.name}
            contributorDetails={`${selectedContributor.name} Has Missed ${selectedContributor.missed} Payment, Putting the campaign at Risk`}
            onConfirm={(newMember, reason, date, time) => {
              console.log('Replace contributor:', selectedContributor.name, 'with:', newMember, 'Reason:', reason);
              // Handle replace logic here
            }}
          />

          <RefundContributorDialog
            isOpen={showRefundDialog}
            onClose={() => setShowRefundDialog(false)}
            contributorName={selectedContributor.name}
            refundAmount={selectedContributor.paid}
            onConfirm={(reason, date, time) => {
              console.log('Refund contributor:', selectedContributor.name, 'Amount:', selectedContributor.paid, 'Reason:', reason);
              // Handle refund logic here
            }}
          />
        </>
      )}
    </div>
  );
}