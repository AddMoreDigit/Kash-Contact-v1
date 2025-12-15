import { useState } from 'react';
import { AlertTriangle, Edit } from 'lucide-react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-c93d13tepm';
//import imgEllipse81 from 'figma:asset/a38e09f349af3cdf8495e0f6372c393c37a6f63a.png';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'corporateDashboard' | 'serviceProviders';

interface ContributorDetailPageProps {
  onNavigate: (page: Page) => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
  onLogout?: () => void;
}

export function ContributorDetailPage({
  onNavigate,
  onShowNotifications,
  hasUnreadNotifications,
  onShowCart,
  onLogout
}: ContributorDetailPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const contributorData = {
    name: 'Devine Bila',
    avatar: '/assetS/a38e09f349af3cdf8495e0f6372c393c37a6f63a.png',
    status: 'Behind Schedule',
    progress: 30,
    joined: '1 August 2025',
    splitGoal: 3500.0,
    contributed: 2000.0,
    paymentMissed: '1 September 2025',
    daysLeft: 21
  };

  const contributionHistory = [
    { month: 'Aug', paid: 700, missed: 0, upcoming: 0 },
    { month: 'Sept', paid: 700, missed: 0, upcoming: 0 },
    { month: 'Oct', paid: 0, missed: 700, upcoming: 0 },
    { month: 'Nov', paid: 0, missed: 0, upcoming: 700 },
    { month: 'Dec', paid: 0, missed: 0, upcoming: 700 }
  ];

  const timeline = [
    { month: 'September', status: 'paid', date: 'Sept' },
    { month: 'October', status: 'missed', date: 'Oct' },
    { month: 'November', status: 'upcoming', date: 'Nov' },
    { month: 'December', status: 'upcoming', date: 'Dec' }
  ];

  const CircularProgress = ({ progress, size = 80 }: { progress: number; size?: number }) => {
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

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
            stroke="#8363f2"
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
          <div className="max-w-[1000px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-['Inter',sans-serif] text-[20px] font-medium text-black">Profile Overview Prefomance</h1>
              <button
                onClick={() => onNavigate('contributors')}
                className="w-8 h-8 rounded-full bg-[#e5e7eb] hover:bg-[#d1d5db] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Profile Overview Card */}
            <div className="bg-white rounded-lg border border-[#e5e7eb] p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={contributorData.avatar}
                    alt={contributorData.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-['Inter',sans-serif] text-[18px] font-medium text-black mb-2">{contributorData.name}</h2>
                    <div className="flex items-center gap-2 bg-[#fee2e2] border border-[#fca5a5] rounded-md px-2 py-1">
                      <AlertTriangle className="w-3 h-3 text-[#dc2626]" />
                      <span className="font-['Inter',sans-serif] text-[12px] text-[#dc2626]">{contributorData.status}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <CircularProgress progress={contributorData.progress} />
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-[#d1d5db] bg-white rounded-md font-['Inter',sans-serif] text-[12px] text-[#8363f2] hover:bg-[#f9fafb] transition-colors">
                    <Edit className="w-3 h-3" />
                    Edit
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-5 gap-6">
                <div>
                  <div className="font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-1">Joined</div>
                  <div className="font-['Inter',sans-serif] text-[14px] text-black">{contributorData.joined}</div>
                </div>
                <div>
                  <div className="font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-1">Split Goal</div>
                  <div className="font-['Inter',sans-serif] text-[14px] text-black">R{contributorData.splitGoal.toFixed(2)}</div>
                </div>
                <div>
                  <div className="font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-1">Contributed</div>
                  <div className="font-['Inter',sans-serif] text-[14px] text-black">R{contributorData.contributed.toFixed(2)}</div>
                </div>
                <div>
                  <div className="font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-1">Payment missed</div>
                  <div className="font-['Inter',sans-serif] text-[14px] text-black">{contributorData.paymentMissed}</div>
                </div>
                <div>
                  <div className="font-['Inter',sans-serif] text-[12px] text-[#6b7280] mb-1">Days left</div>
                  <div className="font-['Inter',sans-serif] text-[14px] text-black">{contributorData.daysLeft} days</div>
                </div>
              </div>

              {/* Insights */}
              <div className="mt-6 mb-4">
                <h3 className="font-['Inter',sans-serif] text-[14px] font-medium text-black mb-2">Insights</h3>
                <p className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">
                  Prediction: "If {contributorData.name} continues at this pace, he will complete only 80% of his target by deadline."
                </p>
              </div>

              {/* Suggestions */}
              <div>
                <h3 className="font-['Inter',sans-serif] text-[14px] font-medium text-black mb-3">Suggestions:</h3>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-[#d1d5db] bg-white rounded-md font-['Inter',sans-serif] text-[12px] text-[#374151] hover:bg-[#f9fafb] transition-colors">
                    Send Reminder
                  </button>
                  <button className="px-4 py-2 bg-[#8363f2] text-white rounded-md font-['Inter',sans-serif] text-[12px] hover:bg-[#7354e1] transition-colors">
                    Message
                  </button>
                </div>
              </div>
            </div>

            {/* Contribution History */}
            <div className="bg-white rounded-lg border border-[#e5e7eb] p-6 mb-6">
              <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black mb-6">Contribution History</h2>

              {/* Chart */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-center">
                    <div className="font-['Inter',sans-serif] text-[16px] text-black mb-2">{contributorData.daysLeft} days Left</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#10b981] rounded"></div>
                      <span className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">Paid</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#dc3545] rounded"></div>
                      <span className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">Missed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#d1d5db] rounded"></div>
                      <span className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">Upcoming</span>
                    </div>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="relative h-[240px] border-b border-l border-[#e5e7eb]">
                  <div className="absolute inset-0 flex items-end justify-around px-8 pb-8">
                    {contributionHistory.map((item, index) => (
                      <div key={index} className="flex flex-col items-center gap-2 flex-1">
                        <div className="relative w-full max-w-[60px] h-[200px] flex flex-col justify-end">
                          {item.paid > 0 && (
                            <div
                              className="w-full bg-[#10b981] rounded-t"
                              style={{ height: `${(item.paid / 1000) * 100}%` }}
                            ></div>
                          )}
                          {item.missed > 0 && (
                            <div
                              className="w-full bg-[#dc3545] rounded-t"
                              style={{ height: `${(item.missed / 1000) * 100}%` }}
                            ></div>
                          )}
                          {item.upcoming > 0 && (
                            <div
                              className="w-full bg-[#d1d5db] rounded-t"
                              style={{ height: `${(item.upcoming / 1000) * 100}%` }}
                            ></div>
                          )}
                        </div>
                        <span className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="bg-white rounded-lg border border-[#e5e7eb] p-6 mb-6">
              <h2 className="font-['Inter',sans-serif] text-[16px] font-medium text-black mb-6">Action</h2>

              <div className="flex gap-3 mb-8">
                <button className="px-4 py-2 border border-[#d1d5db] bg-white rounded-md font-['Inter',sans-serif] text-[12px] text-[#374151] hover:bg-[#f9fafb] transition-colors">
                  Refund Contribution
                </button>
                <button className="px-4 py-2 bg-[#fee2e2] border border-[#fca5a5] text-[#dc2626] rounded-md font-['Inter',sans-serif] text-[12px] hover:bg-[#fecaca] transition-colors">
                  Remove from Campaign
                </button>
                <button className="px-4 py-2 bg-[#8363f2] text-white rounded-md font-['Inter',sans-serif] text-[12px] hover:bg-[#7354e1] transition-colors">
                  Message Members
                </button>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">Sept</span>
                  <span className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">Dec</span>
                </div>

                <div className="relative h-2 bg-[#e5e7eb] rounded-full mb-6">
                  {/* Progress line */}
                  <div className="absolute top-0 left-0 h-full w-1/2 bg-[#8363f2] rounded-l-full"></div>

                  {/* Timeline dots */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-0">
                    <div className="w-3 h-3 bg-[#10b981] rounded-full border-2 border-white"></div>
                    <div className="w-3 h-3 bg-[#dc3545] rounded-full border-2 border-white"></div>
                    <div className="w-3 h-3 bg-[#9ca3af] rounded-full border-2 border-white"></div>
                    <div className="w-3 h-3 bg-[#9ca3af] rounded-full border-2 border-white"></div>
                  </div>
                </div>

                {/* Timeline labels */}
                <div className="flex justify-between">
                  {timeline.map((item, index) => (
                    <div key={index} className="text-center">
                      <span className="font-['Inter',sans-serif] text-[11px] text-[#6b7280]">{item.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={() => onNavigate('contributors')}
                  className="px-6 py-2 bg-[#8363f2] text-white rounded-md font-['Inter',sans-serif] text-[12px] hover:bg-[#7354e1] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}