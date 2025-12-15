import { UserSidebar } from '../../components/layout/UserSidebar';
import { toast } from 'sonner@2.0.3';
import { Toaster } from '../../../components/ui/sonner';
import svgPaths from '../../../imports/svg-c93d13tepm';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'messageChat' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'myCampaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'viewCampaignDetail' | 'serviceProviders';

interface UserTransactionsPageProps {
  onNavigate: (page: Page) => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
  onLogout?: () => void;
}

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  status: 'Completed' | 'Pending';
  paymentMethod: string;
}

export function UserTransactionsPage({ onNavigate, onShowNotifications, hasUnreadNotifications, onShowCart, onLogout }: UserTransactionsPageProps) {
  const transactions: Transaction[] = [
    {
      id: 1,
      date: '01/06/2025',
      description: 'Fund received for Grace',
      amount: 1500.00,
      status: 'Completed',
      paymentMethod: 'Debit Card',
    },
    {
      id: 2,
      date: '08/06/2025',
      description: 'Fund received for Paul',
      amount: 2000.00,
      status: 'Pending',
      paymentMethod: 'Debit Card',
    },
    {
      id: 3,
      date: '10/06/2025',
      description: 'Fund received for Amukelani',
      amount: 1000.00,
      status: 'Completed',
      paymentMethod: 'Wallet',
    },
    {
      id: 4,
      date: '15/06/2025',
      description: 'Fund received for Blessing',
      amount: 800.00,
      status: 'Completed',
      paymentMethod: 'Debit Card',
    },
    {
      id: 5,
      date: '20/06/2025',
      description: 'Fund received for Vukona',
      amount: 2500.00,
      status: 'Completed',
      paymentMethod: 'Cash Sent',
    },
    {
      id: 6,
      date: '01/07/2025',
      description: 'Fund received for Ndzulamo',
      amount: 500.00,
      status: 'Pending',
      paymentMethod: 'Debit Card',
    },
  ];

  const totalSpent = 7500.00;
  const totalReceived = 8500.00;
  const currentBalance = 13000.00;

  const handleDownloadPage = () => {
    // Create CSV content
    const csvHeaders = ['Date', 'Description', 'Amount', 'Status', 'Payment Method'];
    const csvRows = transactions.map(t => [
      t.date,
      t.description,
      `R${t.amount.toFixed(2)}`,
      t.status,
      t.paymentMethod
    ]);

    // Add summary information
    const summaryRows = [
      [],
      ['Summary'],
      ['Total Spent This Month', `R${totalSpent.toFixed(2)}`],
      ['Total Received', `R${totalReceived.toFixed(2)}`],
      ['Current Balance', `R${currentBalance.toFixed(2)}`]
    ];

    // Combine headers, data, and summary
    const allRows = [csvHeaders, ...csvRows, ...summaryRows];
    
    // Convert to CSV string
    const csvContent = allRows.map(row => row.join(',')).join('\n');
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `transactions_summary_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Transactions summary downloaded successfully!');
  };

  return (
    <div className="flex h-screen bg-[#F5F5FA]">
      {/* Sidebar */}
      <UserSidebar activePage="transactions" onNavigate={onNavigate} onLogout={onLogout} />

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
        
        <div className="flex-1 overflow-auto p-8">
          {/* Sort by button */}
          <div className="flex justify-end mb-6">
            <button className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              <span className="text-[14px]">Sort by</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Total spent this month */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-[14px] text-gray-600 mb-3">Total spent this month</p>
              <p className="text-[28px] text-gray-900 mb-2">R{totalSpent.toFixed(2)}</p>
              <div className="flex items-center gap-2 text-[12px] text-gray-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                This week
              </div>
            </div>

            {/* Total received */}
            <div className="bg-[#8363f2] rounded-lg p-6 shadow-sm">
              <p className="text-[14px] text-white/90 mb-3">Total received</p>
              <p className="text-[28px] text-white mb-2">R{totalReceived.toFixed(2)}</p>
              <div className="flex items-center gap-2 text-[12px] text-white/80">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                This week
              </div>
            </div>

            {/* Current Balance */}
            <div className="bg-black rounded-lg p-6 shadow-sm">
              <p className="text-[14px] text-white/90 mb-3">Current Balance</p>
              <p className="text-[28px] text-white mb-2">R{currentBalance.toFixed(2)}</p>
              <div className="flex items-center gap-2 text-[12px] text-white/80">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                This week
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Table Headers */}
            <div className="grid grid-cols-5 gap-6 px-6 py-4 border-b border-gray-200 bg-gray-50">
              <p className="text-[14px] text-gray-700">Date</p>
              <p className="text-[14px] text-gray-700">Description</p>
              <p className="text-[14px] text-gray-700">Amount</p>
              <p className="text-[14px] text-gray-700">Status</p>
              <p className="text-[14px] text-gray-700">Payment method</p>
            </div>

            {/* Table Rows */}
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="grid grid-cols-5 gap-6 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <p className="text-[14px] text-gray-900">{transaction.date}</p>
                <p className="text-[14px] text-gray-900">{transaction.description}</p>
                <p className="text-[14px] text-gray-900">R{transaction.amount.toFixed(2)}</p>
                <div className="flex items-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-md text-[12px] ${
                      transaction.status === 'Completed'
                        ? 'bg-[#DBEAFE] text-[#1E40AF]'
                        : 'bg-[#FEE2E2] text-[#DC2626]'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
                <p className="text-[14px] text-gray-900">{transaction.paymentMethod}</p>
              </div>
            ))}
          </div>

          {/* Download Page Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleDownloadPage}
              className="bg-[#8363f2] rounded-lg px-6 py-2.5 hover:bg-[#7354e1] transition-colors shadow-sm"
            >
              <span className="text-[14px] text-white">Download page</span>
            </button>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}