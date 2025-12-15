import { useState } from 'react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-c93d13tepm';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'corporateDashboard' | 'serviceProviders';

interface HelpSupportPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function SidebarItem({ icon, label, active, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        active
          ? 'bg-[#8363f2] text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span className="text-[14px]">{label}</span>
    </button>
  );
}

const faqs = [
  {
    id: 1,
    question: 'How do I create a campaign ?',
    answer: 'To create a new campaign,go to campaign section and click on the "new campaign" button,follow the on-screen instructions to set up your new campaigns',
  },
  {
    id: 2,
    question: 'How can I redeem a voucher',
    answer: 'To redeem a voucher, go to the Vouchers section and select the voucher you want to use. Follow the redemption instructions provided.',
  },
  {
    id: 3,
    question: 'What should I do is transaction is pending',
    answer: 'If a transaction is pending, please wait for it to be processed. This typically takes 24-48 hours. If it remains pending longer, contact support.',
  },
  {
    id: 4,
    question: 'How to add member on the campaigns',
    answer: 'To add a member to your campaign, go to the campaign details page and click on "Add Member". Enter their details and send an invitation.',
  },
];

const guides = [
  { id: 1, title: 'Onboarding Guide' },
  { id: 2, title: 'Managing campaigns' },
  { id: 3, title: 'Using Vouchers' },
  { id: 4, title: 'Transaction insights' },
];

export function HelpSupportPage({ onNavigate, onLogout, onShowNotifications, hasUnreadNotifications, onShowCart }: HelpSupportPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="flex h-screen bg-[#F5F5FA]">
      {/* Sidebar */}
      <UserSidebar activePage="helpSupport" onNavigate={onNavigate} onLogout={onLogout} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
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

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto bg-white p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-[20px] mb-8">Help & Support</h1>

            <div className="grid grid-cols-3 gap-6">
              {/* FAQ Section */}
              <div className="col-span-2">
                <h2 className="text-[16px] mb-4">Frequently Ask Questions</h2>

                <div className="space-y-3">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[14px] text-gray-900">{faq.question}</span>
                        {openFaq === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === faq.id && (
                        <div className="px-4 pb-4 text-[14px] text-gray-600 bg-purple-50 border-t border-purple-100">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Customer Support */}
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="w-5 h-5 text-[#8363f2]" />
                    <h3 className="text-[16px]">Customer Support</h3>
                  </div>
                  <button className="w-full py-2.5 bg-[#8363f2] text-white rounded-lg hover:bg-[#7354e1] transition-colors mb-4 text-[14px]">
                    Chat with us
                  </button>
                  <div className="text-[14px] space-y-1">
                    <p className="text-gray-600">Help@kcashcontact.co.za</p>
                    <p className="text-gray-600">+27 800005289</p>
                  </div>
                </div>

                {/* Guide & Tutorials */}
                <div>
                  <h3 className="text-[16px] mb-3">Guide & Tutorials</h3>
                  <div className="space-y-2">
                    {guides.map((guide) => (
                      <div
                        key={guide.id}
                        className="flex items-start gap-2 text-[14px] text-gray-700"
                      >
                        <span className="text-[#8363f2] mt-1">•</span>
                        <span>{guide.title}</span>
                      </div>
                    ))}
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