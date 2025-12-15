import { useState } from 'react';
import { ChevronLeft, Star, MapPin, X } from 'lucide-react';
//import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { toast, Toaster } from 'sonner';
import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-c93d13tepm';
//import svgPathsOld from '../../../imports/svg-3xpzfvvnmj';
//import imgServiceBanner from 'figma:asset/51e22403a8c34ebbdff4bd2ae4062a63b119e9b5.png';
//import imgRoom1 from 'figma:asset/0e961f9582aec77a34bf07fab9ef41a1b7c868ad.png';
//import imgRoom2 from 'figma:asset/2d90d1ffe99df5817a38c395c08ec5116a7be340.png';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'messageChat' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'myCampaignSchedule' | 'campaignsHistory' | 'contribute' | 'individualCampaign' | 'groupCampaign' | 'managingCampaigns' | 'helpSupport' | 'saveDraft' | 'selectServices' | 'viewCampaignDetail' | 'serviceProviders' | 'signup' | 'vendorSignup' | 'otpVerification' | 'signupSuccess' | 'login' | 'forgotPassword' | 'createNewPassword' | 'selectUserType' | 'vendorDashboard' | 'vendorProfile' | 'vendorCampaigns' | 'vendorServices' | 'vendorTransactions' | 'vendorOverview' | 'vendorDrafts' | 'vendorHelp' | 'vendorInvoice' | 'vendorReport' | 'approveBookingRequest' | 'editBooking' | 'corporateDashboard' | 'corporateCampaigns' | 'corporateProfile' | 'corporateCampaignDetail' | 'corporateSchedule' | 'corporateTransactions' | 'corporateVouchers' | 'corporateOverview' | 'corporateDrafts' | 'corporateHelp' | 'corporateGoalsTracker' | 'corporateTransactionsTable';

interface SelectServiceProviderPageProps {
  onNavigate: (page: Page) => void;
  onShowNotifications?: () => void;
  hasUnreadNotifications?: boolean;
  onShowCart?: () => void;
  onLogout?: () => void;
}

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export function SelectServiceProviderPage({ onNavigate, onShowNotifications, hasUnreadNotifications, onShowCart, onLogout }: SelectServiceProviderPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentMonth] = useState('March');
  const [currentYear] = useState('2025');

  const rooms: Room[] = [
    {
      id: 1,
      name: 'Standard Room',
      description: 'Spacious Double room with garden view',
      price: 1500,
      image: '/assets/0e961f9582aec77a34bf07fab9ef41a1b7c868ad.png'
    },
    {
      id: 2,
      name: 'Deluxe Room',
      description: 'Spacious Double room with garden view',
      price: 2500,
      image: '/assets/2d90d1ffe99df5817a38c395c08ec5116a7be340.png'
    }
  ];

  const handleBookClick = (room: Room) => {
    setSelectedRoom(room);
    setShowBookingModal(true);
  };

  const handleConfirmBooking = () => {
    if (selectedDate && selectedRoom) {
      toast.success(`${selectedRoom.name} booked successfully for ${currentMonth} ${selectedDate}!`);
      setShowBookingModal(false);
      setSelectedDate(null);
    } else {
      toast.error('Please select a date');
    }
  };

  const handleCancel = () => {
    setShowBookingModal(false);
    setSelectedDate(null);
    setSelectedRoom(null);
  };

  // Calendar data
  const calendarDays = [
    { date: 27, status: 'prev' },
    { date: 28, status: 'prev' },
    { date: 1, status: 'available' },
    { date: 2, status: 'available' },
    { date: 3, status: 'available' },
    { date: 4, status: 'available' },
    { date: 5, status: 'booked' },
    { date: 6, status: 'booked' },
    { date: 7, status: 'booked' },
    { date: 8, status: 'reserved' },
    { date: 9, status: 'available' },
    { date: 10, status: 'booked' },
    { date: 11, status: 'booked' },
    { date: 12, status: 'reserved' },
    { date: 13, status: 'available' },
    { date: 14, status: 'booked' },
    { date: 15, status: 'reserved' },
    { date: 16, status: 'available' },
    { date: 17, status: 'booked' },
    { date: 18, status: 'booked' },
    { date: 19, status: 'available' },
    { date: 20, status: 'available' },
    { date: 21, status: 'available' },
    { date: 22, status: 'available' },
    { date: 23, status: 'booked' },
    { date: 24, status: 'booked' },
    { date: 25, status: 'available' },
    { date: 26, status: 'available' },
    { date: 27, status: 'available' },
    { date: 28, status: 'available' },
    { date: 29, status: 'booked' },
    { date: 30, status: 'reserved' },
    { date: 31, status: 'available' },
    { date: 1, status: 'next' },
    { date: 2, status: 'next' },
    { date: 3, status: 'next' }
  ];

  const getDateColor = (status: string, date: number) => {
    if (selectedDate === date && status !== 'prev' && status !== 'next') {
      return 'bg-[#8363f2] text-white';
    }
    
    if (status === 'prev' || status === 'next') return 'text-gray-300';
    if (status === 'booked') return 'bg-[#8363f2] text-white';
    if (status === 'reserved') return 'bg-[#FFB62D] text-white';
    return 'text-black hover:bg-gray-100';
  };

  const tabs = [
    { id: 'rooms', label: 'Rooms' },
    { id: 'food', label: 'Food' },
    { id: 'transport', label: 'Transport' },
    { id: 'attractions', label: 'Attractions' }
  ];

  const [activeTab, setActiveTab] = useState('rooms');

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <UserSidebar
        activePage="campaigns"
        onNavigate={onNavigate}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <div className="h-[60px] bg-white border-b border-gray-300 flex items-center justify-between px-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative bg-[#f5f5fa] rounded-xl shadow-[inset_2px_2px_4px_rgba(170,170,204,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-[#f5f5f5] px-8 py-6">
          {/* Back Button and Title */}
          <div className="flex items-center gap-4 mb-6">
            <button 
              onClick={() => onNavigate('campaigns')}
              className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <h1 className="font-['Inter',sans-serif] text-[32px] font-medium text-black">Select Services</h1>
          </div>

          {/* Service Banner */}
          <div className="relative mb-6 rounded-lg overflow-hidden h-[200px]">
            <img 
              src={'/assets/51e22403a8c34ebbdff4bd2ae4062a63b119e9b5.png'}
              alt="Cape Town Gateway Weekend" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Service Info */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="font-['Inter',sans-serif] text-[28px] font-medium text-black">Cape Town Gateway Weekend</h2>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-[#FFB62D] text-[#FFB62D]" />
                <Star className="w-5 h-5 fill-[#FFB62D] text-[#FFB62D]" />
                <Star className="w-5 h-5 fill-[#FFB62D] text-[#FFB62D]" />
                <span className="font-['Inter',sans-serif] text-[16px] text-gray-600">{12} Reviews</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-[#8363f2]" />
              <span className="font-['Inter',sans-serif] text-[18px] text-gray-700">Cape Town | Accommodation</span>
            </div>
            <p className="font-['Inter',sans-serif] text-[16px] text-gray-700 leading-relaxed max-w-4xl">
              Nestled in the heart of Cape Town with breathtaking views of the ocean and Table Mountain, Seaview Lodge offers premium comfort and modern amenities for travelers. Guests can enjoy elegantly furnished rooms, private balconies, an outdoor pool, and world-class hospitality. Whether you're here for a relaxing getaway or a business trip, Seaview Lodge ensures a memorable stay with easy access to the beach, local attractions, and fine dining.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-gray-300 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 font-['Inter',sans-serif] text-[18px] border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-black text-black font-medium'
                    : 'border-transparent text-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Rooms List */}
          <div className="space-y-6">
            {rooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex">
                <div className="w-[280px] h-[220px]">
                  <img 
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Inter',sans-serif] text-[24px] font-medium text-black mb-2">{room.name}</h3>
                    <p className="font-['Inter',sans-serif] text-[16px] text-gray-700">{room.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-['Inter',sans-serif] text-[20px] text-black">
                      From <span className="font-semibold">R{room.price.toLocaleString()}</span>
                    </p>
                    <button 
                      onClick={() => handleBookClick(room)}
                      className="bg-[#8363f2] px-8 py-3 rounded-lg text-white font-['Inter',sans-serif] text-[18px] hover:bg-[#7052e1] transition-colors"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedRoom && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[500px] max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black">Seaview Suite-Standard</h3>
                  <p className="font-['Inter',sans-serif] text-[16px] text-gray-600">R{selectedRoom.price.toLocaleString()}.00 Per Night</p>
                </div>
                <button 
                  onClick={handleCancel}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Calendar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-['Inter',sans-serif] text-[18px] font-semibold text-black">{currentMonth} {currentYear}</h4>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {calendarDays.map((day, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (day.status !== 'prev' && day.status !== 'next' && day.status === 'available') {
                          setSelectedDate(day.date);
                        }
                      }}
                      disabled={day.status === 'booked' || day.status === 'reserved' || day.status === 'prev' || day.status === 'next'}
                      className={`h-10 rounded-md font-['Inter',sans-serif] text-[14px] font-medium transition-colors ${getDateColor(day.status, day.date)} ${
                        day.status === 'available' ? 'cursor-pointer' : 'cursor-not-allowed'
                      }`}
                    >
                      {day.date}
                    </button>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#8363f2]" />
                    <span className="font-['Inter',sans-serif] text-[14px] text-gray-700">Booked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#FFB62D]" />
                    <span className="font-['Inter',sans-serif] text-[14px] text-gray-700">Reserved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                    <span className="font-['Inter',sans-serif] text-[14px] text-gray-700">Available</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleConfirmBooking}
                  disabled={!selectedDate}
                  className="w-full bg-[#8363f2] py-3 rounded-lg text-white font-['Inter',sans-serif] text-[16px] font-medium hover:bg-[#7052e1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Select Available Date
                </button>
                <button 
                  onClick={handleConfirmBooking}
                  disabled={!selectedDate}
                  className="w-full bg-[#2D1B69] py-3 rounded-lg text-white font-['Inter',sans-serif] text-[16px] font-medium hover:bg-[#1f1447] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </button>
                <button 
                  onClick={handleCancel}
                  className="w-full border-2 border-gray-300 py-3 rounded-lg text-black font-['Inter',sans-serif] text-[16px] font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Toaster />
    </div>
  );
}
