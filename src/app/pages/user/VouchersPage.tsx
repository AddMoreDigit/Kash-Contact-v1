import { useState } from 'react';
import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-c93d13tepm';
//import svgPathsOld from '../../../imports/svg-8szp5bf6ym';
//import imgRectangle124 from 'figma:asset/09008cafd958ef228fae370333984be464a418ff.png';
//import imgRectangle125 from 'figma:asset/9f1f8c1da3629502bc71901baf4363bbeeeff080.png';
//import imgRectangle126 from 'figma:asset/e646802d554bb1fa6ce3ceb35bf48236c77c77e1.png';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../../../components/ui/dialog';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import QRCode from 'qrcode';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaignDetail' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'vendorDashboard' | 'corporateDashboard' | 'selectUserType' | 'serviceProviders';

interface VouchersPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
}

export function VouchersPage({ onNavigate, onLogout, onShowNotifications, hasUnreadNotifications, onShowCart }: VouchersPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showServiceSelection, setShowServiceSelection] = useState(false);
  const [showVoucherDetails, setShowVoucherDetails] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState<any>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  // Services available for voucher generation
  const campaignServices = [
    {
      id: 1,
      name: 'Seaview Lodge',
      type: 'Hotel Stay',
      isPaid: true,
      icon: '🏨',
      color: '#8B5CF6',
    },
    {
      id: 2,
      name: 'Tastebites Catering',
      type: 'Restaurant',
      isPaid: true,
      icon: '🍽️',
      color: '#F59E0B',
    },
    {
      id: 3,
      name: 'Greenfield Ranch',
      type: 'Horse riding',
      isPaid: true,
      icon: '🐴',
      color: '#10B981',
    },
    {
      id: 4,
      name: 'Cape town cruises',
      type: 'Boat ride',
      isPaid: true,
      icon: '⛵',
      color: '#3B82F6',
    },
    {
      id: 5,
      name: 'City Explorer',
      type: 'City tour',
      isPaid: true,
      icon: '🏙️',
      color: '#8B5CF6',
    },
  ];

  const vouchers = [
    {
      id: 1,
      name: 'Cape town weekend',
      image: '/assets/09008cafd958ef228fae370333984be464a418ff.png' ,
      savedPercent: '100% saved',
      goal: 'Goal R15 000',
    },
    {
      id: 2,
      name: 'Durban beach hoilday',
      image: '/assets/9f1f8c1da3629502bc71901baf4363bbeeeff080.png',
      savedPercent: '15% saved',
      goal: 'Goal R35 000',
    },
    {
      id: 3,
      name: 'Kruger national park',
      image: '/assets/e646802d554bb1fa6ce3ceb35bf48236c77c77e1.png' ,
      savedPercent: '76% saved',
      goal: 'Goal R25 000',
    },
  ];

  const handleRedeemClick = (voucher: any) => {
    setSelectedVoucher(voucher);
    setShowServiceSelection(true);
  };

  const handleGenerateVoucher = async (service: any) => {
    // Generate QR code
    const voucherCode = `VOUCHER-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    try {
      const qrUrl = await QRCode.toDataURL(voucherCode, {
        width: 200,
        margin: 2,
        color: {
          dark: '#2E1F8E',
          light: '#FFFFFF',
        },
      });
      setQrCodeUrl(qrUrl);
      setShowServiceSelection(false);
      setShowVoucherDetails(true);
      toast.success('Voucher generated successfully!');
    } catch (error) {
      toast.error('Failed to generate QR code');
    }
  };

  const handleDownloadVoucher = () => {
    toast.success('Voucher downloaded successfully!');
  };

  const handleShareVoucher = () => {
    toast.success('Share link copied to clipboard!');
  };

  const handleSaveVoucher = () => {
    toast.success('Voucher saved successfully!');
    setShowVoucherDetails(false);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <UserSidebar activePage="vouchers" onNavigate={onNavigate} onLogout={onLogout} onShowNotifications={onShowNotifications} hasUnreadNotifications={hasUnreadNotifications} onShowCart={onShowCart} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-white">
        {/* Top Navbar */}
        <div className="h-[60px] bg-white border-b border-gray-300 flex items-center justify-between px-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative bg-[#f5f5fa] rounded-xl shadow-[inset_2px_2px_4px_rgba(170,170,204,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Content */}
        <div className="px-8 py-6">
          {/* Title and Filters */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black">
              Vouchers
            </h1>
            <div className="flex items-center gap-2">
              <button className="h-[36px] px-4 bg-white border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-gray-50 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2ddfcf80} stroke="#374151" strokeWidth="1.5" />
                </svg>
                <span>Filters</span>
              </button>
              <button className="h-[36px] px-4 bg-white border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-gray-50 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 18">
                  <path d={svgPaths.p19673100} fill="#374151" />
                </svg>
                <span>Sort by</span>
              </button>
            </div>
          </div>

          {/* Voucher Cards Grid */}
          <div className="grid grid-cols-3 gap-5 mb-8">
            {vouchers.map((voucher) => (
              <div 
                key={voucher.id} 
                className="bg-white rounded-[12px] border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Voucher Image */}
                <div className="relative h-[140px]">
                  <img
                    src={voucher.image}
                    alt={voucher.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Voucher Info */}
                <div className="p-4">
                  <h3 className="font-['Inter',sans-serif] text-[16px] font-medium text-[#111827] mb-3">
                    {voucher.name}
                  </h3>

                  {/* Redeem Button */}
                  <button className="w-full bg-[#8363f2] text-white text-[14px] font-['Inter',sans-serif] font-medium h-[40px] rounded-[8px] mb-3 hover:bg-[#7354e1] transition-colors" onClick={() => handleRedeemClick(voucher)}>
                    Redeem
                  </button>

                  {/* Savings Info */}
                  <div className="space-y-0.5">
                    <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#111827]">
                      {voucher.savedPercent}
                    </p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">
                      {voucher.goal}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="h-[40px] px-6 bg-white border border-gray-300 rounded-[8px] font-['Inter',sans-serif] text-[14px] text-[#374151] hover:bg-gray-50 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </div>

      {/* Service Selection Dialog */}
      <Dialog open={showServiceSelection} onOpenChange={setShowServiceSelection}>
        <DialogContent className="sm:max-w-[500px] p-0 gap-0">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <div>
              <DialogTitle className="font-['Inter',sans-serif] text-[20px] font-semibold text-black">
                {selectedVoucher?.name || 'Cape Town Gateway'}
              </DialogTitle>
              <DialogDescription className="font-['Inter',sans-serif] text-[13px] text-gray-500 mt-1">
                Select what you want to redeem
              </DialogDescription>
            </div>
            <button
              onClick={() => setShowServiceSelection(false)}
              className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Services List */}
          <div className="px-6 pb-6 space-y-3 max-h-[400px] overflow-y-auto">
            {campaignServices.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-[#8363f2] transition-colors"
              >
                <div className="flex items-center gap-3">
                  {/* Service Icon */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.icon}
                  </div>
                  
                  {/* Service Info */}
                  <div>
                    <p className="font-['Inter',sans-serif] text-[14px] font-medium text-black">
                      {service.name}
                    </p>
                    <p className="font-['Inter',sans-serif] text-[12px] text-gray-500">
                      {service.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Paid Badge */}
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-sm" />
                    <span className="font-['Inter',sans-serif] text-[12px] font-medium text-green-700">
                      Fully Paid
                    </span>
                  </div>

                  {/* Generate Voucher Button */}
                  <button
                    onClick={() => handleGenerateVoucher(service)}
                    className="bg-[#8363f2] hover:bg-[#7354e1] text-white px-4 py-2 rounded-lg font-['Inter',sans-serif] text-[13px] font-medium transition-colors"
                  >
                    Generate Voucher
                  </button>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Voucher Details Dialog */}
      <Dialog open={showVoucherDetails} onOpenChange={setShowVoucherDetails}>
        <DialogContent className="sm:max-w-[450px] p-0 gap-0">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <DialogTitle className="font-['Inter',sans-serif] text-[20px] font-semibold text-black">
              {selectedVoucher?.name ? `${selectedVoucher.name} Weekend` : 'Cape Town Gateway Weekend'}
            </DialogTitle>
            <button
              onClick={() => setShowVoucherDetails(false)}
              className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Voucher Content */}
          <div className="px-6 pb-6">
            {/* QR Code */}
            <div className="flex justify-center mb-6">
              {qrCodeUrl && (
                <img
                  src={qrCodeUrl}
                  alt="QR Code"
                  className="w-[200px] h-[200px]"
                />
              )}
            </div>

            {/* Voucher Code */}
            <div className="text-center mb-1">
              <p className="font-['Inter',sans-serif] text-[16px] font-semibold text-black">
                VOUCHER-ABC
              </p>
            </div>

            {/* Total Amount */}
            <div className="text-center mb-6">
              <p className="font-['Inter',sans-serif] text-[15px] text-black">
                Total Amount <span className="font-semibold">R10 000.00</span>
              </p>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-6">
              <div>
                <p className="font-['Inter',sans-serif] text-[13px] font-semibold text-black">
                  Issue date
                </p>
              </div>
              <div>
                <p className="font-['Inter',sans-serif] text-[13px] font-semibold text-black">
                  Expiry date
                </p>
              </div>
              <div>
                <p className="font-['Inter',sans-serif] text-[13px] font-semibold text-black mb-1">
                  Description
                </p>
                <p className="font-['Inter',sans-serif] text-[13px] text-gray-600">
                  Weekend gateway including Rooms, meal, Transport and Activities also Flights tickets
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleShareVoucher}
                className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-black px-4 py-2.5 rounded-lg font-['Inter',sans-serif] text-[14px] font-medium transition-colors"
              >
                Share
              </button>
              <button
                onClick={handleDownloadVoucher}
                className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-black px-4 py-2.5 rounded-lg font-['Inter',sans-serif] text-[14px] font-medium transition-colors"
              >
                Download
              </button>
              <button
                onClick={handleSaveVoucher}
                className="flex-1 bg-[#8363f2] hover:bg-[#7354e1] text-white px-4 py-2.5 rounded-lg font-['Inter',sans-serif] text-[14px] font-medium transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}