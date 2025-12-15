import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { UserSidebar } from '../../components/layout/UserSidebar';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'corporateDashboard' | 'serviceProviders';

interface CampaignSchedulePageProps {
  onNavigate: (page: Page) => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
  onLogout?: () => void;
}

interface CalendarEvent {
  id: number;
  title: string;
  time: string;
  color: 'blue' | 'red' | 'orange';
  date: number;
}

export function CampaignSchedulePage({
  onNavigate,
  onShowNotifications,
  hasUnreadNotifications,
  onShowCart,
  onLogout
}: CampaignSchedulePageProps) {
  const [currentMonth, setCurrentMonth] = useState('September 2025');
  const [viewType, setViewType] = useState<'month' | 'week' | 'list'>('month');

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const events: CalendarEvent[] = [
    { id: 1, title: 'Departure to Magalies', time: '11:30 AM', color: 'blue', date: 1 },
    { id: 2, title: 'Horse Riding', time: '11:30 AM', color: 'red', date: 3 },
    { id: 3, title: 'Boat Tour', time: '11:30 AM', color: 'red', date: 4 },
    { id: 4, title: 'Checkout', time: '17:30 PM', color: 'orange', date: 7 }
  ];

  const getEventColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-[#e0e7ff] border-[#818cf8] text-[#4338ca]';
      case 'red':
        return 'bg-[#fee2e2] border-[#f87171] text-[#991b1b]';
      case 'orange':
        return 'bg-[#fed7aa] border-[#fb923c] text-[#9a3412]';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-700';
    }
  };

  const renderCalendarDay = (day: number) => {
    const dayEvents = events.filter(e => e.date === day);
    const isToday = day === 1;

    return (
      <div
        key={day}
        className={`min-h-[100px] border-r border-b border-[#e5e7eb] p-2 ${
          isToday ? 'bg-[#f0f0ff]' : 'bg-white'
        }`}
      >
        <div className="font-['Inter',sans-serif] text-[14px] text-[#1f2937] mb-1">{day}</div>
        <div className="space-y-1">
          {dayEvents.map(event => (
            <div
              key={event.id}
              className={`px-2 py-1 rounded border ${getEventColor(event.color)} cursor-pointer hover:opacity-80 transition-opacity`}
            >
              <div className="font-['Inter',sans-serif] text-[11px] font-medium">{event.title}</div>
              <div className="flex items-center gap-1 mt-0.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-['Inter',sans-serif] text-[10px]">{event.time}</span>
              </div>
            </div>
          ))}
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
            <h1 className="font-['Inter',sans-serif] text-[20px] font-medium text-black mb-6">My Campaign Schedule</h1>

            {/* Calendar Controls */}
            <div className="bg-white rounded-lg border border-[#e5e7eb] p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">Schedule</span>
                    <span className="font-['Inter',sans-serif] text-[14px] text-[#8363f2]">| September 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => {/* Previous month */}}
                      className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#f3f4f6] transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-[#6b7280]" />
                    </button>
                    <button 
                      onClick={() => {/* Next month */}}
                      className="w-7 h-7 flex items-center justify-center rounded bg-[#8363f2] hover:bg-[#7354e1] transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-white border border-[#d1d5db] rounded-md font-['Inter',sans-serif] text-[12px] text-[#374151] hover:bg-[#f9fafb] transition-colors flex items-center gap-1">
                    Month
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-[#d1d5db] rounded-md hover:bg-[#f9fafb] transition-colors">
                    <svg className="w-4 h-4 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                      <line x1="9" y1="4" x2="9" y2="22" strokeWidth="2" />
                      <line x1="15" y1="4" x2="15" y2="22" strokeWidth="2" />
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                      <line x1="3" y1="16" x2="21" y2="16" strokeWidth="2" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-[#d1d5db] rounded-md hover:bg-[#f9fafb] transition-colors">
                    <svg className="w-4 h-4 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" strokeLinecap="round" />
                      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" />
                      <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white rounded-lg border border-[#e5e7eb] overflow-hidden">
              {/* Days of Week Header */}
              <div className="grid grid-cols-7 bg-[#e5deff]">
                {daysOfWeek.map(day => (
                  <div
                    key={day}
                    className="py-3 text-center border-r border-[#d0c5f7] last:border-r-0"
                  >
                    <span className="font-['Inter',sans-serif] text-[14px] font-medium text-[#1f2937]">{day}</span>
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7">
                {/* Week 1 - Starting with Sunday Aug 31 */}
                <div className="min-h-[100px] border-r border-b border-[#e5e7eb] p-2 bg-white">
                  <div className="font-['Inter',sans-serif] text-[14px] text-[#9ca3af]">31 Aug</div>
                </div>
                {renderCalendarDay(1)}
                {renderCalendarDay(2)}
                {renderCalendarDay(3)}
                {renderCalendarDay(4)}
                {renderCalendarDay(5)}
                {renderCalendarDay(6)}

                {/* Week 2 */}
                {renderCalendarDay(7)}
                {renderCalendarDay(8)}
                {renderCalendarDay(9)}
                {renderCalendarDay(10)}
                {renderCalendarDay(11)}
                {renderCalendarDay(12)}
                {renderCalendarDay(13)}

                {/* Week 3 */}
                {renderCalendarDay(14)}
                {renderCalendarDay(15)}
                {renderCalendarDay(16)}
                {renderCalendarDay(17)}
                {renderCalendarDay(18)}
                {renderCalendarDay(19)}
                {renderCalendarDay(20)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
