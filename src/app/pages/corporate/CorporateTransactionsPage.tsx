import { useState } from 'react';
import { Download, Paperclip, RefreshCw } from 'lucide-react@0.487.0';
import { CorporateSidebar } from '../../components/layout/CorporateSidebar';
import svgPaths from '../../../imports/svg-nf65lv7hk4';
import { toast, Toaster } from 'sonner@2.0.3';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'messageChat' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'myCampaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'viewCampaignDetail' | 'serviceProviders' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'vendorProfile' | 'vendorCampaigns' | 'vendorServices' | 'vendorTransactions' | 'vendorOverview' | 'vendorDrafts' | 'vendorHelp' | 'vendorInvoice' | 'vendorReport' | 'approveBookingRequest' | 'editBooking' | 'corporateDashboard' | 'corporateCampaigns' | 'corporateProfile' | 'corporateCampaignDetail' | 'corporateSchedule' | 'corporateTransactions' | 'corporateVouchers' | 'corporateOverview' | 'corporateDrafts' | 'corporateHelp' | 'corporateGoalsTracker' | 'corporateTransactionsTable';

interface CorporateTransactionsPageProps {
  onNavigate: (page: Page) => void;
}

interface Transaction {
  id: string;
  date: string;
  campaign: string;
  vendor: string;
  amount: string;
  status: 'Paid' | 'Unpaid' | 'Refund';
}

export function CorporateTransactionsPage({ onNavigate }: CorporateTransactionsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All Transactions');

  const transactions: Transaction[] = [
    {
      id: '#100212',
      date: '11 Aug-12 Dec 2025',
      campaign: 'Sun City Cabana',
      vendor: 'Seview Lodge',
      amount: 'R20 000',
      status: 'Unpaid'
    },
    {
      id: '#100213',
      date: '11 Aug-12 Dec 2025',
      campaign: 'Kruger National Park',
      vendor: 'Magaliies',
      amount: 'R15 000',
      status: 'Paid'
    },
    {
      id: '#102156',
      date: '11 Aug-12 Dec 2025',
      campaign: 'School uniform Donation',
      vendor: 'Magaliies',
      amount: 'R5 000',
      status: 'Paid'
    },
    {
      id: '#20058',
      date: '11 Aug-12 Dec 2025',
      campaign: 'Weekend Team Building @ protea hotel',
      vendor: 'Magaliies',
      amount: 'R10 000',
      status: 'Refund'
    },
    {
      id: '#55236',
      date: '11 Aug-12 Dec 2025',
      campaign: '',
      vendor: 'Magaliies',
      amount: 'R12 000',
      status: 'Paid'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-[#22c55e] text-white';
      case 'Unpaid':
        return 'bg-[#ef4444] text-white';
      case 'Refund':
        return 'bg-[#f59e0b] text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <CorporateSidebar
        activePage="corporateTransactions"
        onNavigate={onNavigate}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <div className="h-[88px] border-b border-gray-200 flex items-center px-8 shrink-0 relative">
          {/* Left side - Menu Collapse button */}
          <div className="absolute left-8 top-[18px]">
            <svg className="w-[23px] h-[24px]" fill="none" viewBox="0 0 23 24">
              <path d="M1 1L1 23" stroke="#2D1B69" strokeLinecap="round" strokeWidth="2" />
              <path d={svgPaths.p2692800} fill="#8363F2" />
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

        {/* Transactions Content */}
        <div className="flex-1 overflow-hidden bg-white px-8 py-4 flex flex-col">
          {/* Page Title */}
          <h1 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black mb-4">Transaction History</h1>

          {/* Filter Tabs */}
          <div className="flex items-center gap-6 mb-4 border-b border-gray-200">
            <button 
              className={`pb-2 font-['Inter',sans-serif] text-[16px] border-b-2 transition-colors ${selectedFilter === 'All Transactions' ? 'border-[#8363f2] text-[#8363f2] font-medium' : 'border-transparent text-gray-600'}`}
              onClick={() => setSelectedFilter('All Transactions')}
            >
              All Transactions
            </button>
            <button 
              className={`pb-2 font-['Inter',sans-serif] text-[16px] border-b-2 transition-colors ${selectedFilter === 'Today' ? 'border-[#8363f2] text-[#8363f2] font-medium' : 'border-transparent text-gray-600'}`}
              onClick={() => setSelectedFilter('Today')}
            >
              Today
            </button>
            <button 
              className={`pb-2 font-['Inter',sans-serif] text-[16px] border-b-2 transition-colors ${selectedFilter === 'QR Code' ? 'border-[#8363f2] text-[#8363f2] font-medium' : 'border-transparent text-gray-600'}`}
              onClick={() => setSelectedFilter('QR Code')}
            >
              QR Code
            </button>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm flex-shrink-0">
            <table className="w-full">
              <thead className="bg-[#8363f2] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-['Inter',sans-serif] text-[14px] font-semibold">Transaction ID</th>
                  <th className="text-left px-4 py-3 font-['Inter',sans-serif] text-[14px] font-semibold">Date</th>
                  <th className="text-left px-4 py-3 font-['Inter',sans-serif] text-[14px] font-semibold">Campaign name</th>
                  <th className="text-left px-4 py-3 font-['Inter',sans-serif] text-[14px] font-semibold">Vendor name</th>
                  <th className="text-left px-4 py-3 font-['Inter',sans-serif] text-[14px] font-semibold">Amount</th>
                  <th className="text-left px-4 py-3 font-['Inter',sans-serif] text-[14px] font-semibold">Status</th>
                  <th className="text-left px-4 py-3 font-['Inter',sans-serif] text-[14px] font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={transaction.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100 hover:bg-gray-100 transition-colors`}>
                    <td className="px-4 py-3 font-['Inter',sans-serif] text-[14px] font-medium text-black">{transaction.id}</td>
                    <td className="px-4 py-3 font-['Inter',sans-serif] text-[14px] text-gray-700">{transaction.date}</td>
                    <td className="px-4 py-3 font-['Inter',sans-serif] text-[14px] text-gray-700">{transaction.campaign || '—'}</td>
                    <td className="px-4 py-3 font-['Inter',sans-serif] text-[14px] text-gray-700">{transaction.vendor}</td>
                    <td className="px-4 py-3 font-['Inter',sans-serif] text-[14px] font-medium text-black">{transaction.amount}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-3 py-1 rounded-md font-['Inter',sans-serif] text-[12px] font-medium ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1.5 text-[#8363f2] font-['Inter',sans-serif] text-[13px] hover:underline transition-all">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View
                        </button>
                        <button 
                          onClick={() => toast.success('Transaction downloaded successfully')}
                          className="flex items-center gap-1.5 text-[#22c55e] font-['Inter',sans-serif] text-[13px] hover:underline transition-all"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button className="px-4 py-2 font-['Inter',sans-serif] text-[14px] text-[#8363f2] hover:bg-purple-50 rounded-lg transition-colors">
              Prev
            </button>
            <button className="w-9 h-9 flex items-center justify-center bg-[#8363f2] text-white rounded-lg font-['Inter',sans-serif] text-[14px] font-medium">
              1
            </button>
            <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg font-['Inter',sans-serif] text-[14px] text-gray-700 transition-colors">
              2
            </button>
            <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg font-['Inter',sans-serif] text-[14px] text-gray-700 transition-colors">
              3
            </button>
            <button className="px-4 py-2 font-['Inter',sans-serif] text-[14px] text-[#8363f2] hover:bg-purple-50 rounded-lg transition-colors">
              Next
            </button>
          </div>

          {/* Download buttons */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button 
              onClick={() => toast.success('CSV file downloaded successfully')}
              className="px-6 py-2 font-['Inter',sans-serif] text-[14px] font-medium text-[#8363f2] border-2 border-[#8363f2] rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CSV
            </button>
            <button 
              onClick={() => toast.success('PDF file downloaded successfully')}
              className="px-6 py-2 font-['Inter',sans-serif] text-[14px] font-medium text-[#8363f2] border-2 border-[#8363f2] rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}